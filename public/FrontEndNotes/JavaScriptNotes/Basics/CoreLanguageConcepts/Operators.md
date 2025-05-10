## Operators

---

### Introduction to Operators

<span class="emphasis">Operators</span> are special symbols or keywords used to perform operations on operands (variables and values).  
In <span class="emphasis">JavaScript</span>, operators are used to assign values, compare values, perform arithmetic operations, and more.

✅ Understanding operators is essential to building logic inside your JavaScript programs.  
✅ Operators are grouped by the type of operation they perform.

---

### Types of Operators

🔹 **Arithmetic Operators** → Perform mathematical calculations.  
🔹 **Assignment Operators** → Assign values to variables.  
🔹 **Comparison Operators** → Compare two values and return a boolean result.  
🔹 **Logical Operators** → Combine multiple boolean expressions.  
🔹 **String Operators** → Concatenate (combine) text values.  
🔹 **Unary Operators** → Operate on a single operand (e.g., increment, typeof).  
🔹 **Ternary Operator** → A shorthand conditional operator.

---

### Arithmetic Operators

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">+</span></td>
      <td class="tableCell">Addition</td>
      <td class="tableCell"><span class="codeSnip">5 + 2</span> → 7</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">-</span></td>
      <td class="tableCell">Subtraction</td>
      <td class="tableCell"><span class="codeSnip">5 - 2</span> → 3</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">*</span></td>
      <td class="tableCell">Multiplication</td>
      <td class="tableCell"><span class="codeSnip">5 * 2</span> → 10</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">/</span></td>
      <td class="tableCell">Division</td>
      <td class="tableCell"><span class="codeSnip">5 / 2</span> → 2.5</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">%</span></td>
      <td class="tableCell">Modulus (remainder)</td>
      <td class="tableCell"><span class="codeSnip">5 % 2</span> → 1</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">**</span></td>
      <td class="tableCell">Exponentiation</td>
      <td class="tableCell"><span class="codeSnip">5 ** 2</span> → 25</td>
    </tr>
  </tbody>
</table>

---

### Assignment Operators

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">=</span></td>
      <td class="tableCell">Assignment</td>
      <td class="tableCell"><span class="codeSnip">x = 5</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">+=</span></td>
      <td class="tableCell">Addition Assignment</td>
      <td class="tableCell"><span class="codeSnip">x += 2</span> (equivalent to <span class="codeSnip">x = x + 2</span>)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">-=</span></td>
      <td class="tableCell">Subtraction Assignment</td>
      <td class="tableCell"><span class="codeSnip">x -= 2</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">*=</span></td>
      <td class="tableCell">Multiplication Assignment</td>
      <td class="tableCell"><span class="codeSnip">x *= 2</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">/=</span></td>
      <td class="tableCell">Division Assignment</td>
      <td class="tableCell"><span class="codeSnip">x /= 2</span></td>
    </tr>
  </tbody>
</table>

---

### Comparison Operators

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">==</span></td>
      <td class="tableCell">Equal to (type conversion allowed)</td>
      <td class="tableCell"><span class="codeSnip">5 == "5"</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">===</span></td>
      <td class="tableCell">Strict equal to (no type conversion)</td>
      <td class="tableCell"><span class="codeSnip">5 === "5"</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!=</span></td>
      <td class="tableCell">Not equal to</td>
      <td class="tableCell"><span class="codeSnip">5 != "5"</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!==</span></td>
      <td class="tableCell">Strict not equal to</td>
      <td class="tableCell"><span class="codeSnip">5 !== "5"</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">></span></td>
      <td class="tableCell">Greater than</td>
      <td class="tableCell"><span class="codeSnip">5 > 2</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip"><</span></td>
      <td class="tableCell">Less than</td>
      <td class="tableCell"><span class="codeSnip">5 < 2</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">>=</span></td>
      <td class="tableCell">Greater than or equal to</td>
      <td class="tableCell"><span class="codeSnip">5 >= 5</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip"><=</span></td>
      <td class="tableCell">Less than or equal to</td>
      <td class="tableCell"><span class="codeSnip">5 <= 2</span> → false</td>
    </tr>
  </tbody>
</table>

---

