  console.log(" run first");  
setTimeout(() => {
  console.log("run forth");
}, 0);
setImmediate(() => {
  console.log("run sixth");
});
Promise.resolve().then(() => {
  console.log("run second");
});
queueMicrotask(() => {
  console.log("run third");
});
const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("run fifth");
});