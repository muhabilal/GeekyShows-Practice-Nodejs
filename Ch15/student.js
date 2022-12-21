//Import and export modules common js
const name = "Bilal Dar";
// module.exports = name;



const marks = (math, sci) => {
    console.log("Total marks is: ", math + sci)
}
module.exports = { name, marks }

