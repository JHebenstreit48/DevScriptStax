### What Are Template Literals?

<span class="emphasis">Template literals</span> are a modern way to create strings in JavaScript.  
They use **backtick** characters instead of quotes and allow **embedded expressions**, **multiline strings**, and **string interpolation**.

✅ Introduced in ES6  
✅ Useful for cleaner string formatting  
✅ Reduces the need for manual concatenation with <span class="codeSnip">+</span>

---

### Syntax

Use backticks <span class="codeSnip">` `</span> to define a template literal.  
Insert variables or expressions using <span class="codeSnip">${}</span>.

let name = "Alice";  
let greeting = `Hello, ${name}!`;  
console.log(greeting); // "Hello, Alice!"

---

### Multiline Strings

Template literals preserve line breaks automatically.

let message = `This is line one.  
This is line two.`;  

console.log(message);

// Output:
// This is line one.
// This is line two.

---

### Embedding Expressions

You can insert any JavaScript expression inside <span class="codeSnip">${}</span>.

let a = 5;  
let b = 10;  
let result = `The sum is ${a + b}`;  
console.log(result); // "The sum is 15"

---

### Comparison to Traditional Concatenation

// Traditional concatenation  
let oldWay = "Hello, " + name + "!";  

// Template literal  
let newWay = `Hello, ${name}!`;

✅ Template literals are cleaner, easier to read, and more maintainable.

---

### Summary

✅ Use backticks <span class="codeSnip">` `</span> instead of quotes.  
✅ Insert variables or expressions with <span class="codeSnip">${}</span>.  
✅ Great for multiline output and dynamic content.  
✅ Preferred over string concatenation in modern JavaScript.

---
