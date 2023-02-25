var LogHider = document.getElementById('LoginPage');
LogHider.style.display = "flex"
var RegHider = document.getElementById('RegPage');
var ActualPage = document.getElementById('ActualPage');
ActualPage.style.display = "none";
var FirstNameAct;
var LastNameAct;
function Hider() {
    if (LogHider.style.display === "flex") {
        ActualPage.style.display
        RegHider.style.display = "flex";
        LogHider.style.display = "none";
        return;
    }
    LogHider.style.display = "flex";
    RegHider.style.display = "none";

}


function LoginCred() {
    var Logemail = document.getElementById('LogMail').value;
    if (Logemail.length == 0) {
        alert("please Enter You Credentials Fully");
        return;
    }
    var LogPassCode = document.getElementById('LogPassword').value;
    if (LogPassCode.length == 0) {
        alert("please Enter You Credentials Fully");
        return;
    }
    if (localStorage.getItem(Logemail) == null) {
        alert("User Not Found");
        return;
    }
    
    if (JSON.parse(localStorage.getItem(Logemail)).password !== LogPassCode) {
        alert("Incorrect Password");
        return;
    }
    console.log("success");
    FirstNameAct =  JSON.parse(localStorage.getItem(Logemail)).username.fname;
    LastNameAct =  JSON.parse(localStorage.getItem(Logemail)).username.lname;
    document.getElementById('FirstAct').innerHTML = FirstNameAct ;
    document.getElementById('LastAct').innerHTML = LastNameAct;
    Logge();
}

function Logge() {
        ActualPage.style.display = "block";
        LogHider.style.display = "none";
} 

function Register() {
    var FirstName = document.getElementById('fname').value;
    if (FirstName.length < 8) {
        alert('First Should more than 8 characters');
        return;
    }
    var LastName = document.getElementById('lname').value;
    var PassCode = document.getElementById('password').value;
    if (LastName.length === 0) {
        alert('Please Provide Your LastName');
        return;
    }
    var email = document.getElementById('Email').value;
    if (localStorage.getItem(email) !== null) {
        alert("user Already Exist");
        return;
    }
    if (email.includes('@') < 1 || email.includes('.') < 1) {
        alert("Email is invalid");
        return;
    }
    var ConfrmPassCode = document.getElementById('CnfrmPass').value;
    if (PassCode != ConfrmPassCode) {
        alert("Password Doesnot Match");
        return;
    }
    var variable = JSON.stringify({
        username: {
            fname: FirstName,
            lname: LastName
        }, email: email, password: PassCode
    });
    localStorage.setItem(email, variable);

}