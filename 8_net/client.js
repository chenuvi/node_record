const net = require("net");

const client = net.createConnection({
  port: 1234,
  host: "127.0.0.1",
});

client.on("connect", () => {
  client.write("水冷了呢");
});

client.on("data", (chunk) => {
  console.log("chunk :", chunk.toString());
});

client.on("error", (err) => {
  console.log("err :", err);
});

client.on("close", () => {
  console.log("服务端断开连接");
});
