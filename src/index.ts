class human { 
    public name:string; //public은 이 클래스 외에서도 가능하나 private는 외에서 불러오는게 불가능함
    public age:number;  
    public gender:string;
    constructor(name:string,age:number,gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

/*interface human {     // interface는 컴파일 되었을때 js에 생성이 되지 않지만 class는 생성이 됨
    name:string,
    age:number,
    gender?:string  // ?를 넣어 줌으로 선택적인자가 되어 없더라도 출력이 됨
}
const person = {
    name:"cgm",
    age:26,
    gender:"male"
}*/

const lynn = new human("lynn",22);

const sayHi = (person:human):string  => {
    if(person.gender === undefined) {
        person.gender = "성별은 알려주고 싶지 않"
    }

    return `안녕! ${person.name}, 너의 나이는 ${person.age}이고 ${person.gender}구나!!`
};

console.log(sayHi(lynn));

export{};