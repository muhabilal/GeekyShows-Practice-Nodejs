import EventEmitter from "events"

//Creating Class
class MyEmitter extends EventEmitter { };

//Creating Object
const myEmitter = new MyEmitter();

//Example 1
//Register event listeners
myEmitter.on("event", () => {
    console.log("An event occured")
})
// we can call multiple events
//Example 2
myEmitter.on("events", () => {
    console.log("Another event occured")
})
//trigger an event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("events");



//Example 2
//Register event listeners
// let m = 0;
// myEmitter.on("event", () => {
//     console.log(++m)
// })
// // trigger an event
// myEmitter.emit("event");
// myEmitter.emit("event");



//Example 3
//Register event listeners
// let m = 0;
// myEmitter.once("event", () => {
//     console.log(++m)
// })
// // trigger an event
// myEmitter.emit("event");
// myEmitter.emit("event"); //ignore it 
