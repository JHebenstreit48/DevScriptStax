## Arrow Functions

---

### What Are Arrow Functions?

<span class="emphasis">Arrow functions</span> are a shorter syntax for writing function expressions.  
They were introduced in <span class="emphasis">ES6</span> and are especially useful for concise callbacks and one-liners.

✅ They use the <span class="codeSnip">=></span> syntax instead of the <span class="codeSnip">function</span> keyword.  
✅ Arrow functions do not have their own <span class="codeSnip">this</span> or <span class="codeSnip">arguments</span> binding.

---

### Basic Syntax

```javascript
const greet = (name) => {
  console.log("Hello " + name);
};

greet("Alice"); // Output: Hello Alice
```

---

### Implicit Return

If the function has only one expression and no block <span class="codeSnip">{}</span>,  
it will automatically return the result of that expression.

```javascript
const square = (x) => x * x;

console.log(square(4)); // Output: 16
```

✅ You can omit <span class="codeSnip">return</span> and braces when there’s a single line.

---

### Single Parameter Shortcut

If there's only one parameter, you can also omit the parentheses.

```javascript
const double = x => x * 2;
```

✅ Parentheses are required when there are zero or more than one parameter.

---

### Multiple Parameters

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
```

---

### No Parameters

Use empty parentheses when the function doesn’t take any arguments.

```javascript
const sayHi = () => console.log("Hi!");

sayHi(); // Output: Hi!
```

---

### Arrow Functions in Array Methods

Arrow functions are commonly used as callbacks inside array methods.

```javascript
let nums = [1, 2, 3, 4];

let squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]

let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

### Arrow Functions vs Regular Functions

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Aspect</th>
      <th class="tableCellHeader">Arrow Function</th>
      <th class="tableCellHeader">Regular Function</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Syntax</td>
      <td class="tableCell">Shorter</td>
      <td class="tableCell">Longer</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Implicit return</td>
      <td class="tableCell">Yes (if one line, no braces)</td>
      <td class="tableCell">No (must use <span class="codeSnip">return</span>)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">this</span> binding</td>
      <td class="tableCell">Inherits from surrounding scope</td>
      <td class="tableCell">Gets its own <span class="codeSnip">this</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">arguments</span> object</td>
      <td class="tableCell">Unavailable</td>
      <td class="tableCell">Available</td>
    </tr>
  </tbody>
</table>

---

### When Not to Use Arrow Functions

- When you need access to <span class="codeSnip">this</span> inside a method or constructor  
- When using the <span class="codeSnip">arguments</span> object directly  
- When defining object methods that rely on their own <span class="codeSnip">this</span>

✅ In these cases, stick with regular functions.

---

### Summary

✅ Arrow functions are concise, powerful, and ideal for short callbacks.  
✅ They do not bind <span class="codeSnip">this</span> or <span class="codeSnip">arguments</span>.  
✅ Use them in array methods and short utilities.  
✅ Avoid them in constructors or methods that rely on <span class="codeSnip">this</span>.

---
