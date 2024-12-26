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
console.log(person.name); // "John"
Bracket Notation:
console.log(person["name"]); // "John"
Adding or Modifying Properties
You can add new properties or modify existing ones:
```
```javascript
person.gender = "male";
person.age = 31;
Deleting Properties
You can remove properties using the delete operator:
```
```javascript
delete person.age;
Object Methods
Methods are functions stored as object properties:
```
```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
2. Using Object.keys()
Gets an array of property names:
```
```javascript
console.log(Object.keys(person));
3. Using Object.values()
Gets an array of property values:
```
```javascript
console.log(Object.values(person));
4. Using Object.entries()
Gets an array of key-value pairs:
```
```javascript
console.log(Object.entries(person));
Other Key Features
1. Prototype and Inheritance
Objects can inherit properties and methods from their prototype:
```
```javascript
console.log(person.toString()); // Inherited from Object.prototype
2. this Keyword
Inside a method, this refers to the object the method belongs to:
```
```javascript
const car = {
  brand: "Toyota",
  showBrand: function () {
    console.log(this.brand);
  },
};
car.showBrand(); // "Toyota"
```
console.log(person.hasOwnProperty("name")); // true
Objects are a fundamental concept in JavaScript, enabling you to build complex data structures and encapsulate behavior efficiently.
```
