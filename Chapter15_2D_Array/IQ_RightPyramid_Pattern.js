// n= 3a
// *
// * *
// * * *

for(let i=0; i<3;i++)
{
    let row= " ";
    for(let j=0; j<=i; j++)
    {
       row += " * ";
    }
    console.log(row);
}

// Reverse of Right Pyramid

for(let i=5; i>0;i--)
{
    let row= " ";
    for(let j=0; j<i; j++)
    {
       row += " * ";
    }
    console.log(row);
}


