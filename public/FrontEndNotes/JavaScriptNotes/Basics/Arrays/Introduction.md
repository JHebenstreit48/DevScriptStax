## Arrays and Array Methods

---

### What is an Array?

<span class="emphasis">Arrays</span> in JavaScript are ordered collections that can store multiple values in a single variable.  
Each item in an array is known as an <span class="secondEmphasis">element</span>, and elements are accessed by their <span class="secondEmphasis">index</span>, starting at <span class="codeSnip">0</span>.

✅ Arrays are useful when you want to store lists of data — like names, numbers, or objects.  
✅ Arrays in JavaScript are a type of <span class="emphasis">object</span> and can hold elements of different types.

---

### Creating an Array

let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4];
let mixed = [42, "hello", true, null];

---

### Accessing and Modifying Elements

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);  // "apple"
fruits[1] = "mango";     // Replaces "banana" with "mango"
console.log(fruits);     // ["apple", "mango", "cherry"]

---

### Common Array Methods

#### <span class="codeSnip">.push()</span>
Adds one or more elements to the end of the array.

let colors = ["red", "green"];
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

---

#### <span class="codeSnip">.pop()</span>
Removes the last element of the array and returns it.

let numbers = [1, 2, 3];
let last = numbers.pop();
console.log(last);    // 3
console.log(numbers); // [1, 2]

---

#### <span class="codeSnip">.shift()</span> and <span class="codeSnip">.unshift()</span>
- <span class="codeSnip">.shift()</span> removes the first element.  
- <span class="codeSnip">.unshift()</span> adds elements to the beginning.

let names = ["Alice", "Bob"];
names.shift();         // Removes "Alice"
names.unshift("Zara"); // Adds "Zara" to the start
console.log(names);    // ["Zara", "Bob"]

---

#### <span class="codeSnip">.includes()</span>
Checks if the array contains a specific value.

let pets = ["dog", "cat", "rabbit"];
console.log(pets.includes("cat"));  // true
console.log(pets.includes("bird")); // false

---

### Functional Array Methods

These methods take a <span class="emphasis">callback function</span> and apply it to each element:

---

#### <span class="codeSnip">.forEach()</span>
Runs a function on every element of the array.

let nums = [1, 2, 3];
nums.forEach((n) => {
  console.log(n * 2); // 2, 4, 6
});

---

#### <span class="codeSnip">.map()</span>
Creates a new array by applying a function to each element.

let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

---

#### <span class="codeSnip">.filter()</span>
Returns a new array with elements that pass a test.

let nums = [1, 2, 3, 4, 5];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

---

#### <span class="codeSnip">.find()</span>
Returns the first element that matches a condition.

let people = ["Adam", "Eve", "Zoe"];
let match = people.find(name => name.startsWith("Z"));
console.log(match); // "Zoe"

---

### Summary Table: Common Array Methods

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Purpose</th>
      <th class="tableCellHeader">Returns</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">push()</span></td>
      <td class="tableCell">Adds item(s) to the end</td>
      <td class="tableCell">New length of array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">pop()</span></td>
      <td class="tableCell">Removes last item</td>
      <td class="tableCell">Removed item</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">shift()</span></td>
      <td class="tableCell">Removes first item</td>
      <td class="tableCell">Removed item</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">unshift()</span></td>
      <td class="tableCell">Adds item(s) to the beginning</td>
      <td class="tableCell">New length of array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">includes()</span></td>
      <td class="tableCell">Checks if value exists</td>
      <td class="tableCell">Boolean</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">forEach()</span></td>
      <td class="tableCell">Runs function on each item</td>
      <td class="tableCell">undefined</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">map()</span></td>
      <td class="tableCell">Transforms each item</td>
      <td class="tableCell">New array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">filter()</span></td>
      <td class="tableCell">Filters items based on test</td>
      <td class="tableCell">New array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">find()</span></td>
      <td class="tableCell">Finds first match</td>
      <td class="tableCell">Single item or <span class="codeSnip">undefined</span></td>
    </tr>
  </tbody>
</table>

---
