### What Are Complex (Non-Primitive) Types?

Complex types in JavaScript are built using the **object** data type.  
These types can store **collections of values** and are always passed by reference.

✅ Objects and functions are reference types.  
✅ Arrays are technically specialized objects.

---

### Main Complex Types

🔹 Object – key-value pair storage  
🔹 Array – ordered list of values  
🔹 Function – reusable block of logic with parameters and return values

---

### Examples of Complex Types

// Object  
let user = {  
  name: "Alice",  
  age: 30  
};  

// Array  
let colors = ["red", "green", "blue"];  

// Function  
function greet(name) {  
  return "Hello, " + name;  
}

---

### Why They Are Called "Reference Types"

- Complex values are **stored in memory** and referenced by their address.  
- If you assign one object to another variable, both variables point to the **same object**.

let original = { value: 10 };  
let copy = original;  
copy.value = 99;  
console.log(original.value); // 99 (because both reference the same object)

---

### How to Check Data Type

You can use the <span class="codeSnip">typeof</span> operator, but it returns "object" for **arrays** and **null**, so use safer alternatives for more precise checks.

typeof user         // "object"  
typeof colors       // "object"  
typeof greet        // "function"  
typeof null         // "object" ← historical bug

---

### Better Type Checks

✅ Check if a value is an array:

Array.isArray(colors);       // true  
Array.isArray(user);         // false

✅ Check if a value is null:

user === null;               // false  
let value = null;  
value === null;              // true

✅ Check if a value is a plain object:

typeof obj === "object" && !Array.isArray(obj) && obj !== null;

---

### Summary

✅ Complex types are reference-based and include arrays, objects, and functions.  
✅ Use <span class="codeSnip">Array.isArray()</span> to distinguish arrays.  
✅ Use strict equality for checking <span class="codeSnip">null</span>.  
✅ Functions are a type of object but have callable behavior.

---
