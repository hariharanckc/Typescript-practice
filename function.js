//function 
function echo(message) {
    console.log(message.toLowerCase());
}
console.log(echo("hari"));
function add(a, b) {
    return a + b;
}
console.log("function ".concat(add(2, 4)));
// array
var name1 = ["hari", 34, "hari"];
console.log(name1);
//function type
var add1 = function (x, y) {
    return x + y;
};
console.log("add number using function type ".concat(add1(2, 3)));
// let add2 = (x: string, y: string) => {
//     return x.concat(y).length;
// };
// console.log(add2("hari","haran"));
var add2 = function (i, o) {
    return i.concat(o).length;
};
console.log(add2("meha", "selvan"));
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log("multiply", multiply(2, 3, 8));
var multi = function (p, q, r) {
    // if(typeof r!== 'undefined'){
    //     return p+q+r;
    // }
    return p + q + (r || 0);
};
console.log("multi", multi(3, 3));
var a = 10;
console.log(typeof (a));
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { total += num; });
    return total;
}
console.log(getTotal(10, 20));
var equal = function (str1, str2) {
    if (typeof str1 === "number" && typeof str2 === "number") {
        return str1 + str2;
    }
    if (typeof str1 === "string" && typeof str2 === "string") {
        return str1 + str2;
    }
    // throw new Error("invalid")
};
console.log("equal=", equal("hari", 9));
var perso;
perso = {
    name: false,
    phoneno: 897987987
};
console.log("list", perso.name);
var inc = function (counter) {
    return ++counter;
};
console.log(inc(4));
var hexadecimal = 0XA;
console.log(hexadecimal);
var staff;
staff = {
    name: "hari",
    address: "kamaraj st"
};
console.log(staff);
var vacant = {
    name: "hari",
};
console.log(vacant.name);
//array
var arrayName;
arrayName = ["hari"];
console.log(arrayName);
var staff1;
staff1 = [3];
console.log(staff1);
var n = [1, 2, 3, 4];
var y = n.map(function (k) { return k * 3; });
console.log(y);
//enum
var books;
(function (books) {
    books[books["tamil"] = 0] = "tamil";
    books[books["english"] = 1] = "english";
    books[books["maths"] = 2] = "maths";
    books[books["science"] = 3] = "science";
    books[books["social"] = 4] = "social";
})(books || (books = {}));
var checked = {
    status: books.tamil,
};
var log = function (message1) {
    console.log(message1);
};
console.log(log("hari"));
var fn = function (a) {
    if (typeof a === "string") {
        return "success";
    }
    else if (typeof a === "number") {
        return "fail";
    }
    // make the function valid
    return neverOccur();
};
var neverOccur = function () {
    throw new Error('Never!');
};
console.log(fn(9));
//alise
//   type alphanume=string;
//   let input:alphanume;
// input='o'
// console.log(input);
var input;
input = "john";
input = "jaro";
var myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
var myObj = JSON.parse(myJSON);
console.log(myObj.name);
//switch
var touch = "";
switch (touch) {
    case "meha":
        console.log("meha");
        break;
    case "hari":
        console.log("hari");
        break;
    default:
        console.log("invalid");
}
var products = [
    { name: 'phone', price: 900 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
var discount = 0;
var product = products[1];
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
console.log("There is a ".concat(discount, "% on ").concat(product.name, "."));
var products1 = [
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
var add4 = function (x, y) {
    return x.concat(y).length;
};
console.log(add4("chellam", "kumar"));
var add5 = function (x, y) {
    return x;
};
console.log(add5("hari", "haran"));
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
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
function ini(u) {
    if (typeof u === "string") {
        return true;
    }
    else if (typeof u === "number") {
        return false;
    }
}
console.log(ini(9));
var max = 100;
var counter = 9;
if (counter < max ? counter++ : counter = 1) {
    console.log(counter);
}
// let counter1 = 0;
// while (counter1 < 5) {
// if(counter = 3?counter=0:counter=1){
//     console.log(counter);
// }
// }
var products5 = [
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
for (var index = 0; index < 9; index++) {
    // if index is odd, skip it
    if (index % 4)
        break;
    // the following code will be skipped for odd numbers
    console.log(index);
}
var add6 = function (a, b) {
    var g = a + b;
    return g;
};
console.log(add6(4, 3));
var get = function () {
    var sum = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sum[_i] = arguments[_i];
    }
    var total = 0;
    sum.forEach(function (sums) { return total += sums; });
    return total;
};
console.log(get(10, 20, 50));
// class person{
//     static getFullName: any;
// }
var Person = /** @class */ (function () {
    function Person(Ssn, FirstName, lastName) {
        this.ssn = Ssn;
        this.firstName = FirstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person5 = new Person('171-28-0926', 'John', 'Doe');
console.log(person5.getFullName());
var myName = /** @class */ (function () {
    function myName(firstname, secondname) {
        this.firstname = firstname;
        this.secondname = secondname;
    }
    myName.prototype.getMyName = function () {
        return "".concat(this.firstname, " ").concat(this.secondname);
    };
    return myName;
}());
var myname = new myName("hari", "haran");
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
var Person6 = /** @class */ (function () {
    function Person6() {
    }
    Object.defineProperty(Person6.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person6.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person6;
}());
var person = new Person6();
person.age = 10;
console.log(person.age);
// read only
//type 
var arr = ["h1", "h2", "h3"];
console.log("".concat(arr[0]));
//type 2
var arr1 = ["a1"];
console.log("".concat(arr1[0]));
//type 3
var read1 = function (arr) {
    var copy = arr.slice();
    copy.push("8");
    copy.pop();
};
read1(["2", "3"]);
function reado(tuple) {
    // tuple[0]=102;
    tuple.forEach(function (a) { return console.log(a); });
}
reado([3]);
var employ = { name8: "hari", };
var employ1 = ["hello"];
var ar = [1, 2, 3,];
var d = ar.map(function (e1) { return e1 * 2; });
console.log(d);
var arrarys = [1, 3, 4, 5];
var d1 = ar.forEach(function (e) { return console.log(d1); });
