"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHi = (name, age, gender) => {
    if (gender === undefined) {
        gender = "성별은 알려주고 싶지 않";
    }
    return `안녕! ${name}, 너의 나이는 ${age}이고 ${gender}구나!!`;
};
console.log(sayHi("cgm", 26, "male"));
//# sourceMappingURL=index.js.map