console.log(score);                 //ReferenceError: Cannot access 'score' before initialization
let score=100;

{
    //---- TDZ for score starts here ---
    //console.log(score);    //Reference error
    //score=50;              //Reference error   
    //typeof score;         //Reference error
    //---- TDZ for score ends here ---
    let score=100;  //Declaration reached , TDZ ends
    console.log(score);    //100, safe to access now


}
