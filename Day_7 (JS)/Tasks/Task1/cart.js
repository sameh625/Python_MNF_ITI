let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

let checkout = document.createElement("button");
checkout.innerText = "Checkout";
checkout.setAttribute("id", "checkout");
let table = document.querySelector("#cartTable");

cart.forEach((item, index) => {
  let row = document.createElement("tr");
  total += item.count;
  row.innerHTML = `
        <td>${item.head}</td>
        <td>
        <button class='minus' id=${index}>-</button>
        <span class='cnt'>${item.count}</span>
        <button class='plus' id=${index}>+</button>
        </td>
      `;
  table.appendChild(row);
});

let tfoot = document.createElement("tfoot");
tfoot.innerHTML = `
  <tr>
    <td><strong>Total Items</strong></td>
    <td><strong>${total}</strong></td>
  </tr>
`;
table.appendChild(tfoot);

let wrap = document.querySelector(".wrapper");
wrap.appendChild(checkout);

document.querySelectorAll(".plus").forEach(plus => {
  plus.addEventListener("click", () => {
    let i = plus.getAttribute("id");
    cart[i].count++;
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); 
  });
});

document.querySelectorAll(".minus").forEach(minus => {
  minus.addEventListener("click", () => {
    let i = minus.getAttribute("id");
    cart[i].count--;
    if (cart[i].count <= 0) {
      cart.splice(i, 1); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
  });
});

checkout.addEventListener("click", () => {
  localStorage.removeItem("cart");
  window.location.href = "../Task1/task1.html";
});
