let str = prompt("Enter your string:");

var checker=(s)=>{
    let ask = confirm("Do you care about case sensitivity?");
    if(!ask){
        s = s.toLowerCase();
    }
    revStr= s.trim().split("").reverse().join("");
    // console.log(revStr);
    // console.log(s);

    if(revStr === s){
        alert("Palindrome")
    }else{
        alert("NOT Palindrome")
    }
}

checker(str);