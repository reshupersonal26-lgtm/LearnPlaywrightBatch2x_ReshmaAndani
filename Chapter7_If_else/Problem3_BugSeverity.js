// Problem: Given a bug's impact score (1–10), classify the severity.

let severity = 1;

switch (severity) {
    case 1:
    case 2:
    case 3:
        console.log("Severity:" + "Low");
        break;

    case 4:
    case 5:
    case 6:
        console.log("Severity:" + "Medium");
        break;

    case 7:
    case 8:
        console.log("Severity:" + "High");
        break;
    case 9:
    case 10:
        console.log("Severity:" + "Critical (block release)");
        break;
    default:
        console.log("Invalid score");
        break;


}