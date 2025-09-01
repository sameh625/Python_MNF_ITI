/**
 * functions ==> block of code that u can resue it 
 * 
 * function fun_name(parameters) {}    ==========> call function ==> fun_name()  
 * 
 * function ==> return 
 * if therir no return ===========> undefined
 * sum()  // call method ===> out put ==> {block}
 * console.log(sum());  // call + print (return)
 * 
 * if their is return ============> output===> return
 * 
 * 
 * ============================> Types of function 
 * 1- decleration function   ==> accept hoisting ==> function fun_name() {}
 * 2- function expression   ==> not  accept hoisting => var var_name=function fun_name() {}
 *  ===============>   function expression ===> you deal through var_name
 * 
 *  * 3- arrow function ==> var(let) var_name =()=>{}
 *    ===============>   arrow function ===> you deal through var_name
 * 
 *  * 4- self invoked function  || immediatly invoked function ==> function call it self
 * (function (){})();
 * 
 * 5- callback function -===> function called by another functio
 */

// n1=undefined       || n2=undefined
// let  x=5;
// let y=10;
// function sum()  // not prametarized 
// {
    
//     console.log("hello");
    
//     return(n1+n2);
//     // return ======> undefined
// }

// let  x=5;
// let y=10;
//  n1=undefined       || n2=undefined
// undefined + * ==========================> NAN ==> Not A Number

// console.log(sum(12,13));// hoisting ===> u can use variable || function befire decleration

// function sum(n1=0,n2=0)  //  prametarized 
// {
        
//     console.log("hello");
    
//     return(n1+n2);
//     // return ======> undefined
// }
//  let result=sum()  //====> print that will be in block  
//  console.log("*******************************");
 
// console.log(result);   //  print that will be in block+ reyurn 


// ==========================
// console.log(sum);          /// sum ==> structure of function
// console.log(sum());      // call function ===> {block}+ return


// var x=22;
// function sum(n1=0,n2=0) 
// {    
//     x=15;   // decleration var var_name=value  || var_name=value ==> assignmed
//             //var_name=value ==> assignmed || var_name=value ==> reassignmed  
//     console.log("hello");
//     console.log(x); 
       
//     return(n1+n2);

// } 
/**
 * x=undefined -----> 22  ----> 15  (shadwing)
 * result=undefined ---> sum() ------> 0
 * sum
 * 
 * ===============>  hello  15  15  *********  0
 */
//  var result=sum ()
//  console.log(x);   
//  console.log("*******************************");
 
// console.log(result); 

// ========================================
// var result=function sum(n1=0,n2=0) 
// {    

//     console.log("hello");
//     console.log(x); 
       
//     return(n1+n2);

// } 

// console.log(result);  // structure of function
// console.log(result(12,13));  //  return + execute fun(run code in block{})

// var result=function sum(n1=0,n2=0) 
// {    

//     console.log("hello");
       
//     return(n1+n2);

// } 

// console.log(result);  // structure of function  
// console.log("*******************");

// result(12,14) // call ==>execute fun(run code in block{})
// console.log("*******************");

// console.log(result(12,13));  //  return + execute fun(run code in block{})

// ===================================
// var result=function sum(n1=0,n2=0){    

//     console.log("hello");
       
//     return(n1+n2);

// } 

// var result=(n1=0,n2=0)=>{    

//     console.log("hello");
       
//     return(n1+n2);

// } 


// console.log(result);   // == struc{}
// console.log("*******************");

// result(1,2) // call ==> hello 
// console.log("*******************");

// console.log(result(12,15));  // call + return ==>  hello 27


// var print =()=>{
//     return("hello");
    
// }

// var print =_=>{
//     return("hello");
    
// }

// var print =_=>console.log("hello");  // one line
// var print =_=>"hello";   // return "hello"
    


// console.log(print);
// console.log(print());

/**
 *  return ==> print return
 *   log ===> execute {} + undefined 
 */

// var print =(x)=>{
//     console.log(x);
    
//     return("hello");
    
// }

// console.log(print(12)
// );


// var print =(x)=>{
//     console.log(x);
    
// }
var print=(x)=>console.log(x); // print x + undefined(return)


var print =(x)=>{
    return(x); 
}
var print=(x)=>x;

print(5)  // 5
console.log("*******************");

console.log(print(5));  // print return


// ========================
// (
// function ()
// {
//     console.log("hello"); 
    
// })();


(
function (x)
{
    console.log(x);
    
    console.log("hello"); 
    
})(5);


///////================================== callback function
/**
 * callback function
 * 
 * 
 */


// function x(y,z)
// {
//     console.log(y);  // struct  
//     console.log("***********************");
    
//     console.log(y());   // call function + return
//     console.log("***********************");

//     console.log(z);   
// }
// // x(1,2)
// // x([1,2],"djhs")
// // x({name:"iti"},[25,30])
// x( 
//     // w{}        *********  print     undefined   ****** hello
// function w() 
// {
//     //  y = w{}   z="hello"
//     console.log(" print test function");
    
// },"hello")



// console.log(x); // structure
// console.log(x()); // call + return
// var test=x ///  // structure
// var test=x() // call + return


var result=function w() 
{
    console.log(" summer training");
}
function test()
{
    console.log("python");
    
}
function x(fun1,fun2)   
{
//     console.log(test);
    
//     test()
//    console.log(test());
//    console.log("**********");
//    console.log(w);
//    w()
//    console.log(w());
   
    // test()
    
    console.log(fun1);     
    console.log(fun1());    //  summer training undefined
    console.log(fun2);     
    // console.log(fun2());      // python  undefined
}
x(result,test)  
// fun1 ==> str{w}
// fun ==> str{test}


// x(()=>{
//     console.log("hello");
    
// },5)

