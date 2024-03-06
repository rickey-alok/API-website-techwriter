// inorder to print any  information use `console.log()`.....................

// console.log("hellow from nodejs");
// console.log("hellow second time from nodejs");

// to read module from input...............................................

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter your name: ", (name) => {
//   console.log("your given name is:" + name);
//   rl.close(); //to close the interface
// });

// rl.on("close", () => {
//   console.log("interface closed");
//   process.exit(0);
// });

// reading and writing files synchronously...............................
// reading file...........
const fs = require("fs");

let textIn = fs.readFileSync("./nodeJS/input.txt", "utf-8");
console.log(textIn);

// writing file...........
let content = `Data read from input.txt: ${textIn}\n Date created ${new Date()}`;
let textout = fs.writeFileSync("./nodeJS/output.txt", content);
console.log(textout);
