// let a="hari"
// let h;
// for(h=0;h<10;h++){
//     if(h=='a'){
//         console.log(h);
//     }
// console.log(h);
// }




// let string="i am hariharan";
// let j;
// for(j=0;j<10;j++){
//  if(j=='a')
//  {
// console.log(j);
//  }
// }


// let sum=0;
// let x;
// let y;
// let str=2345

// while(str!=0){
// x=str%10;
// sum=sum*10+x;
// x=x/10;
// }
// if(str==x)
// {
//     console.log("crt");
    
// }


// let test="hari";
// let i,j;

// for(i=0;i<test.length;i++){
// let count=0;

// for(j=0;j<test.length;j++){
// if(test[i]==test[j]){
//     count++;
// }
// }
// }
// console.log(j);




// function reverseStringUsingLoop(str: string){
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
 
// const reversedStringLoop = 
//     reverseStringUsingLoop('Geeks For Geeks');
// console.log(reversedStringLoop);



// function isPalindrome(s: string): boolean {
//     return s === s.split('').reverse().join('');
// }

// function replacePalindromes(inputString: string): string {
//     const words: string[] = inputString.split(' ');
//     let result: string[] = [];

//     for (let word of words) {
//         if (isPalindrome(word)) {
//             result.push('*'.repeat(word.length));
//         } else {
//             result.push(word);
//         }
//     }

//     return result.join(' ');
// }

// const inputString: string = "juice has a cake";
// const outputString: string = replacePalindromes(inputString);
// console.log(outputString);



// function isPalindrome(s: string): boolean {
//     return s === s.split('').reverse().join('');
// }

// function replacePalindromes(inputString: string): string {
//     const words: string[] = inputString.split(' ');
//     let result: string[] = [];

//     for (let word of words) {
//         if (isPalindrome(word)) {
//             result.push('*'.repeat(word.length));
//         } else {
//             result.push(word);
//         }
//     }

//     return result.join(' ');
// }

// const inputString: string = "juice has a cake";
// const outputString: string = replacePalindromes(inputString);
// console.log(outputString);





// function check_palindrome(str) {
//     let j = str.length - 1;
//     for (let i = 0; i < j / 2; i++) {
//         let x = str[i];
//         let y = str[j - i];
//         if (x != y) {
//             return false;
//         }
//     }
//     return true;
 
// }
 
// function is_palindrome(str) {
//     let ans = check_palindrome(str);
//     if (ans == true) {
//         console.log(" palindrome ");
//     }
//     else {
//         console.log(" not a palindrome");
//     }
// }





//alphabets countion

let name1="i am ck hariharan";
let result ={}
for(let i=0;i<name1.length;i++)
{
    let ch=name1.charAt(i)
 if(!result[ch]){
    result[ch]=1;    
 }
 else{
    result[ch]+=1
 }

}
console.log(result);





//palindrome

function isPalindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();


    for (let i = 0; i < str.length / 2; i++) {


        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
}

let string1 = "madam";

const s=string1;

var re = /a/gi; 
var newstring = string1.replace(re, "*"); 

if (isPalindrome(string1)) {
    console.log(`${string1} is a palindrome`);
} else {
    console.log(`${string1} is not a palindrome`);
}


if (isPalindrome(newstring)) {
    console.log(`${newstring} new string`);

}

