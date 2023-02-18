// let g=0;  // global variable 
// function increment()
// {
//     g+=2;
//     console.log(" g is : "+g);
//     let f=1; // this is a local variable
//     f++;
//     console.log(" the value of f : "+f);
// }
// increment();
// increment();
// g++;
// // f++;
// console.log("updated value :"+g);
// //console.log("updated value :"+f);


// hoisting
// sum = a+b;
// console.log(sum);
// var a=9, b=10, sum;// NaN , undefined, Infinity


// var c,d, sub; // declearation
// c=79,d=45; // initialization
// sub = c+ d;
// console.log(sub);


// self invoking function- recursion
// function multiply()
// {
//     let b=1,i=1;
//     b*=5;
//     console.log(b);
//     while(i<=2){
//         return multiply();
//         i++;
//     }
    
// }
// multiply();

// // factorial of a number 5! = 5*4*3*2*1
// function factorial(){
// let fact=1;
// for(let i=num; i>0;i--)
// {
//     if(i==1)
//     return fact;
//     else{
//         fact = i*factorial(i-1)
//         return fact;

//     }
// }
// }
// console.log("factorial is : "+factorial(5));
//factorial of number 5! = 5*4*3*2*!
// function factorial(){
//     let num=5;
//     let fact =1;
//     for(num; num>=1;num--)
//     {
//         fact= fact*num;
//         return fact;
//         //console.log(fact);

//     }
// console.log(factorial);
// }

function factorial(n){
    var num=1;
    for(var i=n; i>0;i--){
   // num *=i;
    num= num*i;
    }
    return num;
}
console.log(factorial(5));

// space complexity
