# JavaScript Overview

## Console Tab
The **Console tab** in a browser's developer tools is used to:
- Debug JavaScript code.
- Execute JavaScript directly.
- Display error messages, warnings, and logs.

## Common Commands:
- `console.log()`: Logs information to the console.
- `console.error()`: Displays an error message.
- `console.warn()`: Displays a warning message.
- `console.table()`: Displays data in a tabular format.

---

## Variables
Variables are used to store data in JavaScript. There are three types:

## `var`
- **Function-scoped**.
- Can be **redeclared** and **updated**.
- Hoisted to the top of the function or global scope.

## javascript
###### var name = "John";
###### name = "Doe"; // Allowed

## let
###### Block-scoped.
###### Cannot be redeclared in the same scope, but can be updated.
###### let age = 25;
###### age = 26; // Allowed

## const
###### Block-scoped.
###### Cannot be redeclared or updated.
###### Used for values that should not be reassigned.
###### const pi = 3.14;
###### // pi = 3.15; // Error

## Objects
###### An object is a collection of key-value pairs.
###### let person = {
###### name: "Alice",
 ###### age: 30,
 ###### isStudent: false
###### };

## Primitive Data Types
###### Number
###### Represents numerical values.
###### let score = 42;

## String
###### Represents text enclosed in quotes.
###### let greeting = "Hello, World!";

## Boolean
###### Represents true or false.
###### let isActive = true;

## Undefined
###### A variable that is declared but not assigned a value.
###### let unassigned;

## Null
###### Represents an intentional absence of value.
###### let emptyValue = null;

## NaN (Not-a-Number)
###### Represents an invalid number result.
###### let result = "abc" / 2; // NaN

## Type Conversion
###### Implicit Conversion
###### JavaScript automatically converts types.
###### let sum = "5" + 5; // "55" (string)

## Explicit Conversion
###### Manually convert types using functions.
###### let num = Number("123"); // 123 (number)
###### let str = String(123);   // "123" (string)

## Operators
###### Arithmetic Operators
###### +, -, *, /, %
###### let sum = 5 + 10;

## Comparison Operators
###### ==, ===, !=, !==, >, <, >=, <=
###### let isEqual = 5 === "5"; // false

## Logical Operators
###### &&, ||, !
###### let result = true && false; // false

## Control Flow
###### JavaScript provides structures to control the flow of the program.
###### If...else
###### let x = 10;
###### if (x > 5) {
######    console.log("Greater than 5");
###### } else {
###### console.log("Smaller than 5");
###### console.log("Less than or equal to 5");
###### }
