for (var i = 0; i < 3; i++) {
    console.log("Block statement execution no." + i);
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
var str = "Hello World";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var char = str_1[_a];
    console.log(char); // prints chars: H e l l o  W o r l d
}
//in
var aarr = [10, 20, 30, 40];
for (var index in aarr) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
var arrr = [10, 20, 30, 40];
for (var index1 in arrr) {
    console.log(index1); // prints indexes: 0, 1, 2, 3
}
console.log(index1); //OK, prints 3 
for (var index2 in arrr) {
    console.log(index2); // prints elements: 0, 1, 2, 3
}
console.log(index2); //Compiler Error: Cannot find index2
