// let array :string[]=["home","about","dashboard"]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var empid = /** @class */ (function () {
    function empid() {
    }
    empid.prototype.eid = function (id) {
        return "".concat(id, " is my id");
    };
    return empid;
}());
var empname = /** @class */ (function () {
    function empname() {
        this.weight = 10;
    }
    empname.prototype.ename = function (name) {
        return "".concat(name, " is my name ").concat(this.weight);
    };
    return empname;
}());
var en = new empname();
console.log(en.ename("hari"));
var empphone = /** @class */ (function (_super) {
    __extends(empphone, _super);
    function empphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    empphone.prototype.ephone = function (phone) {
        return "".concat(phone, " is my  number ").concat(this.length);
    };
    return empphone;
}(empid));
var ep = new empphone();
console.log(ep.length = 40);
console.log(ep.eid(100));
console.log(ep.ephone(12345));
var classroom1 = /** @class */ (function () {
    function classroom1() {
        this.firststand = "a section";
        this.secondstand = "b section";
    }
    classroom1.prototype.getname = function () {
        return this.firststand;
    };
    classroom1.prototype.getid = function () {
        return this.firststand;
    };
    return classroom1;
}());
var teach = /** @class */ (function () {
    function teach() {
        this.firststand = "c section";
        this.secondstand = "d section";
    }
    teach.prototype.getname = function () {
        return this.firststand;
    };
    teach.prototype.getteacher = function () {
        return [];
    };
    return teach;
}());
var rooms = new classroom1();
console.log(rooms);
var rooms1 = new teach();
console.log(rooms1);
// console.log(arry[0]);
var sub = ["string", 3, true];
var subj = {
    name: "dsf",
    age: 87,
    fs: true
};
var ob = [{ name: "hari", age: 543 }, { name: "meha", age: 533 }];
var u = JSON.stringify(ob);
console.log(u[1]);
console.log(ob);
var r = JSON.parse(u);
console.log(r[0]);
//foreach
var t = [1, 2, 3, 4, 5, 6];
var y = t.forEach(function (jai, index) {
    t[index] = jai * 2;
});
console.log("foreach ".concat(t));
//map
var x = [1, 2, 3, 4, 5,];
var z = x.map(function (hao) {
    return hao * 2;
    console.log(hao);
});
console.log("map ".concat(z));
//
var array = [1, 3, 2, 5, 6];
array.sort(function (a, b) { return a - b; });
console.log(" ascending ".concat(array));
var array1 = [2, 3, 5, 4, 3,];
array1.sort(function (a, b) { return b - a; });
console.log("descending ".concat(array1));
// let array2="12435256"
// let g=JSON.parse(array2)
// g.sort((a,b)=>a-b)
// console.log(`asscending string${g}`);
var array3 = 124332;
// let arrag.toString(array3)
console.log([array3]);
var input = 183428;
var numArray = [];
var str = input.toString();
for (var i = 0; i < str.length; i++) {
    numArray.push(parseInt(str[i]));
}
var numarray = numArray.sort(function (a, b) { return a - b; });
console.log(numarray);
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
// }
