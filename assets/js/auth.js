//Gets value from form

var users = JSON.parse(localStorage.getItem('userList'));
if (users === null) {
    users = [];
}

// for (var i = 0; i < users.length; i++) {
//     var username = users[i]["usr"];
//     var password = users[i]["pass"];
// }

// Registration
const register = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let user = {
        username: document.getElementById('usr').value,
        password: document.getElementById('pass').value
    }
    users.push(user);
    document.forms[0].reset();
    document.querySelector('form').reset();

    localStorage.setItem('userList', JSON.stringify(users));

                message.innerHTML = "Registration Successfull!";



}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', register);
});


let usrVar = document.querySelector("#usr");
let passVar = document.querySelector("#pass");
let submit = document.querySelector("#submit");

let message = document.querySelector(".message");

//Sign in

function signIn() {
    for (i = 0; i < users.length; i++) {

        var username = users[i]["username"];
        var password = users[i]["password"];

        if (username == usrVar.value && passVar.value == password) {
            window.location.href="mainpage.html";
            message.innerHTML = "Login successfull";
            var currentUser = username;
            localStorage.setItem('currentUser',currentUser);
  
            break;
        } else {
            message.innerHTML = "Login failed";
        }
    }
}