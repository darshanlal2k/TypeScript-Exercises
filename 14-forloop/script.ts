
for (let i = 0; i < 3; i++) {
    console.log ("Block statement execution no." + i);
  }
  
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}



let str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

//in

let aarr = [10, 20, 30, 40];

for (var index in aarr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

let arrr = [10, 20, 30, 40];

for (var index1 in arrr) {
  console.log(index1); // prints indexes: 0, 1, 2, 3
}
console.log(index1); //OK, prints 3 

for (let index2 in arrr) {
  console.log(index2); // prints elements: 0, 1, 2, 3
}
console.log(index2); //Compiler Error: Cannot find index2

