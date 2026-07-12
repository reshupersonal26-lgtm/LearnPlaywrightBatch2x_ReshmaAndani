interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number
}

//readOnly
//ReadOnly=can't modify the readOnly

// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',
};


console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);


