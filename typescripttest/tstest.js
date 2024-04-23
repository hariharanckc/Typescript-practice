// console.log("hai");
// alphabets(c:string):number{
//     let h=0;
//     let result=0;
//             }
// }
// || c.toUpperCase()
var alphabet1 = /** @class */ (function () {
    function alphabet1() {
    }
    alphabet1.prototype.alphabets = function (c) {
        if (c.length < 1 || c.length > 7 || !/^[A-Z]+$/.test(c)) {
            // throw new Error("Invalid input: Column title must consist of 1 to 7 uppercase letters.");  
            console.log("ivalid input");
        }
        var val = 0;
        for (var i = 0; i < c.length; i++) {
            var valu = (c.charCodeAt(i) - 64);
            val = val * 26 + valu;
        }
        return val;
    };
    return alphabet1;
}());
var alphabet = new alphabet1();
console.log("input:columntitlevalue ".concat(alphabet.alphabets("AQWERTY")));
// CLS && TS-NODE tstest.ts 
// if (value < 1 || value > 26) {
//     return 0; 
// }
// function titleToNumber(columnTitle: string): number {
//     let result = 0;
//     for (let i = 0; i < columnTitle.length; i++) {
// result = result * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
//     }
//     return result;
// }
// const columnTitle: string = "AA";
// console.log(titleToNumber(columnTitle));
// class AlphabetConverter {
//     // Method to convert column title to numeric value
//     columnTitleToNumber(columnTitle: string): number {
//         // Check if the input meets the length and uppercase constraints
//         let result = 0;
//         // Convert each character to its corresponding numeric value
//         for (let i = 0; i < columnTitle.length; i++) {
//             const value = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
//             result = result * 26 + value;
//         }
//         return result;
//     }
// }
// // Example usage
// const converter = new AlphabetConverter();
// const columnTitle = "AA";
// console.log(`Input column title: ${columnTitle}`);
// console.log(`Numeric value: ${converter.columnTitleToNumber(columnTitle)}`);
var number = 12345;
var array = [];
var str = number.toString();
for (var l = 0; l < str.length; l++) {
    var o = array.push(parseInt(str[l]));
    // console.log(l);
    console.log(o);
}
console.log(array);
// console.log(str);
// console.log("number",number[0]);
