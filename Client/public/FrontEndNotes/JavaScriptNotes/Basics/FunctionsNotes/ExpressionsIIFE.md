## Function Expressions & IIFE

---

### What Is a Function Expression?

A <span class="emphasis">function expression</span> is when you assign an anonymous or named function to a variable.

```javascript
const greet = function(name) {
  console.log("Hello " + name);
};

greet("Alice"); // Output: Hello Alice
```

✅ Unlike a function declaration, a function expression is **not hoisted**, so it must be defined before use.

---

### Expressions vs Declarations

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Aspect</th>
      <th class="tableCellHeader">Function Declaration</th>
      <th class="tableCellHeader">Function Expression</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Hoisting</td>
      <td class="tableCell">Hoisted</td>
      <td class="tableCell">Not hoisted</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Syntax</td>
      <td class="tableCell">function greet() {}</td>
      <td class="tableCell">const greet = function() {}</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Can be anonymous?</td>
      <td class="tableCell">No</td>
      <td class="tableCell">Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common usage</td>
      <td class="tableCell">Standalone logic</td>
      <td class="tableCell">Callbacks, closures</td>
    </tr>
  </tbody>
</table>

---

### Calling vs Referencing (Reminder)

Using parentheses after a function name invokes (calls) the function.  
Leaving off parentheses simply references the function.

```javascript
greet("Alice"); // ✅ Call the function and pass "Alice"
greet;          // ❌ Just a reference, no execution
```

---

### IIFE: Immediately Invoked Function Expression

An <span class="emphasis">IIFE</span> is a function that is defined and then immediately called — often used for encapsulating logic or avoiding global variables.

```javascript
(function(name) {
  console.log("Hello " + name);
})("Alice");
```

✅ The outer parentheses wrap the function definition.  
✅ The second pair of parentheses invokes the function with arguments immediately.

---

### Why Use an IIFE?

- ✅ Create a private scope to prevent variable collisions  
- ✅ Immediately run setup logic when a file loads  
- ✅ Common in module patterns before ES6

---

### Practical Example

Suppose you want a value to be calculated without leaving any variables behind:

```javascript
(function() {
  const secret = "Hidden";
  console.log("This runs once!");
})();
```

// secret is not accessible outside this function

✅ This pattern keeps your logic isolated and avoids polluting the global scope.

---

### Summary

✅ A <span class="emphasis">function expression</span> defines a function and stores it in a variable.  
✅ Function expressions are **not hoisted**.  
✅ An <span class="emphasis">IIFE</span> is a function that runs immediately after being defined.  
✅ IIFEs are useful for isolating logic and executing setup code immediately.

---
