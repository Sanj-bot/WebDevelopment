const user = {
  username: "Sanjay",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("User Details: ");
    console.log(user.username);
  },
};
console.log(user.username);
user.getUserDetails();
