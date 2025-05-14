## Conditional Statements

---

### Introduction to Conditionals

<span class="emphasis">Conditional statements</span> allow a JavaScript program to make decisions and execute code blocks based on whether a condition evaluates as <span class="secondEmphasis">true</span> or <span class="secondEmphasis">false</span>.

✅ Think of them as “checkpoints” that control the flow of logic.  
✅ These are essential for branching logic — like what to show or do depending on user input, values, or events.

---

### The if Statement

The <span class="codeSnip">if</span> statement is the most basic form of conditional logic.

```javascript
let age = 18;

if (age >= 18) {
  console.log("You can vote.");
}
```

The condition inside the parentheses is evaluated — if it's true, the code inside the curly braces runs.

---

### The else Statement

You can pair an <span class="codeSnip">else</span> with an <span class="codeSnip">if</span> to define an alternate block of code.

```javascript
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

---

### The else if Clause

Use <span class="codeSnip">else if</span> to check multiple conditions in sequence.

```javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
```

✅ JavaScript evaluates each condition in order and stops at the first match.

---

### Comparison Operators in Conditionals

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Meaning</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">==</span></td>
      <td class="tableCell">Equal to (loose)</td>
      <td class="tableCell"><span class="codeSnip">"5" == 5</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">===</span></td>
      <td class="tableCell">Equal to (strict)</td>
      <td class="tableCell"><span class="codeSnip">"5" === 5</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!=</span></td>
      <td class="tableCell">Not equal to (loose)</td>
      <td class="tableCell"><span class="codeSnip">5 != "5"</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!==</span></td>
      <td class="tableCell">Not equal to (strict)</td>
      <td class="tableCell"><span class="codeSnip">5 !== "5"</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">></span></td>
      <td class="tableCell">Greater than</td>
      <td class="tableCell"><span class="codeSnip">7 > 3</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip"><</span></td>
      <td class="tableCell">Less than</td>
      <td class="tableCell"><span class="codeSnip">3 < 7</span> → true</td>
    </tr>
  </tbody>
</table>

---

### Logical Operators in Conditionals

You can combine multiple conditions using logical operators.

```javascript
let age = 25;
let hasID = true;

if (age >= 21 && hasID) {
  console.log("Access granted.");
}
```

✅ Use <span class="codeSnip">&&</span> for AND, <span class="codeSnip">||</span> for OR, and <span class="codeSnip">!</span> for NOT.

---

### Conditional Logic with the Ternary Operator

The ternary operator is a concise way to write conditionals in a single line.

```javascript
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

It follows the structure:

<span class="codeSnip">condition ? valueIfTrue : valueIfFalse;</span>

✅ This is useful for quick logic inside variables, return statements, or inline rendering.

---

### Best Practices

✅ Favor <span class="codeSnip">===</span> over <span class="codeSnip">==</span> to avoid unexpected type coercion.  
✅ Use braces <span class="codeSnip">{}</span> even for single-line <span class="codeSnip">if</span> blocks for clarity.  
✅ Group complex conditions with parentheses to clarify evaluation order.  
✅ Don’t nest too many <span class="codeSnip">else if</span> blocks — use <span class="codeSnip">switch</span> or refactor if needed.

---
