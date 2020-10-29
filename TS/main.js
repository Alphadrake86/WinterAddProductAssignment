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
    alert("hi");
}
function getFormData() {
    var emp = new Employee();
    var FnameData = document.getElementById("Fname");
    var LnameData = document.getElementById("Fname");
    var IdData = document.getElementById("Fname");
    var DOBData = document.getElementById("Fname");
    var LocationData = document.getElementById("Fname");
    emp.DOB = DOBData.valueAsDate;
    emp.Fname = FnameData.value;
    emp.Lname = LnameData.value;
    emp.Id = IdData.value;
    emp.Location = LocationData.value;
    return emp;
}
