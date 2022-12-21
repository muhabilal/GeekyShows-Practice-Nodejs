//Import and export modules common js
//it is not important to use name same as module name
// const name = require('./student')
// console.log(name)

//Alos use
// const fullname = require('./student');
// console.log("your full name is: " + fullname)

//access functions
//Note if we use curley braces one thing remember that function name and variable name are same when import and export
const { name, marks } = require('./student');
console.log("fullname", name);
marks(10, 20);