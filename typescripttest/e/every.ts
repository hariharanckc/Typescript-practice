const every:any[]=[
    {
        id:1,
        "name":"dsfs"
    },   {
        id:2,
        "name":"dsfs"
    },   {
        id:3,
        "name":"dsfs"
    },   {
        id:4,
        "name":"dsfs"
    } ,  {
        id:5,
        "name":"dsfs"
    } ,  {
        id:6,
        "name":"dsfs"
    }
]

// const every1:number[]=[1,2,3,4,]
// const ev=(num:number)=>
//     num<0
        
// const evernumlist=every1.every(ev);
// console.log(evernumlist);

//how to check object type

// const ever=(id:any)=>{
//     id>0
// }

// const everylist=every.every(ever);
// console.log(everylist);


const entries2=every.every((x)=> {return x.id==5})
console.log(entries2);

// console.log(entries2.valueOf);
