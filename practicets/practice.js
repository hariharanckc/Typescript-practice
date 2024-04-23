//print
console.log("welcome");
console.log("ts is a superset of javascript");
//addition
var a = 10;
var b = 20;
var add = function (a, b) {
    return a + b;
};
var result = add(a, b);
console.log(result);
//string concordination
var c = "hari";
var d = "20";
console.log("".concat(c + d));
var getperson = function (id, name) {
    return {
        Id: id,
        Name: "my name is ".concat(name),
    };
};
var person3 = getperson(1, "hari");
console.log("my id ".concat(person3.Id, " and ").concat(person3.Name));
var putperson = function (id, roll) {
    return {
        Id: id,
        Roll: "my roll no is ".concat(roll),
    };
};
var person4 = putperson(2, 123);
console.log("my roll ".concat(person4.Id, " and ").concat(person4.Roll));
var team = [{
        p1: "hari",
        id: 3232,
        h: {
            p2: "meha",
            id2: 343,
        }
    }];
var se = function (p1) {
    for (var _i = 0, team_1 = team; _i < team_1.length; _i++) {
        var data = team_1[_i];
        if (data.p1 === p1) {
            return data;
        }
    }
};
var y = "hari";
console.log(se(y));
