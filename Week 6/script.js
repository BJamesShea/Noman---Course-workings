// class Student {
//   // contains data and functions
//   constructor(f, l, a) {
//     this.firstName = f;
//     this.lastName = l;
//     this.age = a;
//   }

//   getName() {
//     return `First Name:$(this.firstName), last Name:$(this.lastName), Age:$(this.age)`;
//   }
// }

// let std1 = new Student("Chris", "Morris", 20);
// std1.firstName = "Alan";

// console.log(getName);

// June 4

// Write a class Person that has four variables, name, age, phone, email
// 3 member functions/methods, one "set values()"for setting up the values for an object
// One "getName()" for getting the name in a particular string format, like "Name: xxx, Age: xx, Phone: xxx xxx xxxx, emaiL; xxxxxxxx "
// One " setEmail()" for updating the email of any particular user - just email

// class Person {
//   name;
//   age;
//   phone;
//   email;

//   setName(nameString) {
//     this.name = nameString;
//   }
//   setAge(ageString) {
//     this.age = ageString;
//   }
//   setPhone(phoneString) {
//     this.phone = phoneString;
//   }

//   getPersonalInfo() {
//     return `This is ${this.name}, ${this.age} years old, phone number: ${this.phone}, email: ${this.email}`;
//   }

//   updateEmail(emailString) {
//     this.email = emailString;
//   }
// }

// let getPersonInfo = ("Brandon", 29, 709, "gg@gmail");

// console.log(getPersonInfo);

class Person {
  setValues(n, a, p, e) {
    this.name = n;
    this.age = a;
    this.phone = p;
    this.email = e;
  }

  getName() {
    return `Name:${this.name}, Age:${this.age}, Phone:${this.phone}, Email:${this.email}`;
  }

  setEmail(x) {
    this.email = x;
  }
}
