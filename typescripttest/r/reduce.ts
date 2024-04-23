const reducearray=[1,2,3,4,4,4,5,,6,2,]
console.log(reducearray.reduce((a:any,b:any)=>{
    return Math.max(a,b)
}));

