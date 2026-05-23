// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

/*let attempts = 1;

if (attempts === 0) {
    console.log("Output :" + "Login Successful");
}
else
    if (attempts === 1) {
        console.log("Output :" + "2 attempt left before lockout");
    }
    else
        if (attempts === 2) {
            console.log("Output :" + "1 attempt left before lockout");
        }
        else
            if (attempts === 3) {
                console.log("Output :" + "Account Locked- Contact Support");
            }  */






let login_attempt = 3;


switch (login_attempt) {
    case 0:

        console.log(`Input :  ${login_attempt}`);
        console.log("Output :" + "Login Successful");
        break;

    case 1:
        console.log(`Input :  ${login_attempt}`);
        console.log("Output :" + "2 attempt left before lockout");
        break;

    case 2:
        console.log(`Input :  ${login_attempt}`);
        console.log("Output :" + "1 attempt left before lockout");
        break;

    case 3:
        console.log(`Input :  ${login_attempt}`);
        console.log("Output :" + "Account Locked — Contact support");
        break;

}