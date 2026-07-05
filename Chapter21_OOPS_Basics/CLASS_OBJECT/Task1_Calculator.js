class Calculator{
    n1;
    n2;

    constructor(n1,n2){
        this.n1= n1;
        this.n2= n2;
    }

    sub(n1,n2){
        return n1-n2;
    }

    mod(n1,n2){
        return n1%n2;
    }
    mul(n1,n2){
        return n1*n2;
    }
    div(n1,n2){
        return n1/n2;
    }

}

let s=new Calculator(8,12);
console.log("Subtraction:"+ s.sub(8,12));

let mo=new Calculator(8,12);
console.log("Modulus:"+ mo.mod(8,12));

let mu=new Calculator(8,12);
console.log("Multiplication:"+ mu.mul(8,12));

let d=new Calculator(8,12);
console.log("Division:"+ s.div(8,12));
