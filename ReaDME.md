Creating Objects
1. Object Literal Syntax
The simplest way to create an object:

```javascript
Copy code
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};
```
2. Using new Object()
A less common way:

```javascript
Copy code
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function () {
  console.log("Hello!");
};
```
3. Using a Constructor Function
Useful for creating multiple objects with the same structure:

```javascript
Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello!");
  };
}

const person1 = new Person("Alice", 25);
```
4. Using ES6 Classes
A modern and preferred way to create objects:

```javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello!");
  }
}
const person1 = new Person("Alice", 25);
Accessing Object Properties
You can access object properties in two ways:
```
Dot Notation:

```javascript
Copy code
console.log(person.name); // "John"
Bracket Notation:
javascript
Copy code
console.log(person["name"]); // "John"
Adding or Modifying Properties
You can add new properties or modify existing ones:
```
```javascript
Copy code
person.gender = "male";
person.age = 31;
Deleting Properties
You can remove properties using the delete operator:
```
```javascript
Copy code
delete person.age;
Object Methods
Methods are functions stored as object properties:
```
```javascript
Copy code
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator.add(2, 3)); // 5
Iterating Over Objects
1. Using for...in
Loops through an object's enumerable properties:
```
```javascript
Copy code
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
2. Using Object.keys()
Gets an array of property names:
```
```javascript
Copy code
console.log(Object.keys(person));
3. Using Object.values()
Gets an array of property values:
```
```javascript
Copy code
console.log(Object.values(person));
4. Using Object.entries()
Gets an array of key-value pairs:
```
```javascript
Copy code
console.log(Object.entries(person));
Other Key Features
1. Prototype and Inheritance
Objects can inherit properties and methods from their prototype:
```
```javascript
```Copy code
console.log(person.toString()); // Inherited from Object.prototype
2. this Keyword
Inside a method, this refers to the object the method belongs to:
```
```javascript
Copy code
const car = {
  brand: "Toyota",
  showBrand: function () {
    console.log(this.brand);
  },
};
car.showBrand(); // "Toyota"
```
3. Object.freeze() and Object.seal()
```Object.freeze(obj): Makes the object immutable.
Object.seal(obj): Prevents adding or removing properties but allows modification of existing ones.
Common Built-in Object Methods
Object.assign(): Copies properties from one object to another.
```
```javascript
Copy code
const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }
Object.create(): Creates a new object with a specified prototype.
```
```javascript
Copy code
const prototype = { greet() { console.log("Hi!"); } };
const obj = Object.create(prototype);
obj.greet(); // "Hi!"
Object.hasOwnProperty(): Checks if a property exists on the object itself (not inherited).
```
```javascript

console.log(person.hasOwnProperty("name")); // true
Objects are a fundamental concept in JavaScript, enabling you to build complex data structures and encapsulate behavior efficiently.
```