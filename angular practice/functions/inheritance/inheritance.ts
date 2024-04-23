
class School{

student:string[]=[];

constructor(public S1:string, public S2:string,public S3:string){

}
addstudent(name1:string){
this.student.push(name1)    
}
printst(){
console.log(this.student);
}
}



class schools extends School{}

const it=new schools("d1","d2","d3");
console.log(it);


let fno=(a: string | number)=> {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }   
  }
console.log(fno(8));


let k=(b:string,i:string):string=>{

    let g=b.concat(i);

return  g;
}

console.log(k("hari","haran"));



let valent:{firstname}={firstname:"hari"}

console.log(valent.firstname);

