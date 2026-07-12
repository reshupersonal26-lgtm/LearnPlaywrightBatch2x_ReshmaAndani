interface BugReport {
    id: number;
    title: string;
    severity: string
    stepstoreproduce: string[];
}

const bugReport: BugReport = {
    id: 1,
    title: "Login Failed",
    severity: "Critical",
    stepstoreproduce: ["step1", "step2"]
}