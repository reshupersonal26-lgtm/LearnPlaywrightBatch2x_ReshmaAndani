let a=10;   //Global scope

console.log(a);    

function printHello()
{
    console.log("Hello The Testing Academy");
    let a=20;       //Local scope
    console.log(a);  
    if (true)
    {
        let a=30;       //Local scope
        console.log(a);

    }
    console.log("F-->", a);
}

    console.log("G-->", a);


printHello();