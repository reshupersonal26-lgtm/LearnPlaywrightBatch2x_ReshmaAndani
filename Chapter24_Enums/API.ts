enum HTTPMethod {
    Get = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + "->200 OK");
}

sendRequest(HTTPMethod.Get, "/api/users");
sendRequest(HTTPMethod.POST, "/api/users");
sendRequest(HTTPMethod.DELETE, "/api/users");