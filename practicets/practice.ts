//print
console.log("welcome");
console.log(`ts is a superset of javascript`);

//addition
let a = 10;
let b = 20;
const add = (a, b) => {
    return a + b;
}
let result = add(a, b);
console.log(result);

//string concordination
let c: string = "hari";
let d: string = "20";
console.log(`${c + d}`);



//inteface

interface person {
    id: number,
    name: string,
    roll: number,
    easysubject: string,
}

const getperson = (id, name) => {
    return {
        Id: id,
        Name: `my name is ${name}`,
    }
}

let person3 = getperson(1, "hari");
console.log(`my id ${person3.Id} and ${person3.Name}`);


const putperson = (id, roll) => {
    return {
        Id: id,
        Roll: `my roll no is ${roll}`,
    }
}

let person4 = putperson(2, 123);
console.log(`my roll ${person4.Id} and ${person4.Roll}`);
let team =[{
    p1: "hari",
    id: 3232,
    h: {
        p2: "meha",
        id2: 343,
    }
}]
const se = (p1: string) => {
    for (let data of team) {
        if (data.p1 === p1) {
            return data;
        }
    }
}

const y: string = "hari";
console.log(se(y));
