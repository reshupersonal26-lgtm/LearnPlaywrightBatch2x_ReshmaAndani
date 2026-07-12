interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrialPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: "/login",
    title: "Login page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login-btn"

}

let freetrialPage: FreeTrialPage = {
    url: "/free-trial",
    title: "Free page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
}


console.log("URL: ", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username:", loginPage.usernameSelector);

console.log("------------")

console.log("URL: ", freetrialPage.url);
console.log("Title:", freetrialPage.title);
console.log("Username:", freetrialPage.usernameSelector);