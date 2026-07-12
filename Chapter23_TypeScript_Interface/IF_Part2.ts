interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;   // add ? to make parameter optional
}

let response1: APIResponse = {
    body: "Hi",
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};

