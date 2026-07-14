function first(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("first");
        return originalMethod.apply(this, args);
    };
}

function second(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("second");
        return originalMethod.apply(this, args);
    };
}

class Dog {
    @first
    @second
    bark() {

        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);