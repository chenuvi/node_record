const fs = require("fs");
const vm = require("vm");
age = 28
// let content = fs.readFileSync("test.txt", "utf-8");
// eval(content);

// new Function
// let fn = new Function('age', 'return age + 1')
// console.log("🚀 ~ fn:", fn(age))
// console.log("🚀 ~ content:", content)

// vm.runInThisContext(content)
// vm.runInThisContext('age += 10')
console.log("🚀 ~ age:", age);
