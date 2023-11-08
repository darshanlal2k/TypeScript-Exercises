var empId: number = 1;
var empName: string = "Steve";        
console.log(empId);
console.log(empName);
// Tuple type variable 
var employee: [number, string] = [1, "Steve"];
console.log(employee);

var zohoEmployee : Array <number | string>;
zohoEmployee = [12345 , 'darshan'];
console.log(zohoEmployee);

var yohoemployee: [number, string][];
yohoemployee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

console.log(yohoemployee[0]);

var employeee: [number, string] = [1, "Steve"];
employeee.push("Jobs"); 
console.log(employeee[0]); 