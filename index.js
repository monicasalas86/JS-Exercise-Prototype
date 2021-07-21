/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
 Person.prototype.eat = function(edible){
   if(this.stomach.length < 10){
     this.stomach.push(edible);
   }
 }
Person.prototype.poop = function(){
  this.stomach = [];
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}
const kevin = new Person('Kevin', 26);
const leo = new Person('Leo', 18);

kevin.eat('🍕');
kevin.eat('🌮');
kevin.eat('🍱');
kevin.eat('🍝');
kevin.eat('🥪');

console.log(kevin.stomach);

kevin.poop();

console.log(kevin.stomach);

console.log(kevin.toString());



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
}
Car.prototype.drive = function(distance){
  const miles = this.tank + this.milesPerGallon;
  if(distance <= miles){
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
  }else{
    this.tank = 0;
    this.odometer = this.odometer + miles;
    return `I ran out of fuel at ${this.odometer}`;
  }
}
const ford = new Car('ford', 20);

ford.fill(20);

console.log('task 2', ford.drive(140));
console.log('task 2', ford.tank);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}
const moni = new Baby('Moni', 2, 'ball');

console.log('task 3', moni.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window binding - when 'this' is not defined, the window will be returned (the global object in node) or it will return undefined in strict mode. This is an error and we don't want it

  2. Implicit binding - happens to objects with methods. When we invoke the function, whatever is left of the dot is when 'this' is refering to 

  3. Explicit binding - happens when we tell a function what 'this' should be using .call .apply or .bind.
  For .call - the function is immediately invoked and we have to pass through the arguments 1 by 1.
  For .apply - will also immediately invoke the function and it will pass our items in an array.
  For .bind - we have to pass in the arguments 1 by 1, however it won't invoke a function. It returns a new function that we can invoke later

  4. New binding - happens when we invoke a function with the 'new' keyword. The 'this' keyword inside the function is bound to the new object that is being constructed. When we invoke a function as a constructor function using the 'new' keyword it points to the new object that was created.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}