console.log("hai");
var num1 = 123;
var remainder;
var sum = 0;
while (num1 > 0) {
    sum = sum * 10 + num1 % 10;
    num1 = Math.floor(num1 / 10);
}
console.log(num1);
console.log(sum);
var str = "String to reverse!";
var reverseString = "";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    reverseString = char + reverseString;
}
var check1 = reverseString;
console.log(reverseString);
// console.log(reverseString)
//concordination
var arr = [23, 34, 77, 99, 324];
var sum2 = arr.reduce(function (accumula, currentVa) { return accumula + currentVa; }, 0);
console.log(sum2);
var arr1 = [23, 34, 77, 99, 324];
var sum3 = 0;
arr.forEach(function (el) { return sum3 += el; });
console.log(sum3);
