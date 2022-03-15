const name = "cgm",
    age = 26,
    gender = "male";

const sayHi = (name,age,gender?) => {
    if(gender === undefined) {
        gender = "성별은 알려주고 싶지 않"
    }

    console.log(`안녕! ${name}, 너의 나이는 ${age}이고 ${gender}구나!`)
};

sayHi(name,age);

export{};