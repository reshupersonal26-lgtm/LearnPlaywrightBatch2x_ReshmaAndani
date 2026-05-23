// app.vwo.com --> viewer, editor or admin

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin has all the permissions");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor- Edit access granted");
    }
    else if (userRole === "viewer") {
        console.log("Welcome Viewer- Read-Only access granted");
    }
    else {
        console.log("No idea which role you are !");
    }
}