let order= new Promise(function(resolve, reject){
    let foodready= true;
    if(foodready){
        resolve("Pizza is delivered. Food is ready.");
    }
    else{
        reject("Order cancelled because of rains.");
    }
})

console.log(order);
