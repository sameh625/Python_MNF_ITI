/**
 * local storage  ==> string
 *  data ==> [[]]
 * localStorage.setItem('key','value')===>json.stringfy  ==> 
 * localStorage.getItem('key') ===> json.parse
 * carts , login ,register , theme , language 
 * 
 * ======>
 * console.log()
 */

/**
 * dynamic data ===> data that taken from user ===> api 
 * AJAX ===> 
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
userAddress.innerText="city: "+data.address.city +" street: "+data.address.street
var userCompany=document.createElement("td")
userCompany.innerText=data.company.name

tableRow.append(userId,userName,userAddress,userCompany)
tableBody.append(tableRow)





}

var xhr=new XMLHttpRequest()
console.log(xhr);
// console.log(xhr.open("get","https://jsonplaceholder.typicode.com/users")
// );
xhr.open("get","https://jsonplaceholder.typicode.com/users")
// session 
xhr.send()
xhr.onreadystatechange=()=> {
    if(xhr.readyState==4)
    {
        if(xhr.status==200)
        {
            // console.log(xhr.response);
            // console.log(typeof(xhr.response));

            var users=JSON.parse(xhr.response)  //string  ==> object 
            // console.log(typeof(users));
            // console.log(users);
            // var data =JSON.stringify(users)
            //    console.log(data);
                            // console.log(typeof(data));

           if(users && users.length>0) 
            {
            // console.log(users);
            users.forEach(user => {
                // console.log(user);
                userData(user)
                
            });

            }                
            
        }
    }
    
}






