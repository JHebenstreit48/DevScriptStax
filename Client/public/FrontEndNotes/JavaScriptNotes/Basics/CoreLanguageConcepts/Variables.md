## Variables

---

### Introduction to Variables

<span class="emphasis">Variables</span> are containers for storing data values. In <span class="emphasis">JavaScript</span>, variables are declared using <span class="codeSnip">var</span>, <span class="codeSnip">let</span>, or <span class="codeSnip">const</span>.

✅ Variables allow you to store and manipulate information in your programs.  

✅ Choosing the right keyword when declaring variables is crucial for maintaining predictable behavior.

---

### var

The original way to declare variables in JavaScript. <span class="codeSnip">var</span> declarations are **function-scoped**.  

Variables declared with <span class="codeSnip">var</span> are **hoisted** to the top of their scope but are **initialized as undefined**. Can be redeclared and reassigned.

```javascript
function exampleVar() {
  console.log(myVar); // undefined (hoisted)
  var myVar = "Hello";
  console.log(myVar); // "Hello"
}

exampleVar();
```

---

### let

Introduced in <span class="emphasis">ES6 (2015)</span> as a modern replacement for <span class="codeSnip">var</span>. 

<span class="codeSnip">let</span> declarations are <span class="emphasis">block-scoped</span> (only available within <span class="codeSnip">{}</span>).
Variables declared with <span class="codeSnip">let</span> are hoisted but not initialized.

```javascript
function exampleLet() {
  // console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  let myLet = "Hello";
  console.log(myLet); // "Hello"
}

exampleLet();
```

---

### const

Also introduced in ES6. <span class="codeSnip">const</span> is **block-scoped** like <span class="codeSnip">let</span>. Must be <span class="emphasis">initialized</span> at the time of <span class="secondEmphasis">declaration</span>.
- Cannot be reassigned to a new value.

```javascript
const greeting = "Hello";
// greeting = "Hi"; // TypeError: Assignment to constant variable
```

---

### Key Differences Between var, let, and const

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Keyword</th>
      <th class="tableCellHeader">Scope</th>
      <th class="tableCellHeader">Hoisting Behavior</th>
      <th class="tableCellHeader">Reassignment</th>
      <th class="tableCellHeader">Redeclaration</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">var</td>
      <td class="tableCell">Function scope</td>
      <td class="tableCell">Hoisted and initialized as undefined</td>
      <td class="tableCell">Allowed</td>
      <td class="tableCell">Allowed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">let</td>
      <td class="tableCell">Block scope</td>
      <td class="tableCell">Hoisted but not initialized</td>
      <td class="tableCell">Allowed</td>
      <td class="tableCell">Not allowed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">const</td>
      <td class="tableCell">Block scope</td>
      <td class="tableCell">Hoisted but not initialized</td>
      <td class="tableCell">Not allowed</td>
      <td class="tableCell">Not allowed</td>
    </tr>
  </tbody>
</table>

---

### Best Practices

✅ Use <span class="codeSnip">const</span> by default unless you know the variable needs to be reassigned.  
✅ Use <span class="codeSnip">let</span> if the value needs to change (e.g., loop counters, temporary storage).  
✅ Avoid using <span class="codeSnip">var</span> in modern JavaScript unless necessary for legacy compatibility.  
✅ Always declare variables at the top of their scope to avoid confusion with hoisting.

---
