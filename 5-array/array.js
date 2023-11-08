// normal square bracket array
var samplefruits = ['Apple', 'Orange', 'Banana'];
console.log(samplefruits);
// mentioned array in string  type
var manyfruits = ['Apple', 'Orange', 'Banana'];
console.log(manyfruits);
//next line also assign kaeruvaai
var arrayfruits;
arrayfruits = ['Apple', 'Orange', 'Banana'];
console.log(arrayfruits);
// mentioned array in number type
var ids;
ids = [23, 34, 100, 124, 44];
console.log(ids);
// printing index acessing in array 
var indexfruits = ['Apple', 'Orange', 'Banana'];
indexfruits[0];
indexfruits[1];
indexfruits[2];
indexfruits[3]; // onnum kodukala
console.log(indexfruits[0]);
console.log(indexfruits[1]);
console.log(indexfruits[2]);
console.log(indexfruits[3]);
// multiple array type like string as well as number 
var multiplesvalues = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(multiplesvalues);
// or 
var multVvalues = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(multVvalues);
// looping in array
var fruits = ['Apple', 'Orange', 'Banana', 'vishnu'];
for (var index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
