class BasePage {
    protected baseURl: string;

    constructor(url: string) {
        this.baseURl = url;
    }

    protected navigate(path: string): void {
        console.log("Navigating to: " + this.baseURl + path);
    }
}

class LoginPage extends BasePage {
    constructor() {
        super("https://app.staging.com");
    }

    login(user: string): void {
        this.navigate("/login");
        console.log("Typing " + user + " into #username");
        console.log("Clicking #login-btn");
    }
}

let page = new LoginPage();
page.login("admin");
