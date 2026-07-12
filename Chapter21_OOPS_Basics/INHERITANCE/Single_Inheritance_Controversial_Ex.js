class BaseTest{
    setup(){
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("APiTest: open browser");
    }
}


let test=new APITest();  //whichever object is created, will call that method
test.setup();