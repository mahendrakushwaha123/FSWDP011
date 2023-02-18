function count(){
    let count=9;
  //  document.write(count+=2);
    document.write("page not found  <br> ");
}
count();

//setTimeout(count,3000);  // callback

//setInterval(count,5000);


let new_promise= new Promise(function(resolve,reject){
    // code that takes time to producce the result
    for(let i=0; i<5; i++)
    console.log(i);
   // if(result=='success')
   if(i==5)
    resolve(document.write("success"));
    else
    reject(document.write("rejected"))
});  // promise defined
new_promise.then(() => {console.log("success") })
.catch(() =>{ console.log("Error")})
.finally( () => {console.log("Inside finally block")})

function temp(){
let api_key='641d8a6132c2f05d70e36e04bdf9f063';
let city=document.getElementById('city').innerText;
fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+api_key)

.then(response => console.log(response) )  // promise
.then(q => console.log(q))
//.then(q => document.write("temprature of bhopal : "+q.main.tenp))
}

// axios
