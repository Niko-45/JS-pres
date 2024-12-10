# Scope, Hoisting, and Temporal Dead Zone (TDZ)

1. Scope
   - Scope determines the accessibility of variables in different parts of the code.
   - Types of Scope:
     - Global Scope: Variables declared outside any function or block are accessible everywhere.
      
       let globalVar = "I'm global";
       console.log(globalVar); // "I'm global"
       
     - Function Scope: Variables declared inside a function are only accessible within that function.
      
       function example() {
           let localVar = "I'm local";
           console.log(localVar); // "I'm local"
       }
       console.log(localVar); // ReferenceError
       
     - Block Scope: Variables declared with let or const are only accessible within the block they are defined in.
      
       {
           let blockVar = "I'm block-scoped";
           console.log(blockVar); // "I'm block-scoped"
       }
       console.log(blockVar); // ReferenceError
       
2. Hoisting
   - Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the compile phase.
   - How Hoisting Works:
     - Variable Hoisting:
       - var is hoisted and initialized to undefined.
       - let and const are hoisted but remain in the TDZ until initialized.
      
       console.log(x); // undefined
       var x = 10;

       console.log(y); // ReferenceError
       let y = 20;
       
     - Function Hoisting:
       - Function declarations are hoisted with their definitions.
       - Function expressions are hoisted as variables and behave like var.
      
       console.log(func()); // "Hello"
       function func() {
           return "Hello";
       }

       console.log(funcExp()); // TypeError
       var funcExp = function() {
           return "Hi";
       };
       
3. Temporal Dead Zone (TDZ)
   - TDZ refers to the period between the declaration of a let or const variable and its initialization, during which the variable cannot be accessed.
   - Characteristics:
     - Applies to let and const.
     - Accessing variables in TDZ throws a ReferenceError.
   - Examples:
    
     console.log(a); // ReferenceError
     let a = 10;

     const b = 20; // Valid
     console.log(b); // 20

     function test() {
         console.log(c); // ReferenceError
         let c = 30;
     }
     test();
     
   - Variables declared with let and const are hoisted but remain uninitialized in the TDZ until the execution reaches their initialization.
    
     {
         // TDZ starts here
         console.log(myVar); // ReferenceError
         let myVar = "Initialized"; // TDZ ends here
         console.log(myVar); // "Initialized"
     }
