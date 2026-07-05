let apiCall= new Promise(function(resolve, reject){

    resolve({
        status:200, body:"User data"
    })
});

// .then() runs only when the promise resolves successfully.

apiCall.then(function(response){    
    console.log(response);
    console.log(response.status);
})