var tableBody = document.getElementById("tdata");
let usersData = [];

function userData(data) {
  var tableRow = document.createElement("tr");
  var userId = document.createElement("td");
  userId.innerText = data.id;

  var userName = document.createElement("td");
  userName.innerText = data.name;

  var userAddress = document.createElement("td");
  userAddress.innerText = "city: " + data.address.city;

  var userCompany = document.createElement("td");
  let com_page = document.createElement("a");
  userCompany.append(com_page);
  com_page.href = "#";
  com_page.innerText = data.company.name;







  com_page.addEventListener("click", () => {
    let userWindow = window.open("", "_blank", "width=500,height=250");
    
    userWindow.document.write(`
    
      <div style="border:1px solid gray;padding:8px;margin:10px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h3>Company</h3>
        <p><strong>Name:</strong> ${data.company.name}</p>
        <p><strong>Catch Phrase:</strong> ${data.company.catchPhrase}</p>
        <p><strong>BS:</strong> ${data.company.bs}</p>
      </div>
    `);
  });








  var tdBtns = document.createElement("td");
  tdBtns.classList.add("p-2");
  var btnShow = document.createElement("button");
  btnShow.innerText = "show";
  btnShow.classList.add("btn", "btn-warning", "m-2");
  var btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("btn", "btn-danger", "m-2");








  btnDelete.addEventListener("click", async () => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${data.id}`,
        {
          method: "DELETE",
        }
      );
      
      console.log(response.status);
      
      if (response.ok) {
        usersData = usersData.filter(u => u.id !== data.id);
        tableRow.remove();
        console.log("Remaining users:", usersData);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  });











  btnShow.addEventListener("click", () => {
    let userWindow = window.open("", "_blank", "width=600,height=600");

    userWindow.document.write(`
      <body style="box-sizing:border-box;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.username}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Website:</strong>${data.website}</p>

        <div style="border:1px solid gray;padding:8px;margin:10px">
          <h3>Address</h3>
          <p><strong>Street:</strong> ${data.address.street}</p>
          <p><strong>Suite:</strong> ${data.address.suite}</p>
          <p><strong>City:</strong> ${data.address.city}</p>
          <p><strong>Zipcode:</strong> ${data.address.zipcode}</p>
          <p><strong>Geo:</strong> Lat ${data.address.geo.lat}, Lng ${data.address.geo.lng}</p>
        </div>

        <div style="border:1px solid gray;padding:8px;margin:10px">
          <h3>Company</h3>
          <p><strong>Name:</strong> ${data.company.name}</p>
          <p><strong>Catch Phrase:</strong> ${data.company.catchPhrase}</p>
          <p><strong>BS:</strong> ${data.company.bs}</p>
        </div>
      </body>
    `);
  });












  tdBtns.append(btnShow, btnDelete);
  tableRow.append(userId, userName, userAddress, userCompany, tdBtns);
  tableBody.append(tableRow);
}

async function getAllUsers() {
  try {
    var data = await fetch("https://jsonplaceholder.typicode.com/users");
    
    usersData = await data.json(); 
    
    if (usersData && usersData.length > 0) {
      usersData.forEach((user) => {
        userData(user);
      });
    }
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

getAllUsers();