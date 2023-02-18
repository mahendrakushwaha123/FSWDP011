class desktop{  // parent class 
    constructor(brand){
        //this.monitor=monitor; this.brand=brand; this.cpu=cpu;
        this.brand='Samsung';
    }
    display() {  // display brand  of the laptop
        console.log("the desktop brand is : "+ this.brand);
       
    }

}
class laptop extends desktop{
    constructor(color){
        super();
        this.color="Black";
    }
    display(){   // display brand & configuration
        super.display();
        console.log("Laptop color is "+ this.color);
    }
}
class mobile extends laptop{
    constructor(camera){
        super();
        this.camera="50px";
    }
    display(){  // brand confiuration camera clarity
        super.display();
        console.log("camera quality is "+this.camera);

    }
}
let value=new mobile();
value.display();


let two_arr=
[[0,0,0],
[0,0,0],
[0,0,0]];
for(let i=0;i<3;i++){ // row
    for(let j=0;j<3;j++){  // column
        // document.write(two_arr[i][j]+" ");
        if(i<=j)
        document.write(1);
        else
        document.write(0);
        
    }
    document.write("<br>");
}
let ttwo_arr=
[[0,0,0],
[0,0,0],
[0,0,0]];
for(let i=0;i<=3;i++){ // row
    for(let j=0;j<=3;j++){  // column
        // document.write(two_arr[i][j]+" ");
        // if(i<=j)
        // document.write(0);
        // else
        // document.write(1);
        if(i+j<=3)
        document.write(1+"  ");
        else
        document.write(0+"  ");
    }
    document.write("<br>");
}

// 1 1 1  0,0  0,1  0,2
// 1 1 0  1,0  1,1  1,2
// 1 0 0  2,0  2,1  2,2

// 0  1  3
// 0  3  9
// 8  6  5


// if(i==j)
// sum+= arr[i][j]
// sum+= arr[0][arr.length-1]+arr[arr.legth-1][0];
// // document.write(sum);
// console.log(sum);
// 0 +3  +5+3+8

// 0  *  0           0,1      i=0 j=1  i+j<2
// *  *  *    1,0    1,1    1,2
// 0  *  0           2,1

