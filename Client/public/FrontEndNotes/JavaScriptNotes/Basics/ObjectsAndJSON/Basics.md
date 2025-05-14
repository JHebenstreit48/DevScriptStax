## Objects in JavaScript

---

### What Is an Object?

You can think of an <span class="emphasis">object</span> as a <span class="secondEmphasis">container</span> that stores related pieces of data and logic.  
Objects hold information in the form of <span class="secondEmphasis">key-value pairs</span>, where each key is called a <span class="emphasis">property</span>.

✅ Objects allow you to organize multiple values inside a single structure.  
✅ Values can be strings, numbers, booleans, arrays, other objects — or even functions.

---

### Creating an Object

```javascript
let user = {
  name: "Alice",
  age: 30,
  isMember: true
};

let product = new Object();
product.name = "Laptop";
product.price = 999;
```

⚠️ Prefer object literal syntax (using curly braces) for readability and simplicity.

---

### Object Properties

The data stored inside the <span class="codeSnip">{}</span> of an object are called <span class="emphasis">properties</span>.  
Each property uses the format <span class="codeSnip">key: value</span> and must be separated by commas.

```javascript
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218
};
```

✅ A property’s key must be a string or valid identifier.  
✅ A property’s value can be anything.  
✅ Don’t forget: Each property must be separated with a comma.

---

### Quoting Keys

- Keys do NOT require quotes in JavaScript if they are simple words (letters only).
- Keys WITH spaces, symbols, or digits at the start DO require quotes.

```javascript
let obj1 = {
  name: "Alice",          // ✅ no quotes needed
  "full name": "Alice A", // ✅ quotes required
  "2cool": true           // ✅ quotes required
};
```

⚠️ In JSON files, ALL keys must be in double quotes — no exceptions.

---

### Nesting Objects

Objects can contain other objects — this is known as <span class="emphasis">nesting</span>.

```javascript
let car = {
  brand: "Toyota",
  engine: {
    type: "V6",
    horsepower: 300
  }
};
```

✅ You can access nested data using chained property access (e.g., <span class="codeSnip">car.engine.horsepower</span>).

---

### Accessing Object Data

Use either dot notation or bracket notation to access property values.

```javascript
let user = {
  name: "Alice",
  "favorite color": "blue"
};

console.log(user.name);              // "Alice"
console.log(user["favorite color"]); // "blue"
```

✅ A period (dot) is used to look inside an object.  
✅ Brackets are required when the key includes spaces or is dynamic.

---

### Summary

✅ Objects act like containers that group related data  
✅ Properties live inside <span class="codeSnip">{}</span> and use a <span class="codeSnip">key: value</span> structure  
✅ Keys can be quoted or unquoted depending on their format  
✅ Properties must be comma-separated  
✅ Objects can be nested  
✅ Use dot or bracket notation to access values

---
