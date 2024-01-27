const net = require("net");

const client = net.createConnection({
  port: 1234,
  host: "127.0.0.1",
});

const dataArr = [
  "水冷了呢1",
  "水冷了呢2",
  "水冷了呢3",
  "水冷了呢4",
  "水冷了呢5",
];

client.on("connect", () => {
  dataArr.forEach((val, index) => {
    (function () {
      setTimeout(() => {
        client.write(val);
      }, 1000 * index + 1);
    })();
  });
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
