📚 JavaScript: Array Destructuring, Spread, and Rest
🔥 1. Array Destructuring
Array destructuring allows you to unpack values from arrays into distinct variables.

🔹 Syntax
```javascript
const [var1, var2, ...rest] = array;
🔹 Example 1: Basic Destructuring
javascript
const fruits = ['Apple', 'Banana', 'Mango'];

const [first, second, third] = fruits;

console.log(first);  // "Apple"
console.log(second); // "Banana"
console.log(third);  // "Mango"
```
🔹 Example 2: Skipping Items
```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, , third] = numbers;

console.log(first);  // 1
console.log(third);  // 3
```
🔹 Example 3: Using Default Values
```javascript
const colors = ['Red'];

const [primary, secondary = 'Blue'] = colors;

console.log(primary);   // "Red"
console.log(secondary); // "Blue"
```
🔹 Example 4: Swapping Variables
```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```
✨ 2. Spread Operator (...)
The spread operator allows you to expand elements of an array (or object) into individual elements.

🔹 Syntax
```javascript
const newArray = [...array];
```
🔹 Example 1: Cloning an Array
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]
💡 Note: This creates a shallow copy of the array.
```
🔹 Example 2: Merging Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```
🔹 Example 3: Spread in Function Arguments
```javascript
const numbers = [10, 20, 30];

const maxNum = Math.max(...numbers);
console.log(maxNum); // 30
```
🌟 3. Rest Operator (...)
The rest operator collects multiple elements into a single array.

🔹 Syntax
```javascript
const [first, ...rest] = array;
```
🔹 Example 1: Collecting the Rest of the Elements
```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```
