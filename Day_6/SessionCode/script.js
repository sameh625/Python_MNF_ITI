/**
 * DOM 
 * select element  ==> id , class , tagName
 * id ==> unqie ==> element 
 * class ==> html collection (array )
 * tag name ==>  html collection (array )
 * Name ==> name in form ==>html collection (array )
 * deal each element in html collection ==> index
 * 
 * query selector  == > node eleemnt ==> one elemnt
 * query selector all  ==> node list =>  array
 * * deal each element in node list ==> index
 * 
 * 
 * public attributes =>
 *    form
 *    link
 *    title
 *    images
 * 
 * 
 * ====================>  atrributes public
 */

// let container = document.getElementById("container")
// console.log(container);

// let text=document.getElementsByClassName("text")
// console.log(text); // array ==> index (0) , length 

// // index
// // console.log(text[0]);
// // console.log(text[1]);



// let btn=document.getElementsByTagName("button")
// console.log(btn[0]); // html collection => [index]



// let btnContainer=document.querySelector("#container button") // element
// let textContainer=document.querySelectorAll(".text")
// console.log(textContainer[1]); // node list

// // document ==> 

//     console.log(document);
    
    



// // var person={
// //     name:"iti",
// //     age:25,
// //     print()
// //     {
// //         console.log("hello");
        
// //     }
// // }

// // person[name]
// // person.name
// // person.print



// // var document={
// //     images:images,
// //     title:"document",
// //     forms:forms,
// //     links:link
// // }

// document.title ="day 3 js"

// console.log(document.title );

// console.log(document.links[0]);
// console.log(document.images[2]);

// console.log(document.forms[0]
// );

// let userName=document.getElementsByName("userName")

// console.log(userName[0]);


// //=============> change content of elemnt 
// // html   ==> elem.innerhtml
// // text   ==> elem.innertext
// {/* <div>

// text
// <p></p>

// </div> */}


// let container = document.getElementById("container")

// container.innerText="Hello Track Python"

// container.innerHTML=`
// <p class="text">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum doloribus ab ad, laborum reiciendis consequuntur. Facere labore quo iste quos, rem sit delectus sapiente dolore alias totam maiores ea architecto!
//         </p>

//   <button id="btn">Read More</button>
// `


// ================> change in style

let cardsContainer=document.getElementsByClassName("cards")  // html



// cardsContainer[0].style.border="1px solid gray"
// cardsContainer[0].style.width="70%"
// cardsContainer[0].style.margin="10px auto"
// // cardsContainer[0].style.textAlign = "center"
// cardsContainer[0].style="text-align:center"

// /**
//  * ele.style="propertiy:value" ==> override on style
//  * ele.style.propertiy="value" ==> add on style
//  */
cardsContainer[0].style.cssText=`
border:1px solid gray;
width:70%;
border-radius:10px;
text-align:center;
margin:10px auto;
padding:10px
`


// //=========== classes 

// console.log(cardsContainer[0].classList);

// /**
//  * get all classes ==> ele.classList
//  * add class 
//  * remove class 
//  * toggle ==> on || off 
//  * toggle class ==> exist : remove || not exist : add
//  */
cardsContainer[0].classList.add("imgs","testImg")
// cardsContainer[0].classList.remove("testImg")
// cardsContainer[0].classList.toggle("testImg")




// =================== Attributes ==>
    /**
     * Public atrribute ==> class , name , id , width , height
     * 
     * element specific attribute ==> (img => src , alt )
     *                             ==> (a => href )
     * 
     * 
     * get attribute 
     * add attribute
     * edit attribute 
     * remove attribute 
     */


// selcect elemnet 


let link=document.getElementsByTagName("a")
// html collection ==> ele => index

// get attribute
console.log(link[0].getAttribute("href"));
console.log(link[0].href);

// set attribute 
/**
 * add ==> atrribute (if attribute not exit)
 * add value==> value to atrribute
 * edit ==> edit value of atrribute
 */

// add attribute 
// link[0].setAttribute("id","link")

// // add value ==>  if attribute exist but has no value
// link[0].setAttribute("class","linkText")

// // edit value  ==> if attribute exist but has value
// link[0].setAttribute("class","hyperText")


// ===

// edit
// link[0].href="www.facebook.com"
// add
link[0].id="href"
// edit value ==> add value to attribute
link[0].className="textLink"

console.log(link[0].class);

//=============

var imgs=document.getElementsByTagName('img')
// var imgs=document.querySelectorAll('img')
// var imgs=document.images;

for (let i=0;i<imgs.length;i++) {

    imgs[i].title="service"
}




// imgs[2].removeAttribute("title")
// // imgs[1].removeAttribute("src")

// imgs[1].toggleAttribute("src")

// ==================== create new elemnt


/**
 * select elemnt
 */


let content=document.getElementById("content")

content.style.cssText=`
   border: 1px solid rgb(214, 177, 177);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 60%;
    margin: 10px auto;

`


//creat lement 

let image=document.createElement("img") 
// <img>
image.setAttribute("src","../imgs/offers1.png")
//  <img src="../imgs/offers1.png">

// parent .appendChild(image)
// content.appendChild(image)


image.style.cssText=`
  width: 50%;
    height: 40%;
    border-radius: 15px;
    margin: 5%;

`

let btn=document.createElement("button")
// <button>  </button>
btn.innerText="Add To cart"
// <button> Add To cart  </button>
// content.appendChild(btn)

let textContent=document.createElement("p")

textContent.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum doloribus ab ad, laborum reiciendis consequuntur."

// content.appendChild(textContent)

textContent.classList.add('text')


content.append(image , textContent , btn)