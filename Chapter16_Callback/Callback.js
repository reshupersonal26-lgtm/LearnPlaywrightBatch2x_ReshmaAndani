

function print()
{
    console.log("Normal Function");

}

function placeOrder(ClipboardItem, callback)
{
    console.log("Hi, your order is placed");
    callback();
}

//First Way
placeOrder("Burger", function(){
    console.log("Hi, How are you?");
});

//Second Way
placeOrder("Pizza", print);


//Third Way - Arrow function
placeOrder("Momos", ()=>{
    console.log("Arrow fn, I am also a function without name!");
});