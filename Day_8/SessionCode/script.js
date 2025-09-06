//==========> promise =====> 
    /**
     * promise ==> call back function ==> 2 call back funtion
     * 
     * success ==> resolve   , ==> fullfilled
     * failed  ===> error   =====> rejected
     * pending  ==>
     */


var  tableBody=document.getElementById("tdata")
function userData(data)
{
console.log(data);
var tableRow=document.createElement("tr")
var userId=document.createElement("td")
userId.innerText=data.id

var userName=document.createElement("td")
userName.innerText=data.name

var userAddress=document.createElement("td")
userAddress.innerText="city: "+data.address.city

var userCompany=document.createElement("td")
let com_page=document.createElement("a")
userCompany.append(com_page)
com_page.href="#"
com_page.innerText=data.company.name

var tdBtns=document.createElement("td")
tdBtns.classList.add('p-2')
var btnShow=document.createElement("button")
btnShow.innerText="show"
btnShow.classList.add('btn','btn-warning','m-2')
var btnDelte=document.createElement("button")
btnDelte.innerText="Delte"
btnDelte.classList.add('btn','btn-danger','m-2')

tdBtns.append(btnShow,btnDelte)


tableRow.append(userId,userName,userAddress,userCompany,tdBtns)
tableBody.append(tableRow)





}

// var users=[{
//     id:1,
//     name:"iti",
//     address:"menoufia",
//     track:"python",
// },{
//     id:2,
//     name:"iti",
//     address:"menoufia",
//     track:"python",
// },{
//     id:3,
//     name:"iti",
//     address:"menoufia",
//     track:"python",
// },{
//     id:4,
//     name:"iti",
//     address:"menoufia",
//     track:"python",
// },]


// var promise =new Promise((resolve,rejected)=>{
// // // console.log(resolve());
// // console.log(rejected());
// // var user="iti"
// if(users&& users.length>0)
// {
//     resolve(users)
// }else{
//     rejected({message:"No Uesrs"})
// }

// })
// // console.log(promise);

// promise
// .then((users)=>{
//     // console.log(user);
//     // call resolve

//     users.forEach((user)=>{
//     userData(user)

//     })

// })
// .catch((e)=>{
//     // console.log(e.message);
//     alert(e.message)
    
// // reject
// })

// fetch('https://jsonplaceholder.typicode.com/users')  // promise
//       .then(response => response.json())
//       .then(json => console.log(json))


// console.log(fetch('https://jsonplaceholder.typicode.com/users') ); // promise

// fetch('https://jsonplaceholder.typicode.com/users') // promise
// .then((response)=>{
// // console.log(typeof(response));
// // console.log(response.json()); // promise
// return response.json()

// }).then((responseData)=>{
// // console.log(responseData);
// responseData.forEach(user => {
//     userData(user)
// });
// })

// .catch(()=>{
// console.log("no users");

// })



async function getAllUsers(){
try {

// var data=await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')//promise
var data=await fetch('https://jsonplaceholder.typicode.com/users?_limit')//promise
// console.log(data.json());
// console.log(data);
var usersData=await data.json()
// console.log(usersData);
if(usersData && usersData.length>0)
{
    usersData.forEach(user => {
         userData(user)
    });
} 
} 
catch (error) {
    console.log(error);
    
}


}
getAllUsers()