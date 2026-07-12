interface TestConfig {
    browser: string;
    headless: boolean;
    baseURl: string;
    timeout?: number;
    retries?: number;
}

let ciConfig: TestConfig = {
    browser: "Chrome",
    headless: true,
    baseURl: "https://staging.app.com"
};

let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURl: "https://localhost:3000",
    timeout: 1000,
    retries: 3
};

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);