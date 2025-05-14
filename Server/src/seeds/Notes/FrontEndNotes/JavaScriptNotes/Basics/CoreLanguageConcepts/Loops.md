## Loops

---

### Introduction to Loops

<span class="emphasis">Loops</span> allow you to execute a block of code repeatedly based on a condition or until a specified limit is reached.

✅ Loops reduce repetition and make code more efficient.  
✅ JavaScript supports several types of loops — each with its ideal use case.

---

### The for Loop

The <span class="codeSnip">for</span> loop is the most common loop in JavaScript. It runs a block of code a specific number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration #" + i);
}
```

✅ Initialization → condition → update  
✅ Runs until the condition is false

---

### The while Loop

The <span class="codeSnip">while</span> loop repeats as long as a condition remains true.

```javascript
let i = 0;

while (i < 3) {
  console.log("Count: " + i);
  i++;
}
```

✅ Use when you don't know in advance how many times to run.

---

### The do...while Loop

Like <span class="codeSnip">while</span>, but guarantees the loop runs at least once.

```javascript
let i = 0;

do {
  console.log("Run at least once: " + i);
  i++;
} while (i < 2);
```

---

### The for...of Loop

Use <span class="codeSnip">for...of</span> to loop through iterable values (arrays, strings, etc.).

```javascript
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

✅ Cleaner syntax for arrays and iterable collections

---

### The for...in Loop

Use <span class="codeSnip">for...in</span> to loop through the keys of an object.

```javascript
let person = { name: "Alice", age: 30 };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

⚠️ Be cautious with inherited properties when using <span class="codeSnip">for...in</span> — prefer <span class="codeSnip">Object.hasOwn()</span> or <span class="codeSnip">Object.keys()</span> for cleaner iterations.

---

### Loop Control Statements

Use <span class="codeSnip">break</span> and <span class="codeSnip">continue</span> to control loop behavior.

- <span class="codeSnip">break</span> exits the loop early.
- <span class="codeSnip">continue</span> skips the rest of the current iteration.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // Will print 0, 1, 2
}
```

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // Will skip 2
}
```

---

### Loop Comparison Table

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Loop Type</th>
      <th class="tableCellHeader">Best For</th>
      <th class="tableCellHeader">Condition Checked</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">for</span></td>
      <td class="tableCell">Known number of iterations</td>
      <td class="tableCell">Before each iteration</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">while</span></td>
      <td class="tableCell">Unknown iterations (loop until)</td>
      <td class="tableCell">Before each iteration</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">do...while</span></td>
      <td class="tableCell">Run at least once</td>
      <td class="tableCell">After each iteration</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">for...of</span></td>
      <td class="tableCell">Arrays and strings</td>
      <td class="tableCell">Iterates over values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">for...in</span></td>
      <td class="tableCell">Enumerating object keys</td>
      <td class="tableCell">Iterates over property keys</td>
    </tr>
  </tbody>
</table>

---

### Best Practices

✅ Use <span class="codeSnip">for</span> when you know how many times to iterate.  
✅ Use <span class="codeSnip">for...of</span> for cleaner iteration over arrays.  
✅ Avoid nesting too many loops — consider combining logic or using <span class="codeSnip">break</span>.  
✅ Don’t mutate the array you’re looping over — unless intentionally.

---
