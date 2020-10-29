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
    alert("hi")
}

function getFormData():Employee{
    let emp = new Employee();

    let FnameData = <HTMLInputElement>document.getElementById("Fname");
    let LnameData = <HTMLInputElement>document.getElementById("Fname");
    let IdData = <HTMLInputElement>document.getElementById("Fname");
    let DOBData = <HTMLInputElement>document.getElementById("Fname");
    let LocationData = <HTMLInputElement>document.getElementById("Fname");

    emp.DOB = DOBData.valueAsDate;
    emp.Fname = FnameData.value;
    emp.Lname = LnameData.value;
    emp.Id = IdData.value;
    emp.Location = LocationData.value;

    return emp;
}