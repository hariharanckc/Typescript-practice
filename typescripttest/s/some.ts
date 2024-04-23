const some:any[]=[{
    id:1,
    name:"hari"
},
{id:2,
    name:"mohan"
},
{
    id:3,
    name:"chella"
}
]

const somelist=some.some(x=> console.log(x.name=="chella"))
console.log(somelist);
