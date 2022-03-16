"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "cgm",
    age: 26,
    gender: "male"
};
const sayHi = (person) => {
    if (person.gender === undefined) {
        person.gender = "성별은 알려주고 싶지 않";
    }
    return `안녕! ${person.name}, 너의 나이는 ${person.age}이고 ${person.gender}구나!!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map