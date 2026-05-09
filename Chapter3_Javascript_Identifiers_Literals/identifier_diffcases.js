// ========================
// Valid JavaScript Identifier Cases
// ========================

// 1. camelCase (variables, functions)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
function getUserData() { return fullName; }

// 2. PascalCase (classes, constructors)
class UserProfile { constructor(name) { this.name = name; } }
function CarModel(brand) { this.brand = brand; }
const HttpRequest = { method: "GET" };

// 3. snake_case
let user_id = 101;
let account_balance = 2500.75;
function get_user_role() { return "admin"; }

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT_MS = 5000;

// 5. flatcase (all lowercase, no separators)
let username = "john_doe";
let dbconnection = "localhost:5432";
function getconfig() { return {}; }

// 6. UPPERFLATCASE (all uppercase, no separators)
const PORT = 8080;
const HOST = "localhost";

// 7. camel_Snake_Case (mixed convention)
let user_Name = "Alice";
let get_User_Email = function() { return "alice@example.com"; };

// 8. Hungarian Notation (type-prefixed)
let strMessage = "Hello";
let intCount = 42;
let boolIsActive = true;
let arrItems = [1, 2, 3];
let objConfig = {};
let fnCallback = () => {};

// Usage
console.log("camelCase:", firstName);
console.log("PascalCase:", new UserProfile("Alice").name);
console.log("snake_case:", user_id);
console.log("SCREAMING_SNAKE_CASE:", MAX_RETRY_COUNT);
console.log("Hungarian:", strMessage, intCount, boolIsActive);
