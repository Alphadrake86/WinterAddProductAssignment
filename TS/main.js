var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addEmployee;
};
function addEmployee() {
    clearErrors();
    var errs = validate();
    if (errs == 0) {
        displayEmployee(getFormData());
    }
}
function displayEmployee(emp) {
    document.getElementById("display").innerText =
        "Name: " + emp.Fname + " " + emp.Lname + "\n" +
            "Employee ID number: " + emp.Id + "\n" +
            "Date of Birth: " + (emp.DOB.getUTCMonth()+1) + "/" + emp.DOB.getUTCDate() + "/" +emp.DOB.getFullYear() + "\n" +
            "Location: " + emp.Location;
    //this is gross, never do this
}
function getFormData() {
    var emp = new Employee();
    var FnameData = getInputElement("fname");
    var LnameData = getInputElement("lname");
    var IdData = getInputElement("id");
    var DOBData = getInputElement("dob");
    var LocationData = getInputElement("location");
    emp.DOB = DOBData.valueAsDate;
    emp.Fname = FnameData.value;
    emp.Lname = LnameData.value;
    emp.Id = IdData.value;
    emp.Location = LocationData.value;
    return emp;
}
function validate() {
    var err = 0;
    if (getInputElement("fname").value == "" || getInputElement("lname").value == "") {
        addError("Please enter a name");
        err++;
    }
    var id = getInputElement("id").value;
    if (id == "") {
        addError("Please enter an Id");
        err++;
    }
    else if (id.length != 8) {
        addError("Please enter valid Id code");
        err++;
    }
    if (getInputElement("dob").valueAsDate == null) {
        addError("Please enter a date of birth");
        err++;
    }
    else if (getInputElement("dob").valueAsDate.getTime >= Date.now) {
        addError("Please enter a time in the past");
        err++;
    }
    if (getInputElement("location").value == "Please select a location") {
        addError("Please select a location");
        err++;
    }
    return err;
}
function getInputElement(Id) {
    return document.getElementById(Id);
}
function addError(error) {
    var ul = document.getElementById("errorList");
    var li = document.createElement("li");
    li.innerText = error;
    ul.appendChild(li);
}
function clearErrors() {
    var ul = document.getElementById("errorList");
    while (ul.firstChild)
        ul.removeChild(ul.firstChild);
}
