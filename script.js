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
    var LogPassCode = document.getElementById('LogPassword').value;
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
    if (email.includes('@') < 1 || email.includes('.') < 1) {
        alert("Email is invalid");
        return;
    }
    var ConfrmPassCode = document.getElementById('CnfrmPass').value;
    populateStorage(email, PassCode);
    alert(localStorage.getItem(email) + " " + email);

}