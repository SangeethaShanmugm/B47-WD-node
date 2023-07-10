const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart 🥳!!!";

fs.writeFile("./awesome.ppt", quote, (err) => {
  console.log("Completed Writing awesome.html");
});

const quote2 = "Live more, worry less 🥳🥳🥳";
//Task- 1
// Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed Writing text-${i}.html`);
  });
}


//Task-2
// node fs.js 20 -> 20 files to be created | note-1.txt, note-2.txt...note-20.txt