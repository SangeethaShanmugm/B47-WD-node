console.log("Hello");

// console.log(window);
// console.log(document);

// console.log(global);

//command line argument
// console.log(process.argv);
// console.log(process.argv[1]);
// console.log(process.argv[3]);

const double = (num) => num * 2;

const [, , n] = process.argv;
console.log(double(n));
