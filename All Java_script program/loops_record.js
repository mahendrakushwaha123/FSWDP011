//let i=0; globle variable, scope 
// for(i=0; i<12; i++){
//     document.write("<br>value of i : "+i);
//     if(i==10)
//   break;
   
// }

// let i=0;
// while(i<5)
// {
//     document.write("<br> <b> this is a while loop: "+i+"<b>");
//     i++;
// }

// //let i=0;
// do{
// document.write("<br>  inside do-while : "+i );
// i++;
// }
// while(i<12)

class vehicle{
    // constructor(){
    //     this.wheel=2;
    //     this.brand='bajaj';
    //     this.mileage='30kmpl';
    //     this.color='black';
    // }
    constructor(wheel,brand,mileage,color){
        this.wheel=2;
        this.brand='honda';
        this.mileage=40;
        this.color='blue';
    }
    display(){
        document.write("brand is : "+this.brand+" "+" color is : "+this.color+" "+"mileage is : "+this.mileage+" "+"wheels is : "+this.wheel+" "+"<br>");
        // this is a mamber fution
    }
}
let scooter= new vehicle(2,'bajaj','30km/l','black');
scooter.display();
let maruti= new vehicle(4,'maruti alto','40km/l','red');
maruti.display();
let bike= new vehicle();
bike.display();
console.log(bike.wheel);
console.log(bike.color);


let name = new String("Mahendra");
console.log(name);


class vehicles{
    constructor(wheel,brand,mileage,color){
        this.wheel=wheel;
        this.brand=brand;
        this.mileage=mileage;
        this.color=color;
    }
    display(){
        document.write("brand is : "+this.brand+" "+" color is : "+this.color+" "+"mileage is : "+this.mileage+" "+"wheels is : "+this.wheel+" "+"<br>");
        // this is a mamber fution
    }
}
let auto = new vehicles(3,'bajaj','30kmpl','black yellow');
auto.display();

class jeep extends vehicle {
    constructor(speed){
        super();  // this constructor of parent class constructor
        this.speed=speed;
    }
    display(){
        super.display(); // this function is a parent class funtion
        document.write('speed is : '+this.speed+" ");
    }
}
try{
    let bmw = new jeep('150kmph','red');
 bmw.disp();
}
catch(error)
{
    document.write(error);
}
let bmw = new jeep('150kmph','red');
bmw.display();
let thar = new jeep('120kmph');
thar.display();

var Person = {name: 'Mahendra', age:23, nation:' India'};// JSON -->java script of notation
console.log(Person.name);
console.log(Person);
document.write("<br>"+Person);
document.write("age is "+Person.age);
document.write(JSON.stringify(Person));