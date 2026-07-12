class ICICI{
    #balance;

    constructor(name, balance){
        this.name=name;
        this.#balance=balance;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(balance,isCashier){
        if(isCashier){
            this.#balance=balance;
        }
        else{
            console.log("Not allowed");
        }
    }
}

let pramod=new ICICI("Pramod",1000)

console.log(pramod.getBalance());
pramod.setBalance(1000000,false);