let container = document.querySelector(".container");

let form = document.createElement("form");

let userLabel = document.createElement("label");
userLabel.innerText = "Username:";
userLabel.setAttribute("for", "username");

let username = document.createElement("input");
username.setAttribute("type", "text");
username.setAttribute("id", "username");
username.setAttribute("placeholder", "Enter your username");

let passLabel = document.createElement("label");
passLabel.innerText = "Password:";
passLabel.setAttribute("for", "password");

let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Enter your password");

let confirLabel = document.createElement("label");
confirLabel.innerText = "Confirm Password:";
confirLabel.setAttribute("for", "confirm");

let confir = document.createElement("input");
confir.setAttribute("type", "password");
confir.setAttribute("id", "confirm");
confir.setAttribute("placeholder", "Re-enter your password");

let btn = document.createElement("button");
btn.innerText = "Register";
btn.setAttribute("id", "register");
btn.setAttribute("type", "submit");

form.append(userLabel, username, passLabel, password, confirLabel, confir, btn);
container.append(form);
