const { Readable } = require("stream");
let source = ["so so ", "sad", "happy"];

class MyReadable extends Readable {
  constructor() {
    super();
    this.source = source;
  }
  _read() {
    let data = this.source.shift() || null;
    this.push(data);
  }
}

let myReadable = new MyReadable(source);

myReadable.on("readable", () => {
  let data = null;
  while ((data = myReadable.read()) !== null) {
    data.toString();
    console.log("data.toString() :", data.toString());
  }
});

// myReadable.on("data", (chunk) => {
//   console.log("🚀 ~ myReadable.on ~ chunk:", chunk.toString());
// });
