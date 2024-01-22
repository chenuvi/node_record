const { Duplex } = require("stream");

class MyDuplex extends Duplex {
  constructor(source) {
    super();
    this.source = source;
  }

  _read() {
    let data = this.source.shift() || null;
    this.push(data);
  }

  _write(chunk, en, next) {
    process.stdout.write(chunk);
    process.nextTick(next);
  }
}

let source = ["a", "b", "c"];
let myDuplex = new MyDuplex(source);
// myDuplex.on("data", (chunk) => {
//   console.log("chunk :", chunk.toString());
// });
myDuplex.write("我的手好冷啊", () => {
  console.log("write done :");
});
