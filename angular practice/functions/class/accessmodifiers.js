var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("dept" + this.name);
        console.log("id" + this.id);
    };
    Department.prototype.addemployees = function (employee) {
        this.employees.push(employee);
        department.employees[1] = "mohan";
    };
    Department.prototype.printemployees = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var department = new Department("di", "computer science");
console.log(department);
department.describe();
department.addemployees("hari");
department.addemployees("haran");
department.printemployees();
// let departmentcopy={describe:department.describe}
// console.log(departmentcopy.describe);
var input = 123455;
var array = [];
var str = input.toString();
for (var p = 0; p < str.length; p++) {
    array.push(JSON.parse(str[p]));
}
console.log(array[0]);
var inputst = "hari";
var inputstr = "haran";
var con = [];
var arra = inputst.concat(inputstr);
var arraysplice = arra.split(' ');
console.log("name", arraysplice);
console.log(arra);
