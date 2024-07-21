class ListNode {
    val;
    next;
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// --------------------------------------------------------------------------

class Testclass {
    head;
    constructor(head = null) {
        this.head = head;
    }
    hasLast() {
        return this.head != null;
    }
    getLast() {
        if (!this.hasLast()) {
            return null;
        }
        let current = this.head;
        while(current.next.next != null) {
            current = current.next;
        }
        current.next.next = null;
        return findValue;
    }
}
let myVariable = new TextClass(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3, ListNode(4, ListNode(5))))
    )
);
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());

// ------------------------------------------------------------------------------------------------

//Promise is a class in JS
//Constructor(function)
let Promise = new Promise (fulfilled, notFulfilled) => {
    let num1 = 10;
    let num2 = 15;
    let sum = num1 + num2;
    if (sum > 24)
    fulfilled(sum);
    }
    else {
        notFulfilled(new Error("Promise not fulfilled"));
    }
});

// ---------------------------------------------------------------------------------------------------

myPromise
    .then(() => {
        console.log("Promis was fulfilled");
    })
    .catch(() => {
        console.log("Promis was not Fulfilled");
    });


    function addTwoNumbers(num1, num2) {
        let sum = 0;
        setTimeout(() => {
            console.log(num1, num2);
        }, 5000);
        console.log("Inside addTwoNumbers");
        return sum;
    }
    console.log(addTwoNumbers(2,3));

// ----------------------------------------------------------------------------------------------

function addTwoNumbers(num1, num2) {
    return new Promise((fulfilled, notFulfilled)) => {
        setTimeout(() => {
            console.log("Inside setTimeout");
                fulfilled(num1 + num2);
        }, 5000);
        notFulfilled(new Error("An Error occurred!");)
    });
}
addTwoNumbers(10,5); (
    .then() => {
        console.log("Promise was filfilled");
    })
    .catch() => {
        console.log("Promise was notFilfilled");
    });