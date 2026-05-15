var a=10;   //Global scope

console.log(a);    

function printHello()
{
    console.log("Hello The Testing Academy");
    var a=20;       //Local scope
    console.log(a);  
    if (true)
    {
        var a=30;       //Local scope
        console.log(a);

    }
}

printHello();