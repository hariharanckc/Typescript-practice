
class Department{
  private  employees:string[]=[];

    constructor(private readonly id:string, public name:string){}
    describe()
    {
        console.log("dept"+this.name);
        console.log("id"+this.id);
    }
    addemployees(employee:string){
        this.employees.push(employee)
department.employees[1]="mohan";
    }

    printemployees(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

}








let department = new Department("di","computer science");
console.log(department);
department.describe();
department.addemployees("hari");
department.addemployees("haran");
department.printemployees();


// let departmentcopy={describe:department.describe}
// console.log(departmentcopy.describe);


let input:number=123455;
let array:any[]=[]
let str=input.toString()
for(let p=0;p<str.length;p++){
array.push(JSON.parse(str[p]))
}

console.log(array[0]);

let inputst="hari"
let inputstr="haran"
let con:any[]=[]

let arra=inputst.concat(inputstr)
let arraysplice=arra.split(' ')
console.log("name",arraysplice);
console.log(arra);


let mynumber=3243242;
console.log(mynumber[0]);


