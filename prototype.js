// Creating a constructor function (a function used to create objects)
// In JavaScript, the prototype is an important concept related to objects and inheritance.Every object in JavaScript has a prototype, which is an object itself.It allows objects to inherit properties and methods from other objects.The prototype forms the basis for implementing inheritance in JavaScript.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of the Person object
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Accessing the method from the prototype
person1.sayHello(); // Output: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // Output: "Hello, my name is Bob and I am 25 years old."

