/*var number1 = 34;
var number2 =589;
1.  Java/Script console API
console.log(number1 + number2);
console.warn("This is an warning");
console.error("This is a error");
console.clear("Thisd is a clear");*/


/*  2.  Ways to print in javascript
console.log("Hello World" , 5+64,"another log");
alert("This is a alert");
document.write("this is document write");*/


/*  3. JAVASCRIPT VARIABLES
what are variables-?  containers to store data values
var number1=244;
var number2=256;
console.log(number1+number2); */

//DATATYPES IN JAVASCRIPT
// 1. NUMBER
// var num1 =90;
//var num2 = 40.46;
// console.log(num1+num2);
// 2. STRING 
// var str1= "this is a string ";
// var str2= 'this is also a string';
// console.log(str1+str2 );


// 3. OBJECT
// var marks = {
//     ravi:98,
//     Bharti:68,
//     Mahendra:89.99,
//     Rahul:56
// }
// console.log(marks);

// 4. BOOLEAN 
// var a = true;
// var b = false;
// console.log(a, b);

// 5. UNDEFINE
// var und;//= undefined;
// // console.log(undefined);
// console.log(und);
// var n = null;
// console.log(n);


/*At a very high level, there are two types of data type in javascript
1.primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Array, Objects;*/

// var arr = [1,2,3,"string",4,5]
// console.log(arr);

// OPERATORS IN JAVASCRIPT
// Arithmetic Operators
// var  a = 10;
// var b = 5;
// console.log("the value of a+b is ", a+b);
// console.log("the value of a-b is ", a-b);
// console.log("the value of a*b is ", a*b);
// console.log("the value of a/b is ", a/b);

//Arithmetic Operators
// var c=b;
// c +=5;
// c -=5;
// c=100;
// c *=2;
// c /=6;
// console.log(c);

// Comparison operators
// var bharti=6;
// var Mahendra=8;

// console.log(bharti==Mahendra);
// console.log(bharti>=Mahendra);
// console.log(bharti<=Mahendra);
// console.log(bharti<Mahendra);
// console.log(bharti>Mahendra);

// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


// Logical not
// console.log(!true);
// console.log(!false);

// FUNCTION IN JAVASCRIPT
// DRY  = do not repeat yourself   THIS IS A DRY PRINCIPLES
// function avg(a,b){
//     return (a+b)/2;
// }
// c1=avg(23,123);
// c2=avg(797,45775);
// console.log(c1,c2);


//Conditionals in JAvascript 
// var age =39;
// if(age>14){
//     console.log("You are not a kid", "Your Age is Just: ",age);
// }
// else{
//     console.log('You Are a Kid')
// }

// if-else Ladder
// var age =24;
// var age = 50;
// if(age>32){
//     console.log("you are not a kid");
// }
// else if(age > 26){
//     console.log("Bachhe nahi rahe");
// }
// else if(age>22) {
//     console.log("Yes Bachhe nahi rahe  ");
// }
// else{
//     console.log("Bachhe rahe");
// }
// console.log("End Of The Ladder");


//var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// console.log("End Of The Loop");
// arr.forEach(function(element){
//     console.log(element);
// })


/// While loop
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// DO WHILE LOOP
// let j=0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);
    

// BREAK STATEMENT JAVASCRIPT
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     if(i==3){
//        // break;
//        continue;
//     }
//      console.log(arr[i]);
// }

// Array Mathods
//let myArr = ["Fan","Camera",2233,null,239.98,true];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr.length);
// myArr.push("Mahendra");
// console.log(myArr);
// //myArr.shift();
// myArr.unshift("Harry");
// console.log(myArr.unshift("yahoo"));
// console.log(myArr);

//const newLen = myArr.unshift("Harry");
// console.log(newLen);
// console.log(myArr);
// myArr.toString();


// String METHODS IN JAVASCRIPT
//let myLovelyString = "Mahendra is a good boy ";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf(" a "));
// console.log(myLovelyString.lastIndexOf("y"));

//.console.log(myLovelyString.slice(3,19));
//console.log(myLovelyString.replace("Mahendra","Harry"));
//console.log(myLovelyString);

//let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
// console.log(myDate.getUTCDate());


// DOM manipulation 
// let elem = document.getElementById('click');
// console.log(elem);

// tn = document.getElementsByTagName('botton');
// console.log(tn);


//Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log('the button was clicked');
// }
// window.onload = function(){
//     console.log('the document was loaded');
// }
// Event in JAVASCRIPT
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b> "
//  console.log("clicked on container");
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on container");
//    })
// // firstContainer.addEventListener('mouseout',function(){
// //     console.log("mouse out of  container");
// // });
// let preHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('container')[1].innerHTML = preHTML
//     console.log("mouse up when clicked on  container");
//    });
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b> "
//     console.log("mouse down of  container");
//    });


// Arrow Functions
// function summ(a,b){
//     return a+b;

// }
summ = (a,b)=>{
    return a+b;
}
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b> "
    console.log("I Am Your Log");
}
// SetTimeout and setinterval
// setTimeout(logKaro,5000);
// setInterval(logKaro,5000);
 
// //use clearInterval/clearTimeout to cencel setInterval/setTimeout
// clr = setTimeout(logKaro,5000);
// setInterval(logKaro,5000);
// clr = setInterval(logKaro,5000);

// javascript localStorage
// localStorage.setItem('name','Mahendra');
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();


// Json 
// obj = {name: "Mahendra",length:1, a : {this: 'that'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse('{"name":"Mahendra","length":1,"a":{"this":"that"}}')
// console.log(parsed);


// Template literals Backticks
a = 79;
console.log('this is my ${a}',a);