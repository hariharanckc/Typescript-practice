//with function name
var hai = function (Id) {
    return {
        id: Id,
        name: "hai ".concat(Id, " "),
    };
};
var details = hai(1);
console.log("$".concat(details.name));
var deta = function (name) {
    return {
        id: 8,
        name: "name is ".concat(name),
    };
};
var detail1 = deta("hariharan");
console.log("".concat(detail1.id));
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
var person1 = {
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
};
var person = [
    {
        name: "mohan", roll: 23, nickname: "meha",
        mark: {
            tamil: 34,
            english: 89,
        }
    }
];
console.log(person);
var se1 = function (tamil) {
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var da = person_1[_i];
        if (da.mark.tamil == tamil) {
            return da;
        }
    }
};
var v = se1(34);
console.log("the value of tamil:".concat(v));
// console.log(person2.subject.tamil.english.mark1)
var check = clas(person1.subject.tamil.english.mark);
console.log(check);
function clas(person1) {
    return person1;
}
var search = function (roll) {
    for (var _i = 0, person_2 = person; _i < person_2.length; _i++) {
        var data = person_2[_i];
        if (data.roll === roll) {
            return data;
        }
    }
};
var q = 23;
console.log(search(q));
var search1 = function (english) {
    for (var _i = 0, person_3 = person; _i < person_3.length; _i++) {
        var data = person_3[_i];
        if (data.mark.english = english) {
            return data;
        }
    }
    return "pls enter crt data";
};
var s = 89;
console.log(search1(s));
