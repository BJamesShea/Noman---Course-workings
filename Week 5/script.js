let myArr = [10, 23, 1, 2];

console.log(myArr[0]);

let obj2 = { course: "JavaScript", college: "Keyin", semester: "two" };

// // Array notation
// console.log(obj2["course"]); // JavaScript
// console.log(obj2["college"]);
// console.log(obj2["Semester"]);

// // dot notation

// console.log(obj2.course);
// console.log(obj2.college);
// console.log(obj2.semester);

// console.log(obj2);

// Position of keyin college on map

// let lat = 43.1234;
// let long = -80.1234;

// let keyin = [43.1234, -80.1234];

// console.log(keyin[0], keyin[1]); // this sucks

// let keyin1 = { lat: 43.1234, lng: -80.1234 };

// console.log(keyin1.lng);

// let positions = [
//   { lat: 43.1234, lng: -80.1234 },
//   { lat: 32.1224, lng: -45.453 },
//   { lat: 36.1224, lng: -12.453 },
//   { lat: 32.1224, lng: -46.453 },
//   { lat: 35.1224, lng: -80.453 },
//   { lat: 30.1224, lng: -32.453 },
// ];

// console.log(positions[0].lat);

// positions.forEach(function (value) {
//   console.log(value.lng);
// });

let user = {
  firstName: "Alan",
  lastName: "Smith",
  email: "Alan@gmai.com",
  loggedIn: false,
  level: 3,
};

// function login(user) {
//   user.loggedIn = true;
// }

// console.log(user);
// login(user);
// console.log(user);

let users = [
  {
    firstName: "dylan",
    lastName: "dunne",
    email: "Alan@gmai.com",
    loggedIn: false,
    level: 3,
  },
  {
    firstName: "pink",
    lastName: "guy",
    email: "dylan@gmai.com",
    loggedIn: false,
    level: 3,
  },
  {
    firstName: "Alan",
    lastName: "Smith",
    email: "cddd@gmai.com",
    loggedIn: false,
    level: 3,
  },
];

// // users.forEach(function (user) {
// //   console.log(user.email);
// // });

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].email);
// }

// let user2 = {
//   firstName: "Alan",
//   lastName: "Smith",
//   loggedIn: false,
//   age: 20,

//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
//   hobbies: ["reading", "cycling"],
//   pref: {
//     color: "red",
//     model: "Toyota",
//   },
// };

// console.log(user2);
// user2.login();
// console.log(user2);
// user2.logout();
// console.log(user2);

// Prototype function: That can be used to create objects rather than writing code for each object separately we write a prototype function and use it to create as many objects
// It's name starts with capital letter

function User(f, l, a) {
  this.firstName = f;
  this.lastName = 1;
  this.age = a;
  this.loggedIn = true;
  this.program = "Software";
  this.college = "Keyin";
  this.login = function () {
    this.loggedIn = true;
  };
  this.logout = function () {
    this.loggedIn = false;
  };
}

let user1 = new User("Alan", "Snith", 20);
console.log(user1);
let user2 = new User("Dylan", "Doyle", 97);
console.log(user2);
let user3 = new User("Christina", "Lee", 23);
