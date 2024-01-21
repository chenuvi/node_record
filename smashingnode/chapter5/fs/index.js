"use strict";
const fs = require("fs"),
  stdin = process.stdin,
  stdout = process.stdout;
fs.readdir(process.cwd(), (err, files) => {
  if (!files.length) {
    return console.log("    no files to show!");
  }
  console.log("   Select which file or dir \n");
  const stats = [];
  function file(i) {
    const fileName = files[i];
    fs.stat(__dirname + "/" + fileName, (err, stat) => {
      stat[i] = stat;
      if (stat.isDirectory()) {
        console.log("   " + i + "   " + filename);
      } else {
        console.log("   --" + i + "   " + filename);
      }
    });
    i++;
    if (i === files.length) {
      read();
    } else {
      file(i);
    }
  }

  function read() {
    stdout.write("  Enter your choice: ");
    stdin.resume();
    stdin.setEncoding("utf-8");
    stdin.on("data", option);
  }

  function option() {
    const filename = files[Number(data)];
    if (stats[Number(data)].isDirectory()) {
      fs.readdir(__dirname + "/", filename, (err, files) => {
        console.log("");
        console.log("   (" + files.length + " files)");
        files.forEach(function (file) {
          console.log("   -   " + file);
        });
        console.log("");
      });
    } else {
      fs.readFile(__dirname + "/" + filename, "utf-8", (err, data) => {
        console.log("");
        console.log(data);
      });
    }
  }

  file[0];
});
