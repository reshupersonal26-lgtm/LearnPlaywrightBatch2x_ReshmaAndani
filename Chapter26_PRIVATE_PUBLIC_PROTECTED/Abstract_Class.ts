abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    Loan1(): void {

    }

}

class UITest extends BaseTest {
    setup(): void {
        console.log("Setup:launch browser");
    }
    execute(): void {
        console.log("Execute: click button, fill forms");
    }
    teardown(): void {
        console.log("Teardown: clse browser");
    }

    loan(): void {
        console.log(" GIVE LOAN");
    }

}