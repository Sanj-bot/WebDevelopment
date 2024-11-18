const myhero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects....`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello `);
};

heroPower.hitesh();

myhero.hitesh();
myhero.heyHitesh();
heroPower.heyHitesh();
