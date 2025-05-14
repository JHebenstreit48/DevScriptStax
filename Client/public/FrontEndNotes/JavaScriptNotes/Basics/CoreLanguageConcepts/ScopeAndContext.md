## Scope and Context

---

### Overview

Understanding scope and context is essential to writing clean, predictable JavaScript code.  
While they're often confused, they refer to different parts of how JavaScript code is interpreted and executed:

✅ **Scope** is about _where variables are accessible_.  
✅ **Context** is about _what object this refers to during execution_.

---

### Scope: Where Variables Live

Scope determines the visibility and lifetime of variables.  
There are three main types of scope in JavaScript:

- **Global Scope** – Variables declared outside any function or block.  
- **Function Scope** – Variables declared within a function using var.  
- **Block Scope** – Variables declared using let or const within { }.

```javascript
let a = 1; // Global scope

function testScope() {
  let b = 2; // Function scope
  if (true) {
    let c = 3; // Block scope
    console.log(a, b, c); // ✅ All accessible here
  }
  console.log(a, b);    // ✅ 'a' and 'b' only
  // console.log(c); ❌ ReferenceError
}
```

---

### Variable Declarations and Scope

The way you declare a variable impacts how it's scoped:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Declaration</th>
      <th class="tableCellHeader">Scope</th>
      <th class="tableCellHeader">Can Be Reassigned?</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">var</span></td>
      <td class="tableCell">Function Scope</td>
      <td class="tableCell">✅ Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">let</span></td>
      <td class="tableCell">Block Scope</td>
      <td class="tableCell">✅ Yes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">const</span></td>
      <td class="tableCell">Block Scope</td>
      <td class="tableCell">❌ No</td>
    </tr>
  </tbody>
</table>

---

### Scope Chain

Inner scopes can access variables from outer scopes, but not the other way around.

```javascript
let outer = "I'm outside";

function parent() {
  let middle = "I'm inside";
  function child() {
    let inner = "I'm deepest";
    console.log(outer);  // ✅ Accessible
    console.log(middle); // ✅ Accessible
    console.log(inner);  // ✅ Accessible
  }
  child();
  // console.log(inner); ❌ ReferenceError
}
```

---

### Context: What Is this?

Context is determined by **how a function is called**, not where it's written.  
It typically refers to the object that is executing the current function.

```javascript
const person = {
  name: "Ava",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet(); // "Hi, I'm Ava"
```

---

### Changing Context with call(), apply(), and bind()

You can explicitly define context using call, apply, or bind.

```javascript
function introduce() {
  console.log("Hello, my name is " + this.name);
}

const user = { name: "Milo" };

introduce.call(user);  // "Hello, my name is Milo"
introduce.apply(user); // "Hello, my name is Milo"
const boundIntro = introduce.bind(user);
boundIntro();          // "Hello, my name is Milo"
```

---

### Context in Arrow Functions

Arrow functions do **not** bind their own this.  
Instead, they inherit it from the surrounding scope.

```javascript
const timer = {
  count: 0,
  start: function () {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

timer.start(); // <span class="emphasis">this<span> refers to 'timer', even inside the arrow function
```

---

### Scope vs Context Summary

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Concept</th>
      <th class="tableCellHeader">Refers To</th>
      <th class="tableCellHeader">Controlled By</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Scope</td>
      <td class="tableCell">Where variables can be accessed</td>
      <td class="tableCell">Where and how variables are declared</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Context</td>
      <td class="tableCell">What <span class="codeSnip">this</span> refers to</td>
      <td class="tableCell">How a function is invoked</td>
    </tr>
  </tbody>
</table>

---
