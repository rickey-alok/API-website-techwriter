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
// const fs = require("fs");

// let textIn = fs.readFileSync("./nodeJS/input.txt", "utf-8");
// console.log(textIn);

// writing file...........
// let content = `Data read from input.txt: ${textIn}\n Date created ${new Date()}`;
// let textout = fs.writeFileSync("./nodeJS/output.txt", content);
// console.log(textout);

// reading and writing files Asynchronously...............................
// reading file...........
// const fs = require("fs");

// fs.readFile("./nodeJS/input.txt", "utf-8", (error1, Data1) => {
//   console.log(Data1);
// });
// console.log("reading file..."); // just to ensure this line of codes gets executed first and then the data1 info as this works Asynchronously...

// // writing file...........
// let content = `new date ${new Date()}`;
// fs.writeFile("./nodeJS/output2.txt", content, () => {
//   console.log("file written successfuly");
// });

//Step-1: Create a server........................................................
// const http = require("http");
// const fs = require("fs");
// const html = fs.readFileSync("./pages/contact.html", "utf-8");
// const server = http.createServer((req, res) => {
//   res.end(html);
// console.log("a new request received");
// console.log(req);
// });

// STEP-2: Start the server......................................................

// server.listen(9000, "127.0.0.1", () => {
//   console.log("server started");
// });

// create ROUTING...................................................................
const http = require("http");
const fs = require("fs");
const html = fs.readFileSync("./index.html", "utf-8");
const contact_html = fs.readFileSync("./pages/contact.html", "utf-8");
const server = http.createServer((req, res) => {
  let path = req.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.end(html);
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.end(contact_html);
  } else {
    res.end("404: page not found");
  }
});
server.listen(9000, "127.0.0.1", () => {
  console.log("server started");
});
