class desktop {
    constructor(){
        this.brand = "Lenovo";

    }
    display(){
        document.write("Brand is :"+this.brand+"<br>");

    }
}
class laptop extends desktop{
    constructor(){
        super();
        this.configuration="32 GB Ram";
    }
    display()
    {
        document.write("Brand is :"+this.brand+"<br>");
        document.write("Configuration is :"+this.configuration+"<br>");

    }
}
class mobile extends desktop{
    constructor(){
        super();
        this.camera="50 mp";
    }
    display()
    {
        document.write("Brand is :"+this.brand+"<br>");
        document.write("Configuration is :"+this.configuration+"<br>");
        document.write("Camera Quality :"+this.camera+"<br>");
    }
}
let value = new mobile();
value.display();