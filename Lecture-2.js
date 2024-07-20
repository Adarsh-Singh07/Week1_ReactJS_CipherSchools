
const myName = [];
console.log(myName);
myName.push("John")
console.log(myName);


let myName = "John";
console.log(myName);
myName = "Alex";
console.log(myName);


{
    var num = 5;
    console.log(num);
}cd my-react-app


//String Interpolation
let firstName = "Ram";
let lastName = "Setu";
console.log(firstName + " " + lastName);


let firstName = "Ram";
let lastName = "Setu";
let fullName = '${firstName} ${lastName}';
console.log(fullName);
console.log(firstName);


//Default paramas
let addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(1,2));

let addTwoNumbers = (num1 + num2) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
console.log(addTwoNumbers(1,2));


//Rest and Spread operator are applicable in Arrays and Object in Javascript
//Rest -> ...
//spread -> ...
let array = [5,10,15,20,25];
let newArray = [ ...array];
console.log(array);

//For object
let object = {
    name: "John",
    age: "24",
    city: "New York",
};
let object2 = {...object, country: "USA"};
console.log(object2);


let object = {
    name: "John",
    age: "24",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
console.log(object2);