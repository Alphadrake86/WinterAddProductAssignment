class Employee{
    Fname:string;
    Lname:string;
    DOB:Date;
    Id:string;
    Location:string;
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addEmployee;
}

function addEmployee():void{
    let errList:string[] = validate();
    if(errList.length > 0){
        errList.forEach(err => {
            let ul:HTMLUListElement = <HTMLUListElement>document.getElementById("errorList");
            let li:HTMLLIElement = document.createElement("li")
            li.innerText = err;
            ul.appendChild(li)
        });
    }
}

function getFormData():Employee{
    let emp = new Employee();

    let FnameData = getInputElement("Fname");
    let LnameData = getInputElement("Fname");
    let IdData = getInputElement("Fname");
    let DOBData = getInputElement("Fname");
    let LocationData = getInputElement("Fname");

    emp.DOB = DOBData.valueAsDate;
    emp.Fname = FnameData.value;
    emp.Lname = LnameData.value;
    emp.Id = IdData.value;
    emp.Location = LocationData.value;

    return emp;
}

function validate():string[]{
    let errList:string[] = [];

    if((getInputElement("Fname")).value == "" || getInputElement("Lname").value == ""){
        errList.concat("Please enter a name")
    }
    let id:string = getInputElement("employeeId").value;
    if(id = ""){
        errList.concat("Please enter an Id")
    }
    else if(id.length != 9){
        errList.concat("Invalid Id code")
    }
    if(getInputElement("DOB").valueAsDate == null){
        errList.concat("Please enter a date of birth")
    }
    else if(getInputElement("DOB").valueAsDate.getTime >= Date.now){
        errList.concat("Please enter a time in the past")
    }

    if(getInputElement("location").value == "Please select a location"){
        errList.concat("Please select a location")
    }
    return errList;
    
}

function getInputElement(Id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(Id)
}