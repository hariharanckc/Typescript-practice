//function 
function echo(message: string): void {
    console.log(message.toLowerCase());
}

console.log(echo("hari"));

function add(a:number,b:number){

    return a+b;

}

console.log(`function ${add(2,4)}`);


// array
const name1: (string| number)[] =["hari",34,"hari"];

   console.log(name1);
    

//function type

 let add1 = function (x: number, y: number) {
    return x + y;
};

console.log(`add number using function type ${add1(2,3)}`);

// let add2 = (x: string, y: string) => {
//     return x.concat(y).length;
// };

// console.log(add2("hari","haran"));

let add2=(i:string,o:string)=>{
    return i.concat(o).length;
}
console.log(add2("meha","selvan"));

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}


console.log("multiply",multiply(2,3,8));

let multi=(p:number,q:number,r?:number):number =>{

    // if(typeof r!== 'undefined'){
    //     return p+q+r;
    // }
    
    return p+q+(r||0);

}

console.log("multi",multi(3,3));


let a=10;
console.log(typeof(a));


function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) =>{ total += num});
    return total;
}
console.log(getTotal(10,20));






let equal=(str1:number|string,str2:number|string)=>{

    if(typeof str1==="number" && typeof str2 === "number"){
        return str1+str2;
    }
    if ( typeof str1==="string" && typeof str2 === "string"){
        return str1+str2;
    }

// throw new Error("invalid")
}

console.log("equal=",equal("hari",9));


let perso:{
    name:string|number|boolean;
    phoneno:number;
};
perso={
    name:false,
    phoneno:897987987
}

console.log("list",perso.name);

let inc=(counter:number)=>{
    return ++counter;
}
console.log(inc(4));

let hexadecimal:number=0XA;
console.log(hexadecimal);


let staff:object;

staff={
    name:"hari",
    address:"kamaraj st"
};

console.log(staff);


let vacant:{name:string}={
    name:"hari",
};

console.log(vacant.name);


//array

let arrayName: string[];

arrayName=["hari"]

console.log(arrayName);


let staff1:number[];
staff1=[3]
console.log(staff1);


let n=[1,2,3,4]

const y=n.map(k=>k*3)

console.log(y);

//enum

enum books{
    tamil,
    english,
    maths,
    science,
    social
}

const checked={
status:books.tamil,

}
let log=(message1): void=> {
    console.log(message1);
}

console.log(log("hari"));

let fn=(a: string|number): string=> {
    if (typeof a === "string") {
      return "success";
    } else if (typeof a === "number") {
      return "fail";
    }  
    // make the function valid
    return neverOccur();
  }
  
  let neverOccur = () => {
     throw new Error('Never!');
  } 

  console.log(fn(9));
  //alise

//   type alphanume=string;
//   let input:alphanume;
// input='o'
// console.log(input);


let  input:"john"|"jaro";
input="john";
input="jaro";

const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
console.log(myObj.name);

//switch

let touch="";

switch(touch){
    case "meha":
        console.log("meha");
        break;
        case "hari":
            console.log("hari");
            break;
            default:
                console.log("invalid");
        
}
let products = [
    { name: 'phone', price: 900 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
let product = products[1];

switch (product.name) {
    case 'phone':
        discount = 10;
        break;
    case 'tablet':
        discount = 5;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);

let products1 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products1.length; i++) {
    if (products1[i].price == 1200)
        break;
}

// show the products
console.log(products[i]);

let add4 = function (x: string, y: string): number {
    return x.concat(y).length;
};
console.log(add4("chellam","kumar"));

let add5: (a: string, b: string) => string =
    function (x: string, y: string) {
        return x;
    };

    console.log(add5("hari","haran"));
    
    enum Month {
        Jan,
        Feb,
        Mar,
        Apr,
        May,
        Jun,
        Jul,
        Aug,
        Sep,
        Oct,
        Nov,
        Dec
    };
    function isItSummer(month: Month) {
        let isSummer: boolean;
        switch (month) {
            case Month.Jun:
            case Month.Jul:
            case Month.Aug:
                isSummer = true;
                break;
            default:
                isSummer = false;
                break;
        }
        return isSummer;
    }
    
    console.log(isItSummer(Month.May)); // true



    function ini(u:string|number){
        if(typeof u==="string"){
            return true;
        }else if(typeof u=== "number"){
            return false;
        }
    }
    console.log(ini(9));

    const max = 100;
let counter = 9;

if(counter < max ? counter++ : counter = 1){
    console.log(counter);

}

// let counter1 = 0;

// while (counter1 < 5) {
// if(counter = 3?counter=0:counter=1){
//     console.log(counter);
// }
// }

let products5 = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products5.length; i++) {
    if (products[1].price == 900)
        continue;
}

// show the products
console.log(products[i]);

for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 4)
        break;

    // the following code will be skipped for odd numbers
    console.log(index);
}


let add6=(a: number, b: number): number|boolean=> {
    let g= a + b;
    return g
}
console.log(add6(4,3));

let get=(...sum:number[]):number=>{
    let total=0;
    sum.forEach((sums) => total+=sums) 
        return total;
    }

    
console.log(get(10,20,50));


// class person{
//     static getFullName: any;

// }

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(Ssn: string, FirstName: string, lastName: string) {
        this.ssn = Ssn;
        this.firstName = FirstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person5 = new Person('171-28-0926','John','Doe');
console.log(person5.getFullName());




class myName{
    firstname:string;
    secondname:string;
    constructor (firstname:string,secondname:string){
        this.firstname=firstname;
        this.secondname=secondname;
    }

    getMyName():string{
        return `${this.firstname} ${this.secondname}`
    }
}

let myname=new myName("hari","haran");
console.log(myname.getMyName());


// class addNumber{
//     fnum:number;
//     snum:number;

//     constructor(fnum1:number,snum2:number){
//         this.fnum=fnum1;
//         this.snum=snum2;
//     }
//     get():string{
//         return `${this.fnum} ${this.snum}`
//     }
// }

// let addnumber=new addNumber(2,5);
// console.log(addnumber);

// class Subraction{
//     numf:number;
//     nums:number;
//     constructor(numf:number,nums:number){
//         this.numf=numf;
//         this.nums=nums;
//     }
//     put(){
// return `${this.numf} ${this.nums}`        
//     }
// }

// let subraction=new Subraction(3,4);
// console.log(subraction);
class Person6 {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let person = new Person6();
person.age = 10;
console.log(person.age);



// read only

//type 

let arr: ReadonlyArray<string>=["h1","h2","h3"];
console.log(`${arr[0]}`);

//type 2

let arr1:readonly string[]=["a1"];
console.log(`${arr1[0]}`);

//type 3

const read1=(arr:readonly string[]) =>{
    const copy=arr.slice();
    copy.push("8");
    copy.pop();
}

read1(["2","3"])

function reado(tuple :ReadonlyArray<number|string>){
    // tuple[0]=102;
    tuple.forEach(a=>console.log(a));
}

reado([3])





let employ:{ name8:string; }={name8:"hari",}
let employ1:string[]=["hello"]


let ar=[1,2,3,];

let d=ar.map(e1=>e1*2);
console.log(d);


