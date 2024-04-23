const arr2 = [
    { id: 1, value: 5 },
    { id: 2, value: 8 },
    { id: 3, value: 2 },
    { id: 3, value: 10 },
    { id: 0, value: 4 }
  ];

  arr2[7]
//   const isValueGreaterThanThree = ;
  
  const result1 = arr2.forEach((obj) => {console.log(obj);
    // console.log(result1);
    
  });

  const resul=arr2.map(obj=> obj)
  
  console.log(resul); 
  
const test = [1, 2, 3, 4, 5];
const t = arr2.some(x=>x.id===0);
const t1 = test.some(x=>x+2 )
console.log(t1);

console.log(t); // true
