let str1= "listen";
let str2= "silent";


function checkanagram(s1, s2)
{
    if(s1.length !== s2.length)  return false;

        let sort1= s1.toLowerCase().split("").sort().join("");
        let sort2= s2.toLowerCase().split("").sort().join("");
        
        return sort1 === sort2;
}

console.log(str1 + "  &  " + str2 + ":", checkanagram(str1,str2));
console.log("hello & world :" , checkanagram("hello","world"));