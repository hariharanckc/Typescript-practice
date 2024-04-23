const studentname:any[]=[
    {
        "name":"sss",
    },
    {
        "roll":33
    },
    {
        "address":"sfds"
    }

]
// we have to change the object convert in to array include specified with key and values
const iterato=studentname.entries();
const i=iterato.next().value
console.log(i[0]);

for(let [key,value] of iterato){
console.log(key,value);

}


