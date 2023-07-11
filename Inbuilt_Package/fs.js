const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart 🥳!!!";

// fs.writeFile("./awesome.ppt", quote, (err) => {
//   console.log("Completed Writing awesome.html");
// });

const quote2 = "Live more, worry less 🥳🥳🥳";
//Task- 1
// Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed Writing text-${i}.html`);
//   });
// }

// break - 10 mins -> 11:55, task - 15 mins - 12:10

//Task-2
// node fs.js 20 -> 20 files to be created | note-1.txt, note-2.txt...note-20.txt

// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles);
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/note-${i}.txt`, quote2, (err) => {
//     console.log(`Completed Writing note-${i}.txt`);
//   });
// }

//read a file

// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error❌", err);
//   }
//   console.log("The content of the file is =>", data);
// });

//append the file

// const niceQuote = "\nMake everyday a little less ordinarily";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names", files);
// });

fs.readdir("./backup", (err, data) => {
  data.forEach((fileName) => {
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted successfully", fileName);
    });
  });
});

// writeFile => CallStack => WebApi(whoever finishes writing first) =>CallBack Q => CallStack

// fs.writeFile, fs.readFile, fs.appendFile - async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync - sync

//Sync

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);
for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFileSync(`./backup/note-${i}.txt`, quote2);
  console.log("Completed writing", i);
}
