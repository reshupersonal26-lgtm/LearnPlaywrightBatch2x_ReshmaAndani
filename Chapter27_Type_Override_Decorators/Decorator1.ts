function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("Called");
        return originalMethod.apply(this, args);
    };
}

class Greater {
    @logged
    hello() {
        return "Hi";
    }
}

let r = new Greater().hello();
console.log(r);