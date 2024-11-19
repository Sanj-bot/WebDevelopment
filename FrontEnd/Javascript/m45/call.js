class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encrpytPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encrpytPassword());
console.log(chai.changeUsername());

// Behind the scene
// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototpye.encrpytPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototpye.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };
