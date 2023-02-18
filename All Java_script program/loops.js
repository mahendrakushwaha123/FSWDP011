// let i=0;

// for (i=0; i<5; i++)
// {
//     document.write("<br> value of i : "+i);
//     if(i==2)
//     break;
// }
// i=0;
// while(i<5)
// {
//     document.write("<br> <b> i is: "+i+"<b/>");
//     i++;
// }
// while(i<5)
// {
//     document.write("<br> <b> while Assign: i is:  "+i+ "</b>");
//     i++;
// }

// do{
//     document.write("inside do-while");
//     i++;
// }
// while(i>5)
// class vehicle{
//     vehicle(wheel, brand, mileage, color);
//     constructor(){
//         this.wheels=wheel;
//         this.brand=brand;
//         this.color=color;
//         this.mileage=mileage;
//     }
//     display(){
//         document.write("brand is : "+this.brand+"color is :"+this.color);
//     } // member function
// }
// let scooter= new vehicle(2, 'bajaj', '30kmpl', 'black');
// scooter.display();
// let maruti=new vehicle(4,'maruti alto', '40kmpl', 'red');
// maruti.display();
// let bike

// class vehicles{
//     vehicle(wheel, brand, mileage, color);
//     constructor(){
//         this.wheels=wheel;
//         this.brand=brand;
//         this.color=color;
//         this.mileage=mileage;
//     }
//     display(){
//         document.write("brand is : "+this.brand+"color is :"+this.color);
//     } // member function
// }
// let scooter= new vehicle(2, 'bajaj', '30kmpl', 'black');
// scooter.display();
// let maruti=new vehicle(4,'maruti alto', '40kmpl', 'red');
// maruti.display();

// class jeep extends vehicle{
//     constructor(speed)
//     {
//         super();
//         this.speed=speed;
//     }
//     display()
//     {
//         super.display();
//         document.write("Speed is : "+this.speed);
//     }
// }
// try{
//     let bmw = new jeep('150kmph', 'red');
//     bmw.display();
// }
// catch(error)
// {
//     document.write(error);
// }
// let thar = new jeep('120kmph');
// thar.display();



// let bmw = new jeep('150kmph');
// bmw.display();


// let num1 = prompt("enter a number");
// let num2 = prompt("enter a another number");
// document.write(num1/num2);
var person = { name: 'Mahendra', age:34, nation:"India"}; // JSON
console.log(person);
console.log(person.name);
document.write("<br>"+person);
document.write("age is :"+person.age);
document.write(JSON.stringify(person));
