function openBrowser(){
    return new Promise(function(resolve){
        // Code to open the browser
        resolve("Open the Browser");
    })
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login Page loaded");
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered");
    })
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("Logged in successfully");
    })
}

//Nested Promise

openBrowser().then(function(msg){
    console.log("Step 1- Open Browser");
    return goToLogin();
}).then (function(msg){
    console.log("Step 2:", msg);
    return enterCredentials();
}).then (function(msg){
    console.log("Step 3",msg);
    return clickLogin();
}).then (function(msg){
    console.log("Step 4",msg);
}).catch(function(error){
    console.log("Error:", error);
}).finally(function(){
    console.log("Done execution !");
});
