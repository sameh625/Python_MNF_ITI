    console.log("HTML"); 

    /**
     * comment ==> oneline  //  || multiline
     * 
     * documentation ==> 
     * code ==> not sure 
     */

    /**
     * variables ===> place we store data  in memory ===>
     * 
     * declare variable ===> var (doesn't use ) ||| let ||| const   
     * 
     * ====> naming
     * _ 
     * use name xxxxxxx
     * useName ==> user_name
     *  _userName 
     * *user ||#user
     * _userName
     * 
     *    
     * ================= var variable_Name  ==> decleration variable || variable_Name = value  ==> assignment
     *    
     * var x=5 ==> decleration & assignment 
     * x="test"  ==> reasignment
     * var x; ===> redecleration
     * var x=22 ==>  redecleration & reassignment 
     * 
     * ================= loosely typed laguage ==> know data type ==> value of variable
     * 
     * -=====> console.log(print ==> string , variable )
     * 
     * ============> datatypes
     * number 
     * string
     * boolean
     * object
     * undefined
     */


//     var x=5   // number
// console.log(  "data type of X :", typeof(x)  );
//     var y="python"  // string
//     console.log(  "data type of y :", typeof(y)  );
//     var z=true   // boolean
//         console.log(  "data type of z :", typeof(z)  );

//     var arr=[1,2,3] // array ===> object
//         console.log(  "data type of arr :", typeof(arr)  );

//     var obj={name:"iti"}   // object
//         console.log(  "data type of obj :", typeof(obj)  );

//     var x=NaN   // not a number ==> value
//         console.log(  "data type of x :", typeof(x)  );

//     var w=undefined   //   value   // function //hoisting
//         console.log(  "data type of w :", typeof(w)  );

//     var t=null    // value
//     console.log(  "data type of t :", typeof(t)  );



/**
 * =====================================     var =======================================> 
 * var ==> redecleration || reasignment
 * 
 * js engine ===> variable ==> var ==> undefined
 * 
 * 
 *   
 *1-
 *  decleration variable ==>  var x;
 * use x before  decleartion   ==> undefined
 * console.log(x);   // undefined   
 *  var x;
 * 2-
 * if variable not defined ===> error==> Uncaught ReferenceError: x is not defined
 *  console.log(x); 
 *============================================= >
 use variable that u make decleration before decleration ===> hoisting
 */

 //////////////////////// hoisting====> var accept hoisting
//  console.log(x); 

//     var x=5   // number   

// console.log(x);


// ==============================    Let  
/**
 * 1- Accept resasignment
 * let x=10;
console.log(x);
 x=15;
 * 2- doesn't Accept redecleration   ==> Identifier 'x' has already been declared
 let x=10
 let x=15;xxxxxxxxxxxxxxxxxxx error
 * 3- doesn't accept hoistong
 */
 

 //////////////////// const ==> constant variable 
 /**
  * doesn't Accept redecleration
  *  doesn't Accept resasignment
  * doesn't accept hoistion ==> error ==> Cannot access 'PI' before initialization
  */


//                              var             let              const

// redecleration             acceept           no                no
// reasignment              acceept           yes                no
// Hoistiong               acceept           no                  no



                // console.log(PI);

//  const PI=3.14

// console.log(  "data type of X :", typeof(x)  );
//     var x="tesst"  // not a number ==> value
//         console.log(  "data type of x :", typeof(x)  );


// ===========================================
/**
 * operators 
 * arethmatic operator (+,-,*,/,%)
 * conditional operator (> , < , >= , <= , != , == , ===, !==)
 * logical operator
 */

///////////////////// arethmatic operator (+,-,*,/,%)
// let x=11;
// let y=5;
// console.log(x+y); //  16
// console.log(x-y); // 6
// console.log(x*y); // 55
// console.log(x/y); //  2.2

// console.log(x%y); //  1   mod

// // 11 %5 ==> 11/5 =2  || 2*5=10 || 11-10=1
// // 10%4 => 10/4 = 2  || 2*4=8  || 10-8 =2
// // 15% 12 ==> 15 / 12 =1 || 1*12=12 || 15-12 =3


// conditional operator
// let x=11;
// let y=5;

/**
 *  == || value
 * ===  || value and data type
 *  */

// console.log(x>y); // t    (11>5) 
// console.log(x<y); // f     (11<5)
// console.log(x==y); // f    (11==5) 
// console.log(x===y);  // f 
//  ==> value and dt ==> ((11==5) && (dt(11)== dt(5)))
// ((11==5) && (typeof(11)== typeof(5)))  ==> (f && t )  = f

// console.log(5==="5");//f   ==> (5 , 5) ==> t  && (num - str) ==> f  === false
// console.log(5=="5");  // t ==> (5,5)  -==> true

// console.log(x>=y); // t   ==> (11> 5)  || (11==5)  ==> (t || f ) ==> t 
// console.log(x<=y); // f  ==> (11< 5)  || (11==5)  ==> (f || f ) ==> f 
// console.log(x!=y); // t   ==> !(11==5) ==>!(f) ==> t
// console.log(x!==y); // ..... t  ==> !((11==5) && (dt(11)==dt(5)))==> !(f && t)=>!(f)=>t

