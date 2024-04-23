var studentnames = [
    {
        "name": "sss",
    },
    {
        "roll": 33
    },
    {
        "address": "sfds"
    }
];
var iterator = studentnames.entries();
for (var _i = 0, iterator_1 = iterator; _i < iterator_1.length; _i++) {
    var _a = iterator_1[_i], key = _a[0], value = _a[1];
    console.log(key, value);
}
// console.log(iterators.next().value);
