//Gets value from form

var users = JSON.parse(localStorage.getItem('userList'));
if (users === null) {
    users = [];
}
let usrVar = document.querySelector("#usr");
let passVar = document.querySelector("#pass");

let message = document.querySelector(".message");

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

 
    message.innerHTML = "<p style=\"text-align:center;\">Registration complete</p>";
 



}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('register').addEventListener('click', register);
});



//Sign in

function signIn() {
    
    
    for (i = 0; i < users.length; i++) {

        var username = users[i]["username"];
        var password = users[i]["password"];

        if (username == usrVar.value && passVar.value == password) {

            message.innerHTML = "Login successfull";
            var currentUser = username;
            localStorage.setItem('currentUser', currentUser);
            if(username === "admin") {
                window.location.href = "adminPage.html";
            } else {
                window.location.href = "mainpage.html";
            }
        }
        // } else if ("admin" == usrVar.value && "password" == passVar.value) {
        //     var currentUser = usrVar.value;
        //     localStorage.setItem('currentUser', currentUser);
        //     window.location.href = "adminPage.html";
        //     break;
        // } 
        else if (!usrVar.value || !passVar.value) {

            message.innerHTML = "Username or password is missing<br><p style=\"color:grey;font-size:0.8em;text-align:center;\">Please contact administrator</p>";
            break;
        } 
        else {
            message.innerHTML = "Login failed";
        }
    }

}