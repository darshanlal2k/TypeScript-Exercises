var num1 = 1;
function varDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //2
    console.log(num2); //2 
    console.log(num3); //4
    console.log(num4); //4
}
varDeclaration();
var nummmber = 1;
function demo() {
    var nummmber = 2;
    if (true) {
        var nummmber_1 = 3;
        console.log(nummmber_1); //Output: 3
    }
    console.log(nummmber); //Output: 2
}
console.log(nummmber); //Output: 1
demo();
