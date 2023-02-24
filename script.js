function populateStorage(email, password) {
    localStorage.setItem(email, password);
}
function Hider() {
    const LogHider = document.getElementById('LoginPage');
    const RegHider = document.getElementById('RegPage');
    if (LogHider.style.display === "flex") {
        RegHider.style.display = "flex";
        LogHider.style.display = "none";
        return;
    }
    LogHider.style.display = "flex";
    RegHider.style.display = "none";

}

function LoginCred() {
    var Logemail = document.getElementById('LogMail').value;
    if(Logemail.length == 0) {
        alert("please Enter You Credentials Fully");
        return;
    }
    var LogPassCode = document.getElementById('LogPassword').value;
    if(LogPassCode.length == 0) {
        alert("please Enter You Credentials Fully");
        return;
    }
    if (localStorage.getItem(Logemail) === null) {
        alert("User Not Found");
        return;
    }
    if (localStorage.getItem(Logemail) != LogPassCode) {
        alert("Incorrect PassWord");
        return;
    }
    alert("Login Success");

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
    if(localStorage.getItem(email) !== null) {
        alert("user Already Exist");
        return;
    }
    if (email.includes('@') < 1 || email.includes('.') < 1) {
        alert("Email is invalid");
        return;
    }
    var ConfrmPassCode = document.getElementById('CnfrmPass').value;
    if(PassCode != ConfrmPassCode) {
        alert("Password Doesnot Match");
        return;
    }
    populateStorage(email, PassCode);
    alert("You have Successfully Registered With " + email);

}