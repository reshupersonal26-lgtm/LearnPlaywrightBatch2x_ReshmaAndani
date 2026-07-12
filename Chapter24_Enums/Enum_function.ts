enum Severity {
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL,
    BLOCKING
}

console.log(Severity.BLOCKING);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://prod.api.com"
}

console.log(Environment.Dev);