class APiClient {
    public baseURl: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURl = baseURL;
        this.apiKey = baseURL;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer" + this.apiKey;
    }
    public sendRequest(path: string): void {
        console.log("GET" + this.baseURl + path);
        console.log("Auth:" + this.getAuthHeader());
        console.log("Timeout:" + this.timeout + "ms");
    }
}

class UserAPiClient extends APiClient {

    getUsers(): void {
        console.log("Fetching users(timeout:" + this.timeout + "ms");
        console.log("URL:" + this.baseURl + "/users");
    }

}

let client = new APiClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURl);
client.sendRequest("/health");