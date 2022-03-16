interface human {
    name:string,
    age:number,
    gender?:string  // ?를 넣어 줌으로 선택적인자가 되어 없더라도 출력이 됨
}

const person = {
    name:"cgm",
    age:26,
    gender:"male"
}

const sayHi = (person:human):string  => {
    if(person.gender === undefined) {
        person.gender = "성별은 알려주고 싶지 않"
    }

    return `안녕! ${person.name}, 너의 나이는 ${person.age}이고 ${person.gender}구나!!`
};

console.log(sayHi(person));

export{};