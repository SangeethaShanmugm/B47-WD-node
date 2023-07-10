const os = require("os"); //Inbuilt package
console.log("Free memory: ", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory: ", os.totalmem() / 1024 / 1024 / 1024);
// 1kb -> 1024 bytes => 1mb -> 1024 kb -> 1gb -> 1024 mb

console.log("version", os.version());
console.log("Platform", os.platform());
console.log("Cpus", os.cpus());
