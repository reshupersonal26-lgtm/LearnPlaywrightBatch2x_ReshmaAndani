class Car{
    #engine;
    constructor(name, engineName){
        this.name=name;
        this.engineName=engineName;
    }

    getEngine(){
        return this.#engine;
    }

    setEngine(nameEngine){
        this.#engine=nameEngine;
    }
}


let tesla= new Car("Tesla", "VB");
console.log(tesla.getEngine());
//tesla.setEngine("V9");
//console.log(tesla.getEngine());