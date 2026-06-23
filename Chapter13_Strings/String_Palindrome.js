let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}

// With function
function isPalindrome(s) {
    return s === s.split("").reverse().join("");
}

console.log("racecar:", isPalindrome("racecar"));
console.log("hello:", isPalindrome("hello"));
