if (true) {
    console.log('This will always executed.');
}
if (false) {
    console.log('This will never executed.');
}
var x = 10, y = 20;
if (x < y) {
    console.log('x is less than y');
}
var xx = 10, yy = 20;
if (xx > yy) {
    console.log('x is greater than y.');
}
else {
    console.log('x is less than or equal to y.'); //This will be executed
}
var ax = 10, ay = 20;
if (ax > ay) {
    console.log('x is greater than y.');
}
else if (ax < ay) {
    console.log('x is less than y.'); //This will be executed
}
else if (ax == ay) {
    console.log('x is equal to y');
}
