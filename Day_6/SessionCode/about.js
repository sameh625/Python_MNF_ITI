/**
 * section ==> class : parent 
 * section * 3 ==> child => img p btn
 */

var parentContent=document.createElement("section")
// parentContent.setAttribute("class","parent")
parentContent.classList.add("parent")


function createElemnt()
{
    
var childContent=document.createElement("section")
childContent.classList.add("child")

let image=document.createElement("img")
image.src="../imgs/services1.svg"
image.style.cssText=`
 width: 50%;
    height: 40%;
    border-radius: 15px;
    margin: 5%;
`

let btn=document.createElement("button")
btn.innerText='Click Here'

btn.classList.add("btnStyle")

let textContent=document.createElement("p");
textContent.innerText="lorem jdsdfashdjshf djhfjdhf hhfjhdksf  hdsfhdhs"
textContent.classList.add('text')

childContent.append(image,textContent,btn)
parentContent.appendChild(childContent) //3

}


for(let i=0 ; i<3;i++)
{
    createElemnt()
}
// Append parentContent to the body
document.body.appendChild(parentContent);


// 
// var imgSrc=["services1.svg","services2.svg","services1.svg"]
// var imgAlt=["img1","img2","img3"]

// var imgData=[
//     {
//     imgSrc:"services1.svg",
//     imgAlt:"sercvice1"
// },
//  {
//     imgSrc:"services2.svg",
//     imgAlt:"sercvice2"
// },
//  {
//     imgSrc:"services3.svg",
//     imgAlt:"sercvice3"
// }
// ]
// var aboutCards=document.createElement("section")
// aboutCards.classList.add("cardImg")

// function createImg(srcImg)
// {
//    let image=document.createElement("img")
//    image.setAttribute("src",'../imgs/'+srcImg)
//    aboutCards.appendChild(image)
// }

// for(let i=0;i<imgSrc.length;i++)
// {
//   createImg(imgSrc[i]) // src 
    
// }

// document.body.appendChild(aboutCards)


//===================
var imgData=[
    {
    imgSrc:"services1.svg",
    imgAlt:"sercvice1"
},
 {
    imgSrc:"services2.svg",
    imgAlt:"sercvice2"
},
 {
    imgSrc:"services3.svg",
    imgAlt:"sercvice3"
}
]
var aboutCards=document.createElement("section")
aboutCards.classList.add("cardImg")

function createImg(srcImg,altImg)
{
   let image=document.createElement("img")
   image.setAttribute("src",'../imgs/'+srcImg)
   image.setAttribute("alt",altImg)
   aboutCards.appendChild(image)
}

for(let i=0;i<imgData.length;i++)
{
//   createImg(imgSrc[i]) // src 
// console.log(imgData[i].imgSrc);
// console.log(imgData[i].imgAlt);

    createImg(imgData[i].imgSrc,imgData[i].imgAlt) 
}

document.body.appendChild(aboutCards)