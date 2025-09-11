let container = document.querySelector(".container");
let inputField = document.createElement("input");
let counter = document.querySelector(".c");
inputField.setAttribute("placeholder", "Searching text...");
inputField.setAttribute("id", "search");

let cart = JSON.parse(localStorage.getItem("cart"))||[];
let total = cart.reduce((sum, item) => sum + item.count, 0);
counter.textContent = total;

var card = (o) => {
  let item = document.createElement("div");
  item.setAttribute("id", "items");

  let img = document.createElement("img");
  img.setAttribute("src", o.img);

  let h = document.createElement("h3");
  h.innerText = o.head;

  let desc = document.createElement("p");
  desc.innerText = o.desc;

  let btn = document.createElement("button");
  btn.innerText = "Buy";
  
  btn.addEventListener("click", () => {
    total++;
    counter.textContent = total;
    let exist = cart.find(c => c.head === o.head);
    if(exist){
      exist.count++;
    }else{
    cart.push({
          img: o.img,
          head: o.head,
          desc: o.desc,
          count: 1
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  
  item.append(img, h, desc, btn);
  container.appendChild(item);
};

let cards = [
  {
    img: "./images/Belgian.jpg",
    head: "Bread Basket",
    desc: "Assortment of fresh baked fruit breads and muffins 5.50",
    count: 0,
  },
  {
    img: "./images/Hemp-Bread.jpg",
    head: "Scrambled eggs",
    desc: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
    count: 0,
  },
  {
    img: "./images/image2.jfif",
    head: "Belgian Waffle",
    desc: "Vanilla flavored batter with malted flour 7.50",
    count: 0,
  },
];

function render(list) {
  container.innerHTML = "";
  list.forEach((c) => card(c));
}
render(cards)

inputField.addEventListener("input", () => {
  let val = inputField.value.toLowerCase();
  const filtered = cards.filter(
    (c) =>
      c.head.toLowerCase().includes(val) || c.desc.toLowerCase().includes(val)
  );
  render(filtered)
});

document.body.prepend(inputField);
