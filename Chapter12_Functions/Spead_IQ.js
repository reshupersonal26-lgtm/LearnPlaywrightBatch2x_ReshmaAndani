function add (a,b,c)
{
    return a+b+c;
}

let num=[1,2,3];

const sum= add(...num);
console.log(sum);


let responseCodes = [200, 201, 404];

function hardError(...codes){
    return codes.some(c=> c >= 400);
}


const respcode= hardError(...responseCodes);
console.log(respcode);     // true