const arr1 = [1, 2, 7, 4, 5];
const isGreaterThanThree = (num: number) => num > 4;
const result2 = arr1.findIndex(isGreaterThanThree);
console.log(result2); // 3