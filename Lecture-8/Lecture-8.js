import React from "react";
const AllUserList = () => {};
    let allUsers = [
        name: "John",
        email: "xyz@gmail.com",
        phone number: "+91-9876543210",
    {name: "Ram", email: "ram@gmail.com", phone number: "+91-7413560014"},
    {name: "Shyam", email: "shyam@gmail.com", phone number: "+91-8419560015"},
    ];
    return (
        <div>
            <UserDetails user = {allUsers[0]} />
            <UserDetails user = {allUsers[1]} />
            <UserDetails user = {allUsers[2]} />
        </div>
    );
};
export default AllUserList;

______________________________________________________________________________________

let n  10;
function testFunction (a) {
    console.klog(a);
}
function demoFunction () {
    let b = n + 10;
    testFunction(b);
}
demoFunction();

______________________________________________________________________________________

    import { timeStamp } from "console";
import React, { Component } from "react";
class UserDetails extends Component {
    user = this.props.user;
    render () {
        return (
            <div>
                <h3>{this.user.name}</h3>
                <h5>
                    Email: {this.user.email}
                    <br/>
                    Phone Number: {this.user.phonenumber}
                </h5>
            </div>
        );
    }
}

______________________________________________________________________________________

function demoFunction () {
    return {1,2};
}
let [abc,def] = demoFunction ();
console.log('ABC: is ${abc} and DEF: is ${def}');