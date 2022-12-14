const path = require("path");
console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));
console.log(path.dirname(__filename));

//extension name
// console.log(path.extname(__filename));

// console.log(path.join("/search", "label", "course/python", "oop"))

// console.log(path.join("/search", "label", "course/python", "oop", "..")) //levelup and ignore oop
// console.log(path.join("/search", "label", "course/python", "oop", "..", ".."))
// console.log(path.join(__dirname, "code", "allCode.js"));

console.log(path.parse(__dirname));

