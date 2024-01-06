let buf = Buffer.alloc(6);

// fill
// buf.fill("123", 1, 3);
// console.log("🚀 ~ file: 02_buffer_api.js:4 ~ buf:", buf);
// console.log("🚀 ~ file: 02_buffer_api.js:5 ~ buf.toString():", buf.toString());

// write [1,3)
// buf.write("123", 1, 3);
// console.log("🚀 ~ file: 02_buffer_api.js:4 ~ buf:", buf);
// console.log("🚀 ~ file: 02_buffer_api.js:5 ~ buf.toString():", buf.toString());

// toString
let b1 = Buffer.alloc(6);
let b2 = Buffer.from("热爱学习");
b2.copy(b1, 3);
console.log("🚀 ~ file: 02_buffer_api.js:15 ~ b1:", b1.toString());
console.log("🚀 ~ file: 02_buffer_api.js:16 ~ b2:", b2.toString());
