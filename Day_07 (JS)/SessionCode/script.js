/**
 * Event ==> action user make it on element ==> output
 *
 * Asynchrounous function
 *
 *
 * Events ==>   click  || dbClick || onmuseEnter || onMouseLeave || hover || blur
 * onEvent  ==>
 * addEvent
 *
 *
 * change event ==> another element
 *
 */
// let btn=document.getElementById("btn")

// btn.onclick=read
// btn.onclick=()=>{
// let text=document.getElementsByClassName("text")

// text[0].style.display="block"

// let pg=document.getElementsByTagName("p")
// pg[0].style.display="none"

// btn.innerText="Read less"

// let header=document.getElementsByTagName("h1")

// header[0].innerText= "About Page"
// }

// btn.onclick=print
// function print() {
//     console.log("hello");
// }

// // // function read()
// // // {
// // // // let readText=document.getElementsByClassName("text")
// // // // readText[0].style.display="block"

// // //     // readText[0].classList.toggle("text");

// // // /**
// // //  * remove class
// // //  * change style
// // //  */
// // // // print()

// // // // =====================

// // // let text=document.getElementsByClassName("text")

// // // text[0].style.display="block"

// // // let pg=document.getElementsByTagName("p")
// // // pg[0].style.display="none"

// // // btn[0].innerText="Read less"

// // // let header=document.getElementsByTagName("h1")

// // // header[0].innerText= "About Page"

// // // }

// /**
//  * addEventListener
//  */
// // btn.onclick=()=>{}
// // btn.onclick=print

// btn.addEventListener("click",print)
// btn.addEventListener("click",(e)=>{
//     console.log(e);

//     console.log(e.target);

// // let text=document.getElementsByClassName("text")
// // text[0].style.display="block"

// // let pg=document.getElementsByTagName("p")
// // pg[0].style.display="none"

// e.target.innerText="Read less"

// // let header=document.getElementsByTagName("h1")

// // header[0].innerText= "About Page"

// }

// )

// // onMouseEnter
// let content =document.getElementById("content")
//   let text=document.querySelector("#content p")
// content.addEventListener("mouseenter",()=>
// {
//     btn.style.backgroundColor="black";

//     text.style.fontSize="30px"

// }
// )
// // MouseLeave

// content.addEventListener("mouseleave",()=>{
//       text.style.fontSize="16px"
//         btn.style.backgroundColor="brown";
// })

// let inputValue=document.querySelector("input[type='search']")
// // console.log(inputValue.value);

// let btnSearch=document.getElementById("btnSearch")
// btnSearch.addEventListener("click",()=>{
//     console.log(inputValue.value);
// })

/**
 * change
 *
 */
// let sectionSearchText=document.getElementById("valueSearch")

// inputValue.addEventListener('input',(e)=>{
//     // console.log(inputValue.value);
//     // // console.log(inputValue);
//     // // console.log(e.target);

// // sectionSearchText.innerText=inputValue.value
// sectionSearchText.innerText=e.target.value

// })

// let first=document.getElementById("first")
// let second=document.getElementById("second")
// let third=document.getElementById("third")

// first.addEventListener('click',(e)=>{
//     console.log("first");
//     e.stopImmediatePropagation();

// })
// second.addEventListener('click',(e)=>{
//     console.log("second");
//     e.stopImmediatePropagation();

// })
// third.addEventListener('click',(e)=>{
//     console.log("third");
//     e.stopImmediatePropagation();

// // })

// //================ BOM

// /**
//  * Browser Object Model
//  *
//  * window
//  * history
//  * location
//  * navigator
//  * secreen
//  *
//  */

// /**
//  * open new window
//  * close
//  * move to
//  * move by
//  * size to
//  * size by
//  */

// var aboutPage

// let btnOpen=document.getElementById("btnOpen")
// let btnClose=document.getElementById("btnClose")
// let btnMoveTo=document.getElementById("btnMoveTo")
// let btnMoveBy=document.getElementById("btnMoveBy")
// let btnSizeTo=document.getElementById("btnSizeTO")
// let btnSizeBy=document.getElementById("btnSizeBy")
// btnOpen.addEventListener("click",()=>{
// aboutPage=window.open("about.html","","width:300px","height:300px")
// aboutPage.focus()
// })

// btnClose.addEventListener('click',()=>{
//     aboutPage.close()
// })

// btnMoveTo.addEventListener("click",()=>{
//     aboutPage.focus()
//     aboutPage.moveTo(500,500)
// })
// btnMoveBy.addEventListener("click",()=>{
//     aboutPage.focus()
//     aboutPage.moveBy(-10,-10)
// })
// btnSizeTo.addEventListener("click",()=>{
//     aboutPage.focus()
//     aboutPage.resizeTo(50,50)
// })
// btnSizeBy.addEventListener("click",()=>{
//     aboutPage.focus()
//     aboutPage.resizeBy(-50,-50)
// })

// // navigator
// window.navigator.geolocation.getCurrentPosition((p)=>{
// console.log(p.coords.longitude);
// console.log(p.coords.latitude);

// })

// console.log(history);
// console.log(history.length);
// console.log(history.forward());
// console.log(history.back());

//============== localStorage

var name = localStorage.setItem("name", JSON.stringify("python"));
var age = localStorage.setItem("age", JSON.stringify(25));
var course = localStorage.setItem(
  "courses",
  JSON.stringify(["html", "css", "js"])
);
// console.log(localStorage.getItem("name"));

console.log(typeof localStorage.getItem("name"));
console.log(typeof localStorage.getItem("age"));

console.log(JSON.parse(localStorage.getItem("name")));
console.log(JSON.parse(localStorage.getItem("age")));
console.log(JSON.parse(localStorage.getItem("courses")));

/**
 *
 * json.parse
 * json.stringfy
 *
 *
 */

// console.log(document.cookie);
document.cookie ="name=iti";
document.cookie =
  "name=about;expires=Fri, 05 Sep 2025 12:10:02 GMT;path=/Day4/about.html";

  /**
   * front 
   * local 
   * cookie
   * 
   * session
   * local 
   */

