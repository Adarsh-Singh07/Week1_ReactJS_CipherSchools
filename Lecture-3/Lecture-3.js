// map()
let array = [1,2,3,4,5];
let newArray = [];
for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
}
console.log(newArray);


let array = [5,10,15,20];
function functionForMap(element) {
    return element * element;
}
let newArray = array.map(functionForMap);

//In JS, a function is also a JS object
console.log(newArray);


// forEach()
let array = [1,2,3,4,5];
array.forEach((element, index) => {
    element * element;
    console.log(element);
});
console.log("Array is : " , array);


// filter()
let array = [10,20,30,40,50];
array.filter((element) => {
    return element >= 30;
});
console.log(element);


// find()
let array = [10,20,30,40,50];
let temp = array.find((value) => {
    return element > 20;
});
console.log(temp);


// sort()
let array = [50,40,30,20,10,111];
let sortedarray = array.sort()
console.log(sortedarray);

let array = [50,40,30,20,10,111];
let sortedarray = array.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortedarray);


// Object Destructuring
let details = {
    name: "John",
    age: "24",
    address: {
        city: "New York",
        state: "NY",
        country: "USA",
        street: "Brooklyn",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
console.log(details.address.passportDetails.passportNumber);


//Array matching and Object matching
let obj1 = {name: "Ram"};
let obj2 = {name: "Ram"};
functionareEqual(obj1,obj2) {
    if (obj1 == obj2) {
        return true;
    }
    if(object.key(obj1).length ! = object.key(obj2).length) {
        return false;
    }
    for (let key of object.keys(obj1)) {
        if (typeof obj2[key] == "undefined") {
            return false;
        }
        if (obj2[key] != obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1, obj2));


let map = new map();
map.set(1, "Ram");
map.set2(2, "Alex");
console.log(map);
map.value()


let set = new set();
set.add(1);
set.add(2);
console.log(set);


//Class
class Animal {
    noOfLegs;
    color;
    family;
    sound;
    constructor(noOfLegs.color,family,sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}

let animal = new Animal(4, "browm","rodent","something");
console.log(animal);