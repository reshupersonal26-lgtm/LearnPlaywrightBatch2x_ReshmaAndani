// let is block-scope

let x="global";
if(true)
{
    // TDZ for block=scoped "x" starts here
    // console.log(x);   //Reference Error (NOT "global")
    let x="block";      //TDZ ends
    console.log(x);     // "block"

}

  console.log(x); 