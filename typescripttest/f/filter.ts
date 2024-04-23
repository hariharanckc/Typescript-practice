const arr = [1, 2, 3, 4, 5];
const isEven = (num: number) => num / 2 === 2;

const result = arr.filter(isEven);
console.log(result); // [2, 4]


const mynames:any[]=[{
    names:"xxx",
    roll:2002

},{ 
names:"yyy",
roll:2003
},
{ 
    names:"zzz",
    roll:2004
    },{ 
        names:"zzz",
        roll:2004
        },{ 
            names:"zzz",
            roll:2004
            }

]

const filters=(obj:any)=>{
    obj.roll<2004
}

const fil=mynames.filter(filters)
console.log(fil);
