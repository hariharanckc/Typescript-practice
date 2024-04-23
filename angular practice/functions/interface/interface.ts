// let array :string[]=["home","about","dashboard"]

// // if(arry.length>0){

// console.log(array);


// for(let i=0;i<array.length;i++){
//     let ar=array.forEach(e=>e+"hai")
//     console.log(ar);
//     continue;

// }

// let pers: { [key: string]: any } = { name: "John", age: 30, city: "New York" };

// Object.entries(pers).forEach(([key, value]: [string, any]) => {
//     console.log(`${key}: ${value}`);
// });



class empid{
    eid(id){
        return `${id} is my id`
    }
}


class empname implements ownername{
    weight : number=10;
    ename(name){
        return `${name} is my name ${this.weight}`
    }

}
interface ownername{
// length:number;
}
const en=new empname()
console.log(en.ename("hari"));


class empphone extends empid implements ownername{
    length: number;
    ephone(phone){
        return `${phone} is my  number ${this.length}`
    }
}

const ep=new empphone()
console.log(ep.length=40);

console.log(ep.eid(100));
console.log(ep.ephone(12345));



interface classroom{
   readonly firststand:string;
    secondstand:string;
    getname():string;
}
interface teacher extends classroom{
    getteacher():string[];
}


class classroom1 implements classroom{
    firststand:string= "a section";
    secondstand:string= "b section";
    getname():string{
return this.firststand
    }
    getid(){
        return  this.firststand
    }
}

class teach implements teacher{
    firststand:string ="c section";
    secondstand:string ="d section";
    getname():string{
        return this.firststand
    }
    getteacher(): string[] {
        return []
    }
}

const rooms:classroom=new classroom1();
    console.log(rooms);
    
    const rooms1:teacher=new teach();
    console.log(rooms1);
    
// console.log(arry[0]);


let sub:(string|number|boolean)[]=["string",3,true]

let subj:{name:string,age:number,fs:boolean}={
  name:"dsf",
  age:87,
  fs:true 
}

let ob:{name:string,age:number}[]=[{name:"hari",age:543},{name:"meha",age:533}]
const u=JSON.stringify(ob)
console.log(u[1]);
console.log(ob);

const r=JSON.parse(u)
console.log(r[0]);


//foreach

let t:number[]=[1,2,3,4,5,6]
let y=t.forEach((jai,index)=>{
t[index]=jai*2
})
console.log(`foreach ${t}`);

//map

let x:number[]=[1,2,3,4,5,]
let z=x.map((hao)=>{
return hao*2
console.log(hao);
})

console.log(`map ${z}`);

//

let array=[1,3,2,5,6]

array.sort((a,b)=>a-b)

console.log(` ascending ${array}`);

let array1=[2,3,5,4,3,]

array1.sort((a,b)=>b-a)
console.log(`descending ${array1}`);

// let array2="12435256"

// let g=JSON.parse(array2)

// g.sort((a,b)=>a-b)
// console.log(`asscending string${g}`);


let array3=124332

// let arrag.toString(array3)

console.log([array3]);

let input:number=183428
let numArray:number[]=[]
let str:string=input.toString()
for(let i:number=0;i<str.length;i++){
    numArray.push(parseInt(str[i]))
}
const numarray=numArray.sort((a,b)=>a-b)
console.log(numarray);


// let input2:string[]=["abcdefghijklmnopqrstuvwxyz"];



// let input4:string="123456789"
// let 


// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";
// console.log("Length",fruits.length,"Fruits",fruits.toString())


// try {
// 	const x = '32';
// 	const y = +x;
// 	console.log(typeof y, ',', typeof x);
// } catch (error) {
// 	console.log('Developed code has runtime error.');
// } 


// class ClassA {
// 	static value = 20;
// 	constructor() {}
// }

// class ClassB {
// 	constructor() {}
// 	changeValue() {
// 		ClassA.value += 30;
// 	}
// }

// // Main Calling
// try {
// 	let classB = new ClassB();
// 	classB.changeValue();
// 	console.log("Value :", ClassA.value);
// } catch (err) {
// 	console.log("Please develop code without error...");
// <result

// given a string column title that represent that column title appreas in excel sheet return the corresponding column number . for a->1  z->25 b-> aa->27