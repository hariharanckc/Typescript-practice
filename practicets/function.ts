
//with function name

const hai = (Id) => {
    return {
        id: Id,
        name: `hai ${Id} `,
    }
}
let details = hai(1)
console.log(`$${details.name}`)
const deta=(name)=>{
    return{
        id:8,
        name:`name is ${name}`,
    }
}
let detail1=deta("hariharan")
console.log(`${detail1.id}`);


//without function name



// const showdetails=(id,name) => {
//     console.log(`id ${id} name ${name}`);

// }


// let a={value:5};
// let b={value:6};

// let result:number=add(a.value,b.value);

// console.log(result);

// function add(a:number,b:number):number{
//     return a+b;
// }




// let Avalue={value:5};
// let Bvalue={value:9};

// let results:number=add1(Avalue.value,Bvalue.value);
// console.log("result"+results);
// function add1(Avalue:number,Bvalue:number){
//     return Avalue+Bvalue;
// }


// let username={value:"hari"};
// let password={value:"xxxx",
// name:"ck",

// mydetails:{
// standard:"hari",
// }

// };
// const login:any=check(username.value,password.name);
// console.log(login);

// function check(username:string,password:string){
//     return username+password
// }

// console.log(password.mydetails.standard);




let person1 = {
    name: "hari",
    roll: 123,
    subject: {
        tamil: {
            mark: 42,
            english: {
                mark: 45,
                maths: {
                    mark: 67,
                }
            }
        }
    }
}


let person = [
    {
        name: "mohan", roll: 23, nickname: "meha",
        mark: {
            tamil: 34,
            english: 89,
        }
    }
];
console.log(person);

const se1=(tamil:number)=>{
for (let da of person){
    if(da.mark.tamil==tamil){
return da;
    }
}
}

const v=se1(34);
console.log(`the value of tamil:${v}`);



// console.log(person2.subject.tamil.english.mark1)
let check: any = clas(person1.subject.tamil.english.mark)


console.log(check);


function clas(person1) {
    return person1;
}


const search = (roll: number) => {
    for (let data of person) {
        if (data.roll === roll) {
            return data;
        }
    }
}
const q: number = 23;
console.log(search(q));


const search1 = (english: number) => {
    for (let data of person) {
        if (data.mark.english= english) {
            return data;
        }
    }
    return "pls enter crt data"
}

const s:number=89;
console.log(search1(s));


