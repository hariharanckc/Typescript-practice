var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(S1, S2, S3) {
        this.S1 = S1;
        this.S2 = S2;
        this.S3 = S3;
        this.student = [];
    }
    School.prototype.addstudent = function (name1) {
        this.student.push(name1);
    };
    School.prototype.printst = function () {
        console.log(this.student);
    };
    return School;
}());
var schools = /** @class */ (function (_super) {
    __extends(schools, _super);
    function schools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return schools;
}(School));
var it = new schools("d1", "d2", "d3");
console.log(it);
var fno = function (a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
};
console.log(fno(8));
var k = function (b, i) {
    var g = b.concat(i);
    return g;
};
console.log(k("hari", "haran"));
