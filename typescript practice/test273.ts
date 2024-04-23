let person = [
    {
        name: "mohan", roll: 23, nickname: "meha",
        mark: {
            tamil: 34,
            english: 89,
        }
    }


];

const search = (roll: number) => {
    for (let data of person) {
        if (data.roll === roll) {
            return data;
        }
    }
}
const q: number = 23;
console.log(search(q));


let d;
let a="hello";
for(d of a){
console.log(d);
}

