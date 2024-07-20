// Array Manipulation
const myName = []; 
console.log(myName); 
myName.push("John");
console.log(myName); 

// String Reassignment
let myName = "John";
console.log(myName); 
myName = "Alex";
console.log(myName); 


// Block Scope (var)
{
  var num = 5; 
  console.log(num); 
}
console.log(num); 


// String Interpolation (Template Literals)
let firstName = "Ram";
let lastName = "Setu";
console.log(`${firstName} ${lastName}`);


// Default Parameters (Corrected Function Syntax)
function addTwoNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}
console.log(addTwoNumbers(1, 2)); 


// Arrow Function with Rest Parameters
const addNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
console.log(addNumbers(1, 2)); 
console.log(addNumbers(1, 2, 3, 4)); 


// Spread Operator (Arrays)
let array = [5, 10, 15, 20, 25];
let newArray = [...array];
console.log(newArray);


// Spread Operator (Objects) - Shallow Copy
let object = {
  name: "John",
  age: 24, 
  city: "New York",
};
let object2 = { ...object, country: "USA" };
console.log(object2);


// Deep Copy (for nested objects)
let object3 = {
  name: "John",
  age: 24,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

// Deep copy using structuredClone (modern browsers)
let object4 = structuredClone(object3);
object4.address.city = "Newark";

console.log(object4); 
