let raj_age = 18;
let raj_will_goa = raj_age >= 18 ? "Raj will go Goa" : "No Goa";
console.log(raj_will_goa);


let env = "staging";
let baseUrl = env == "prod" ? "https://api.example.com" :
    "https://staging-api.example.com";
console.log(baseUrl);

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(slaStatus);



// Nested Terneray

let age = 26;
let goa_going = age > 26 ? "Yes, he will go" : "He will not go";
console.log(goa_going);

let age = 45;
let goa_going = age > 18 ? (age > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(goa_going);


///--------------- Interview Question

let statusCode = 404;
let category = statusCode < 300 ? "Success" : statusCode < 400 ? "Redirect" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);