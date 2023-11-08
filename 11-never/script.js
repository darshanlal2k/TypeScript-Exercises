function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always does something and never ends.');
    }
}
function sayHi() {
    console.log('Hi!');
}
var speech = sayHi();
console.log(speech);
