function cafe(item, callWhenTableisReady){
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item);
    callWhenTableisReady();
}


function callWhenTableisReady()
{
    console.log("calling on 7709340449");
}

cafe("Burger", callWhenTableisReady);

cafe("Pizza", function(){
    console.log("calling 87878767676");
});

cafe("Momos", ()=>{

    console.log("calling 878787877676");
});