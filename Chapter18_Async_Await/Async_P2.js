function getToken() {
    return Promise.resolve("abcd123");
}

//Playwright
//page.goto() - Promise()
//await page.goto();

async function run() {
    let token= await getToken();
    console.log(token);
}

run();
