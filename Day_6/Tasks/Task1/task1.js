let container = document.querySelector(".container");
let inputField= document.createElement("input")
inputField.setAttribute("placeholder","Searching text...")
inputField.setAttribute("id","search");



var card = (image, head, d) => {
  let item = document.createElement("div");
  item.setAttribute("id", "items");
  
  let img = document.createElement("img");
  img.setAttribute("src", image);

  let h = document.createElement("h3");
  h.innerText = head;

  let desc = document.createElement("p");
  desc.innerText = d;

  let btn = document.createElement("button");
  btn.innerText = "Buy";

  item.append(img,h,desc,btn);
  container.appendChild(item);
};

cards = [
  {
    img: "./images/Belgian.jpg",
    head: "Bread Basket",
    desc: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    img: "./images/Hemp-Bread.jpg",
    head: "Scrambled eggs",
    desc: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
  },
  {
    img: "./images/image2.jfif",
    head: "Belgian Waffle",
    desc: "Vanilla flavored batter with malted flour 7.50",
  },
];

for (let i = 0; i < cards.length; i++) {
    card(cards[i].img,cards[i].head,cards[i].desc);
}



document.body.append(inputField,container)
