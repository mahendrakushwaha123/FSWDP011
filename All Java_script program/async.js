function count(){
   // let count = 0;
    document.write("page not found");
}
setTimeout(count,5000); // Callback


setInterval(count,5000);

let new_promise= new Promise(function(resolve,reject){
    // code that takes time to produce the result
    for(let i=0; i<5; i++)
    console.log(i);
    if(i==5)
    resolve(document.write("Success"));
    else
    reject(document.write("Rejected"));
}); // promise defined
new_promise.time(() =>{ console.log("Success")
})
// .catch(() => { console.log("Error")})
// .finally(() => {console.log("Inside finally block")})


let api_key='641d8a6132c2f05d70e36e04bdf9f063';
fetch('https://api.openweathermap.org/data/2.5/weather?q=Bhopal'+api_key)
.then(res => res.json())

