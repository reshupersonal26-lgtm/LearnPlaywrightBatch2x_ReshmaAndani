let scores= [
    [85,90, 78],
    [60,45,70],
    [95,88,92]
];


let rowSums= scores.map(row=> row.reduce((a,b)=>  a + b , 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass","register-pass","logout-pass"],
    ["search-pass","filter-pass","sort-pass"],
    ["checkout-fail","payment-fail","confirm-pass"]
];



// I want all the failed test cases
for(let i=0; i < suiteResults.length; i++)
{
    for(let j=0; j< suiteResults[i].length; j++)
    {
        if(suiteResults[i][j].includes("fail"))
        {
            console.log(suiteResults[i][j]);
        }
    }
}