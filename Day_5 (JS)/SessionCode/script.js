
// string api ==> methods (function) we use with string
/**
 * string ==> length ==> count of characters
 * index ==> position of character
 */

// var str="Summer TraiNing pyThon"

// length
// console.log(str.length);

// get character in specific index
// console.log(str.charAt(4));

// // get index of character  (first char )
// console.log(str.indexOf("m"));
// // get index of character  (last char )
// console.log(str.lastIndexOf("n"));

// // lower case
// console.log(str.toLowerCase());
// // lower case
// console.log(str.toUpperCase());

//reverse string
// console.log((str.length)-1);
// var reverseed=""
// for (let i=(str.length)-1;i>=0;i--) {

//    reverseed+= str[i]
//   //  console.log(reverseed);
   
// }
// console.log(reverseed);




// let plain=prompt("enter string")
// let revPlain=""
// for (let i=(plain.length)-1;i>=0;i--) {

//    revPlain+= plain[i]
//   //  console.log(reverseed);
// }
// var cas=confirm("are you case sensitive ?")
// if(cas)
// {
//    if( revPlain===plain)
//    {
//     console.log("plaindron");
    
//    }else{
//        console.log(" not plaindron");
//    }
// }else{
//     if(revPlain.toLowerCase()===plain.toLowerCase())
//      {
//        console.log("plaindron");
//      }else{
//          console.log("not plaindron");
//      }
      

// }


// check on string
// console.log(str.includes("z"));


// check string start  with sepecific character
var str="            Summer TraiNing pyThon    "
// console.log(str.startsWith("sum"));
// // check string start  with sepecific character
// console.log(str.endsWith("n"));


// var str2="hello"

// // var str3=str2+ " "+str
// // concat
// // var str3 =str2.concat(" ",str)
// // repeat
// console.log(str.repeat(2));
// console.log(str.replace("n","*"));
// console.log(str.replaceAll("n","*"));

// // padstart 
// console.log(str.padStart(30,"*"));

// // padend
// console.log(str.padEnd(40,"*"));

// console.log(str.substring(3));// num==> end
// console.log(str.substring(3,10)); //num  ==>end
// console.log(str);

// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

// get slice from string
// console.log(str.trim().slice(1,15));

// console.log(str.trim().split(' '));  // conert string to array depend on " "



var str="Summer TraiNing pyThon"

var str2="Summer TraiNing pyThon"
// console.log(str.split(""));  // array depend on delimiter 
console.log((str.split("").reverse().join)===(str2.split("").reverse().join) );  // array 
















