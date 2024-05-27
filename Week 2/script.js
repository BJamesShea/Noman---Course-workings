// var x;
// x = 20;
// console.log(x);

// x = "Alan";
// console.log(x);

// x = true;
// console.log(x);

// var y = 10;
// console.log(y++); // 10   11
// console.log(++y); // 12
// console.log(--y); // 11
// console.log(y--); // 11

// var x = 0;
// var b = [];

// b[x++] = 10; // b[0]? b[1]?
// b[x] = 20;
// console.log(b);

// let x = "10";
// if (x == 10) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// let y = "10";
// if (y === 10) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// Always try to use === in place of == to save yourself coercion!

// let age = 20;

// if (age > 18) {
//   console.log("Welcome");
// } else {
//   console.log("Undeage");
// }

// age > 18 ? console.log("Welcome") : console.log("Underage");

// let message = age > 18 ? "Welcome" : "Underage";
// console.log(message);

// typeof

// var x = 10;
// console.log(typeof x);

// var x = "Alan";
// console.log(typeof x);

// // for (var i = 0; i < 1000; i++) {
// //   console.log("I will never do it again");
// // }

// // for (var i = 1; i <= 10; i++) {
// //   console.log("Hello");
// // }

// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (var i = 1; i < 10; i += 2) {
//   console.log(i);
// }

// function declarations:

// function add(a, b) {
//   return a + b;
// }

// // add(3,4);  //invoking or calling the function
// console.log(add(3, 4));

// function add(a, b) {
//   console.log("Internal", a + b);
//   return a;
// }

// let add = function (a, b) {
//   return a + b;
// };

// console.log(add(3, 5));

// let noop = () => {};
// let square = (n) => {
//   return n * n;
// };

// let add = (a, b) => {
//   return a + b;
// };

// let add1 = (a, b) => a + b;

// let square = (n) => n * n;

// function myLog(a) {
//   console.log(a);
// }

// myLog("Correct");
// myLog("Also", "Correct"); // will only print first argument
// myLog();

// function myLog(a) {
//   console.log(arguments.length, a, arguments[1]);
// }

// // myLog("Correct");
// // myLog("also", "correct");

// myLog("this", "is", "some", "argument");

function sum() {
  const count = arguments.length;
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function add(a, b) {
  return a + b;
}