### Logical Operators

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">&&</span></td>
      <td class="tableCell">Logical AND</td>
      <td class="tableCell"><span class="codeSnip">true && false</span> → false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">||</span></td>
      <td class="tableCell">Logical OR</td>
      <td class="tableCell"><span class="codeSnip">true || false</span> → true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!</span></td>
      <td class="tableCell">Logical NOT</td>
      <td class="tableCell"><span class="codeSnip">!true</span> → false</td>
    </tr>
  </tbody>
</table>

---

### String Operators

- The <span class="codeSnip">+</span> operator can also concatenate strings.

```javascript
let firstName = "Alice";
let lastName = "Johnson";
let fullName = firstName + " " + lastName; // "Alice Johnson"
```
---

### Unary Operators

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">++</span></td>
      <td class="tableCell">Increment (adds 1)</td>
      <td class="tableCell"><span class="codeSnip">x++</span> or <span class="codeSnip">++x</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">--</span></td>
      <td class="tableCell">Decrement (subtracts 1)</td>
      <td class="tableCell"><span class="codeSnip">x--</span> or <span class="codeSnip">--x</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">typeof</span></td>
      <td class="tableCell">Returns the type of a variable</td>
      <td class="tableCell"><span class="codeSnip">typeof 5</span> → "number"</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">!</span></td>
      <td class="tableCell">Logical NOT</td>
      <td class="tableCell"><span class="codeSnip">!true</span> → false</td>
    </tr>
  </tbody>
</table>

---

### Ternary Operator

The <span class="emphasis">ternary operator</span> is a concise way to write conditional logic in JavaScript.  
It allows developers to evaluate a condition and return one value if the condition is <span class="secondEmphasis">true</span>, and a different value if it is <span class="secondEmphasis">false</span>.

#### Explanation:

The ternary operator simplifies the structure of conditional logic, making it easier to write and read.  
It is especially useful in dynamic rendering, conditional assignments, or inline logic within expressions.

```javascript
let age = 20;  
let canVote = (age >= 18) ? "Yes" : "No";  
console.log(canVote); // "Yes"
```

#### Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

### Spread Operator

The <span class="codeSnip">...</span> spread operator is used to "unpack" elements from arrays or properties from objects into individual items.  
It’s commonly used to **copy**, **merge**, or **expand** data structures.

---

#### Spread with Arrays

Use the spread operator to clone or merge arrays.

```javascript
let colors = ["red", "green"];
let extendedColors = [...colors, "blue"];

console.log(extendedColors); // ["red", "green", "blue"]
```

✅ You can also merge multiple arrays:

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

---

#### Spread with Objects

Copy or merge properties into a new object.

```javascript
let user = { name: "Alice", age: 30 };
let updatedUser = { ...user, age: 31, city: "NYC" };

console.log(updatedUser);
// { name: "Alice", age: 31, city: "NYC" }
```

⚠️ Later properties override earlier ones if keys conflict.

---

#### Spread vs. Rest

- <span class="emphasis">Spread</span> breaks things apart  
- <span class="emphasis">Rest</span> (also <span class="codeSnip">...</span>) collects them

Spread:

```javascript
let nums = [1, 2, 3];
console.log(...nums); // 1 2 3
```

Rest:

```javascript
function sum(...values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}
```

---

### Summary

✅ Spread operator expands arrays or objects  
✅ Useful for copying and merging  
✅ Be mindful of property overwrites when merging objects  
✅ Same syntax (<span class="codeSnip">...</span>) is used for both spread and rest, but the context determines the behavior

### Best Practices with Operators

✅ Prefer <span class="codeSnip">===</span> and <span class="codeSnip">!==</span> over <span class="codeSnip">==</span> and <span class="codeSnip">!=</span> to avoid unexpected type coercion.  
✅ Always group complex logic with parentheses <span class="codeSnip">()</span> to clarify evaluation order.  
✅ Use template literals <span class="codeSnip">`Hello, ${name}`</span> instead of <span class="codeSnip">+</span> string concatenation where possible for better readability.  
✅ Keep operator precedence in mind — for example, multiplication <span class="codeSnip">*</span> happens before addition <span class="codeSnip">+</span>.

---