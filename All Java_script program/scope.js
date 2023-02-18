// let g=0; // global variable
// function increment()
// {
//     g+=2;
//     console.log("g is : "+ g);
//     let f=1; // this is local variable
//     f++;
//     console.log("value of f: "+f);

// }
// increment();
// increment();
// // g++; f++;

// console.log("updated value: "+g);
// // console.log("updated value is : "+f);


// // hoisting 
// sum= a+b;
// console.log(sum);
// var a=9, b=10, sum; // NaN , undefine , infinity

// var c,d, sub; // declearation
// c=10,d=23;   // initialization
// sub=c+d;

// c=90,d=9;
// console.log(sub);

// self invoking function recursion

// function multiply()
// {
//     let b=1, i=1;
//     b*=5;
//     console.log(b);
//     while(i<=3){
//         return multiply();
//         i++;
//     }
// }

// multiply();

// factorial of number 5! = 5*4*3*2*!
// function factorial(num);
// {
// for ( let i=num; i>0; i--)
// {
//     if(i==1)
//     return fact;
//     else
//     {
//     fact = i*factorial(i-1);
//     return fact;
//     }

//     }
// }
// console.log(" Factorial is : "+ fact(3));

// Assignment 
// input number : n, first n numbers in fibbonacci series 
// 0 1 1 2  3 5 8 13 21 


// fibbonacci series
// var a=0, b=1;
// console.log(a);
// console.log(b);
// var num= prompt("enter eny number:");
// for(var i=0; i<num;i++){
//     var t= a+b;
//     console.log(t);
//     a=b; // 0= 1
//     b=t;// 1=1

// }
