// const myhero = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spidy power is ${this.spiderman}`);
//   },
// };
// Object.prototype.hitesh = function () {
//   console.log(`hitesh is present in all objects....`);
// };

// Array.prototype.heyHitesh = function () {
//   console.log(`Hitesh says hello `);
// };

// heroPower.hitesh();

// myhero.hitesh();
// myhero.heyHitesh();
// heroPower.heyHitesh();

const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chai or code        ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"mimo".trueLength();