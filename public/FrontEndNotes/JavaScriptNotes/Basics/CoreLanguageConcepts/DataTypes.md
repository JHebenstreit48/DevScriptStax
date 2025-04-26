## Data Types

---

### Introduction to JavaScript Data Types

In <span class="emphasis">JavaScript</span>, every value has a type.  
Understanding these types is crucial for writing effective and error-free code.

✅ JavaScript uses dynamic typing, meaning variables do not have a fixed type.  
✅ A variable can hold different types at different times during program execution.

---

### Primitive Data Types

🔹 **String** → Represents textual data, enclosed within quotes.  
🔹 **Number** → Represents both integers and floating-point numbers.  
🔹 **Boolean** → Represents logical entities — either <span class="codeSnip">true</span> or <span class="codeSnip">false</span>.  
🔹 **Null** → Represents the intentional absence of any value.  
🔹 **Undefined** → Represents a variable that has been declared but not assigned a value yet.  
🔹 **Symbol** → Represents a unique and immutable identifier (introduced in ES6).  
🔹 **BigInt** → Represents integers with arbitrary precision (introduced in ES11).

---

### Example of Primitive Data Types

```javascript
let name = "Alice";          // String
let age = 30;                // Number
let isStudent = true;        // Boolean
let address = null;          // Null
let middleName;              // Undefined
let id = Symbol("id");       // Symbol
let largeNumber = 9007199254740991n; // BigInt
```

---

### Non-Primitive (Complex) Data Types

🔹 **Object** → A collection of properties (key-value pairs).  
🔹 **Array** → An ordered list of values (technically a special type of object).  
🔹 **Function** → A reusable block of code that can be called with arguments and return a value.

---

### Example of Complex Data Types

```javascript
let person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30
};

let hobbies = ["reading", "gaming", "hiking"];

function greet() {
  console.log("Hello, World!");
}
```

---

### How to Check a Variable's Data Type

You can use the <span class="codeSnip">typeof</span> operator to check a variable's data type:

```javascript
let score = 100;
console.log(typeof score);  // Output: "number"
```

---

### Special Notes About JavaScript Data Types

- <span class="codeSnip">typeof null</span> returns <span class="codeSnip">"object"</span> — this is considered a historical bug in JavaScript.
- Arrays are technically objects, but you can distinguish them using <span class="codeSnip">Array.isArray()</span>.
- Functions are considered callable objects but have a distinct internal classification.

---

### Quick Reference Table

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Example</th>
      <th class="tableCellHeader">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>String</strong></td>
      <td class="tableCell">"Hello"</td>
      <td class="tableCell">Text enclosed in quotes</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Number</strong></td>
      <td class="tableCell">42</td>
      <td class="tableCell">Integers or decimals</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Boolean</strong></td>
      <td class="tableCell">true / false</td>
      <td class="tableCell">Logical true/false values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Null</strong></td>
      <td class="tableCell">null</td>
      <td class="tableCell">Intentional absence of value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Undefined</strong></td>
      <td class="tableCell">undefined</td>
      <td class="tableCell">Variable declared but not assigned</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Symbol</strong></td>
      <td class="tableCell">Symbol("id")</td>
      <td class="tableCell">Unique value, often used as keys</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>BigInt</strong></td>
      <td class="tableCell">9007199254740991n</td>
      <td class="tableCell">Large integers with arbitrary precision</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Object</strong></td>
      <td class="tableCell">{ name: "Alice" }</td>
      <td class="tableCell">Key-value storage</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Array</strong></td>
      <td class="tableCell">["red", "green", "blue"]</td>
      <td class="tableCell">Ordered collection of values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Function</strong></td>
      <td class="tableCell">function greet() {}</td>
      <td class="tableCell">Reusable block of code</td>
    </tr>
  </tbody>
</table>

---