// =================== logical operator  ==>(cond1)  (cond2)
/**
 * && ==>  t && t ==> t  ==================> (5>2)&& (3>1) = t
 * && ==>  t && f ==> f
 * && ==>  f && f ==> f
 * && ==>  f && t ==> f
 * 
 * ||  ==>  t || t ==> t
 * ||  ==>  t || f ==> t
 * ||  ==>  f || f ==> f ==============> (5<2) || (3<1) = f
 * ||  ==>  f || t ==> t
 * 
 * !  ==> !t = f 
 * !  ==> !f = 
 */


// =============================
//================================> falsey values  && truthy values
// falsey values  ==> values as false
/**
 * 0
 * ""
 * false
 * null
 * undefined
 * nan
 */
// truthy values  ==> values as  true
/**
 * true
 * " "
 * []
 * {}
 * any number except ==> (nan , 0 , null)
 * function () ()
 */
//  vf && vt ==> vf
// console.log(0 && 5);   // t && f ==> f
// console.log(undefined && 20);
// //  vf || vt ==> vt
// console.log(0 || 5);   // t || f ==> t
// console.log(undefined || 20);

/////////////////// x=undefined------ 10 ------5 
// var x=10
// x=5;
// console.log(x); //5

// console.log(x=5); // 5   // reassignment 



//========================


/**
 * condition statements
 * if (condition) { true of condition} 
 * if(grade>50)
    {
        // condition  is true 
        console.log("success");
        
    }
***********************************************************

 * if (condition) { true of condition} else {false of condition } 
    // if(grade>50)
//     {
//         // true 
//         console.log("success");
        
//     }
// else{
//     // false
//          console.log("fail");
//     }

*********************************************************
 * if (condition) { true of condition} elseif(condition) { true of condition}  else{false of condition } 
 * 
 * let num=4

if(num>5)
{
    console.log("num more than 5");
    
}else if(num<5)
{
    console.log("num less than 5");
    
}else{
    console.log("num equal 5");
    
}
 */


// grade > 50 ====>t =======< success   ======> f =====< fail
var grade =40;
// if(grade>50)
//     {
//         // true 
//         console.log("success");
        
//     }
// else{
//     // false
//          console.log("fail");
//     }

////////////////  num > 5 => more 5  || num<5 => less 5  || num =5 || equal 5

// var num=4

// if(num>5)
// {
//     console.log("num more than 5");
    
// }else if(num<5)
// {
//     console.log("num less than 5");
    
// }else{
//     console.log("num equal 5");
    
// }

    // grade >=85 ==> a 
    // grade >=75 && <85 > b
    // grade >=65 >  && <75 c
    // grade >=50 >  && <65 d
    // == fail <50


// var grade =80;
//     if((grade>=85))
//     {
//         console.log("Grade A");
        
//     }else if ((grade>=75)&& (grade<85))
//     {
//         console.log("Grade B");
//     }
//     else if ((grade>=65)&& (grade<75))
//     {
//         console.log("Grade C");
//     }
//     else if ((grade>=50)&& (grade<65))
//     {
//         console.log("Grade D");
//     }
//     else{
//         console.log("sorrry you fail");
 
//     }

 


// var result="z"
// if(result=="A")
// {
//     console.log("A");
    
// }else if (result=="B")
// {
//     console.log("B");
    
// }
// else if (result=="C")
// {
//     console.log("C");
    
// }else{
//     console.log("D");
    
// }

// Switch

// switch ("key that you compare") {
//     case value:
//         // true 
//         break;

//     default:
//         break;
// }


// switch(result)
// {
//     case "A":  // if (result == "A")
//         console.log("A");
//         break;

//     case "B":
//         console.log("B");
//         break;

//     case "C":
//         console.log("C");
//         break;

//     default:
//         console.log("D");
//         break;
 

// }



// ternary operator   ==> condition on one line

// (condition)? true:false ===> if(){}else{}

// var num=5;

// // num>5 ==> num<5
// // condition         true                      false
// // (num>=5)?console.log("num more than 5"): console.log("num less than 5");

// // (condition)?true (comdition)?true:false
// (num>5)?console.log("num more than 5"):(num<5)?("num less than 5"):console.log("num = 5");


// ===========================
// /**
//  * control flow ==> loop
//  * for (initialvalue; condition ; incre|| decre)
//  * while (condition) {====}
//  * do-while
//  */

// // print 5 ==> hello python

// // i++ = i=i+1
// // for(var i=0;i<5;i++)
// //     {
// //        console.log("hello python");

// //     }



// /**
//  * increment   ++
//  * decrement  --
//  * 
//  * pre and post increment
//  */

// var x=1;
// console.log(x++);  //1    
// // console.log(x) && x=x+1;  // 1 || x=2


// console.log(++x);// 3  // x=x+1 && log(x) ==>  3 || 3


// // =========================== --x ||  x--
// console.log(x--);// 3  ==>  3  ==> x=x-1 ==> 2
// console.log(--x); //1  // x=x-1 ==> 1  || 1


// // print numbers from 5 to 1

// for (let i=5; i>=1;i--) {
 
//     console.log(i);
    
// }


// while(i>=10)
// {
//     console.log(i);
//     i--;
    
// }
// var i=5;
// do {
//     // 
//     console.log(i);// 5  4 3 2 1
//        i--;   //4   3   2   1  0
// } while (i>=1);




