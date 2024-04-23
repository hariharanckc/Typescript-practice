console.log("hai");
let num1:number=123;
let remainder;
let sum=0;


while(num1>0){
    sum=sum*10+num1%10;
num1= Math.floor(num1 / 10);
}
console.log(num1);
console.log(sum);

let str = "String to reverse!"
let reverseString = "";
for (let char of str) {
   reverseString = char + reverseString;   
}
let check1=reverseString;

console.log(reverseString);



// console.log(reverseString)
//concordination
const arr = [23, 34, 77, 99, 324];
const sum2 = arr.reduce((accumula, currentVa) => accumula + currentVa, 0);
console.log(sum2);
const arr1 = [23, 34, 77, 99, 324];
let sum3 = 0;
arr.forEach((el) => sum3 += el);
console.log(sum3);


