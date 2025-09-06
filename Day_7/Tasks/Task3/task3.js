let users = JSON.parse(localStorage.getItem("user")) || [];
let container = document.querySelector(".container");
let msg = document.createElement("ul");
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

let registerBtn = document.createElement("button");
registerBtn.innerText = "Register";
registerBtn.setAttribute("class", "reg");
registerBtn.setAttribute("type", "button");

let loginBtn = document.createElement("button");
loginBtn.innerText = "Login";
loginBtn.setAttribute("class", "log");
loginBtn.setAttribute("type", "button");

form.append(
  userLabel,
  username,
  passLabel,
  password,
  confirLabel,
  confir,
  registerBtn,
  loginBtn,
  msg
);
container.append(form);

function addError(text) {
  let err = document.createElement("li");
  err.innerText = text;
  msg.appendChild(err);
}

registerBtn.addEventListener("click", () => {
  msg.innerHTML = "";
  let usernameVal = username.value.trim();
  let passwordVal = password.value.trim();
  let confirVal = confir.value.trim();

  if (!usernameVal) {
    addError("Username can't be empty");
    return;
  }
  if (passwordVal.length < 4 || passwordVal.length > 12) {
    addError("Password length should be between 4 and 12");
    return;
  }
  if (passwordVal !== confirVal) {
    addError("Passwords do not match");
    return;
  }

  let exists = users.some(u => u.username === usernameVal);
  if (exists) {
    addError("Username already exists");
    return;
  }

  users.push({
    username: usernameVal,
    password: passwordVal
  });

  localStorage.setItem("user", JSON.stringify(users));

  alert("Registered successfully!");
  username.value = "";
  password.value = "";
  confir.value = "";
});

loginBtn.addEventListener("click", () => {
  msg.innerHTML = "";
  let usernameVal = username.value.trim();
  let passwordVal = password.value.trim();
  let confirVal = confir.value.trim();


  let users = JSON.parse(localStorage.getItem("user")) || [];

  if (users.length === 0) {
    addError("No registered user found. Please register first.");
    return;
  }

  let found = users.find(
    u => u.username === usernameVal && u.password === passwordVal && confirVal === u.password 
  );

  if (found) {
    alert("Login successful!");
    window.location.href = "../Task1/task1.html";
  } else {
    addError("Invalid username or password");
  }
});
