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
    clearErrors()
    let errs:number = validate();   
    if(errs == 0){
        displayEmployee(getFormData())
    }
}

function displayEmployee(emp:Employee):void{
    document.getElementById("display").innerText = 
    "Name: " + emp.Fname + " " + emp.Lname + "\n" +
    "Employee ID number: " + emp.Id + "\n" +
    "Date of Birth: " + (emp.DOB.getUTCMonth()+1) + "/" + emp.DOB.getUTCDate() + "/" +emp.DOB.getFullYear() + "\n" +
    "Location: " + emp.Location;
    //this is gross, never do this
}

function getFormData():Employee{
    let emp = new Employee();

    let FnameData = getInputElement("fname");
    let LnameData = getInputElement("lname");
    let IdData = getInputElement("id");
    let DOBData = getInputElement("dob");
    let LocationData = getInputElement("location");

    emp.DOB = DOBData.valueAsDate;
    emp.Fname = FnameData.value;
    emp.Lname = LnameData.value;
    emp.Id = IdData.value;
    emp.Location = LocationData.value;

    return emp;
}

function validate():number{
    let err:number = 0;

    if(getInputElement("fname").value == "" || getInputElement("lname").value == ""){
        addError("Please enter a name")
        err++;
        
    }
    let id:string = getInputElement("id").value;
    if(id == ""){
        addError("Please enter an Id")
        err++;
    }
    else if(id.length != 8){
        addError("Please enter valid Id code")
        err++;
    }
    if(getInputElement("dob").valueAsDate == null){
        addError("Please enter a date of birth")
        err++;
    }
    else if(getInputElement("dob").valueAsDate.getTime >= Date.now){
        addError("Please enter a time in the past")
        err++;
    }

    if(getInputElement("location").value == "Please select a location"){
        addError("Please select a location")
        err++;
    }
    return err;
    
}

function getInputElement(Id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(Id)
}

function addError(error:string):void{
    let ul:HTMLUListElement = <HTMLUListElement>document.getElementById("errorList");
    let li:HTMLLIElement = document.createElement("li")
    li.innerText = error;
    ul.appendChild(li)
}

function clearErrors():void{
    let ul:HTMLUListElement = <HTMLUListElement>document.getElementById("errorList");
    while(ul.firstChild)ul.removeChild(ul.firstChild)
}