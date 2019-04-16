"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const gildong = new Human("gildong", 25, "women");
const person = {
    name: "yuuthod",
    age: 15,
    gender: "women"
};
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};
console.log(sayHi(gildong));
//# sourceMappingURL=index.js.map