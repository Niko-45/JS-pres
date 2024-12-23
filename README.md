Callbacks in Programming
Introduction
Callbacks are a fundamental concept in programming used to enable asynchronous behavior or extend the functionality of a program. A callback is essentially a function that is passed as an argument to another function and is executed at a later time, typically in response to a certain event or condition.

Why Use Callbacks?
Callbacks are widely used in modern programming for:

Asynchronous Programming: To prevent blocking operations, especially in I/O-heavy tasks like API calls or file reading.
Event-Driven Programming: To respond to user inputs or system-generated events.
Custom Behavior: To allow users to customize the behavior of a function or library.
How Callbacks Work
Key Components:
Callback Function: A function passed as an argument.
Caller Function: The function that accepts the callback and executes it when appropriate.
Example:
Synchronous Callback (JavaScript):

javascript
```
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
Output:
```
```
Hello, Alice
Goodbye!
Asynchronous Callback (Node.js):
```
javascript
```
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```
