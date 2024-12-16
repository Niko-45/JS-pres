JavaScript String Methods

This document provides detailed information about commonly used JavaScript string methods. These methods enable you to manipulate and work with string values in various ways.

###1. split()

Usage:
```
const d = "Hello World";
console.log(d.split(" ")); // Output: ["Hello", "World"]
```
Description:

Splits a string into an array of substrings using a specified delimiter.

The delimiter can be a string or a regular expression.

If the delimiter is an empty string (""), it splits the string into individual characters.

###2. toUpperCase()

Usage:
```
const d = "hello world";
console.log(d.toUpperCase()); // Output: "HELLO WORLD"
```
Description:

Converts all characters of a string to uppercase.

Does not modify the original string but returns a new one.

###3. toLowerCase()

Usage:
```
const d = "HELLO WORLD";
console.log(d.toLowerCase()); // Output: "hello world"
```
Description:

Converts all characters of a string to lowercase.

Returns a new string with lowercase characters.

###4. slice()

Usage:
```
const d = "Hello World";
console.log(d.slice(0, -1)); // Output: "Hello Worl"
```
Description:

Extracts a section of a string and returns it as a new string.

Takes two arguments: start and end (optional).

If end is negative, it is counted from the end of the string.

###5. substring()

Usage:
```
const d = "Hello World";
console.log(d.substring(0, 6)); // Output: "Hello "
```

Description:

Returns a part of the string between start and end (not including end).

It does not support negative indices.

If start is greater than end, they are swapped.

###6. replace()

Usage:
```
const d = "Hello Alisher";
console.log(d.replace("Alisher", "Abubakr")); // Output: "Hello Abubakr"
```
Description:

Replaces the first occurrence of a specified value (string or regex) with another string.

Does not modify the original string.

###7. indexOf()

Usage:
```
const b = "Hello World";
console.log(b.indexOf("l")); // Output: 2
```
Description:

Returns the index of the first occurrence of the specified character or substring.

If the character is not found, it returns -1.

###8. includes()

Usage:
```
const d = "Hello Ali";
console.log(d.includes("Ali")); // Output: true
```
Description:

Checks if a string contains a specified value.

Returns true if the value is found; otherwise, false.

###9. trim()

Usage:
```
const c = "   Hello World   ";
console.log(c.trim()); // Output: "Hello World"
```
Description:

Removes whitespace from both sides of a string.

Useful for cleaning up input from users.

###10. concat()

Usage:
```
const b = "Hello";
const c = "World";
console.log(b.concat(" ", c)); // Output: "Hello World"
```
Description:

Combines two or more strings and returns a new string.

Does not modify the original strings.

###11. toString()

Usage:
```
const a = 123;
console.log(typeof a.toString()); // Output: "string"
```
Description:

Converts a number, array, or other data types to a string.

Often used to convert numbers or objects to strings.

###12. charAt()

Usage:
```
const b = "Hello";
console.log(b.charAt(4)); // Output: "o"
```
Description:

Returns the character at the specified index in the string.

If the index is out of range, it returns an empty string.

###13. at()

Usage:
```
const b = "Hello";
console.log(b.at(-1)); // Output: "o"
```
Description:

Returns the character at the specified index, similar to charAt().

Supports negative indices, which count from the end of the string.

####Conclusion

These methods allow for versatile string manipulation in JavaScript. They are essential for working with and transforming strings. Understanding when and how to use these methods will make your code cleaner, more efficient, and more readable.

