let str= "Madam";

let reverse= "";
for(let i=str.length-1 ; i>=0; i--)
{
     reverse= reverse + str[i];
   
}

 console.log(reverse);

 if(reverse.toLowerCase() === str.toLowerCase())
 {
     console.log("Given string " + reverse + " is Palindrome");
 }
 else
 {
     console.log("Given string " + reverse + " is not a Palindrome");
 }
     





