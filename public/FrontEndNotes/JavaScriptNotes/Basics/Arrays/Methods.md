## Common Array Methods

---

### Overview

Arrays in JavaScript come with many built-in methods that help you manipulate, search, and iterate over elements.  
This file focuses on practical, commonly used array methods you'll encounter early and often.

✅ These methods help with adding, removing, searching, and transforming array contents.  
✅ Most of them are beginner-friendly and mutate or return new arrays depending on usage.

---

### Mutating vs Non-Mutating Methods

Some array methods **modify the original array** (mutate), while others **return a new array** without changing the original.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Mutates Original?</th>
      <th class="tableCellHeader">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">✅ Yes</td>
      <td class="tableCell"><span class="codeSnip">push()</span>, <span class="codeSnip">pop()</span>, <span class="codeSnip">shift()</span>, <span class="codeSnip">unshift()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">❌ No (Returns New Array)</td>
      <td class="tableCell"><span class="codeSnip">map()</span>, <span class="codeSnip">filter()</span>, <span class="codeSnip">find()</span></td>
    </tr>
  </tbody>
</table>


### push()

Adds one or more elements to the end of the array.

```javascript  
let colors = ["red", "green"];  
colors.push("blue");  
console.log(colors); // ["red", "green", "blue"]
```

---

### pop()

Removes the last element from the array and returns it.

```javascript  
let numbers = [1, 2, 3];  
let last = numbers.pop();  
console.log(last);    // 3  
console.log(numbers); // [1, 2]
```

---

### shift() and unshift()

<span class="codeSnip">shift()</span> removes the first element.  
<span class="codeSnip">unshift()</span> adds one or more elements to the beginning.

```javascript  
let names = ["Alice", "Bob"];  
names.shift();         // Removes "Alice"  
names.unshift("Zara"); // Adds "Zara" to the start  
console.log(names);    // ["Zara", "Bob"]
```

---

### includes()

Checks if the array contains a specified value and returns a boolean.

```javascript  
let pets = ["dog", "cat", "rabbit"];  
console.log(pets.includes("cat"));  // true  
console.log(pets.includes("bird")); // false
```

---

### Functional Array Methods

These methods take a <span class="emphasis">callback function</span> and apply it to each element.

---

### forEach()

Runs a function on every element of the array. Does not return a new array.

```javascript  
let nums = [1, 2, 3];  
nums.forEach((n) => {  
  console.log(n * 2); // 2, 4, 6  
});
```

---

### map()

Creates a new array by applying a function to each element.

The function is called once per array item. Whatever the function returns is added to the new array.

```javascript  
let nums = [1, 2, 3];  
let doubled = nums.map(n => n * 2);  
console.log(doubled); // [2, 4, 6]
```

---

### filter()

Returns a new array with elements that pass a test condition.

The callback function must return <span class="emphasis">true</span> (or any truthy value) for an item to be included in the new array.


```javascript  
let nums = [1, 2, 3, 4, 5];  
let even = nums.filter(n => n % 2 === 0);  
console.log(even); // [2, 4]
```

You can also use a named function for more readable logic:

```javascript
function onlyDogs(pet) {
  return pet.species === "dog";
}

let pets = [
  { name: "Rex", species: "dog" },
  { name: "Whiskers", species: "cat" },
];

let dogs = pets.filter(onlyDogs);
// [{ name: "Rex", species: "dog" }]
```

---

---

### find()

Returns the first element that matches a condition.

```javascript  
let people = ["Adam", "Eve", "Zoe"];  
let match = people.find(name => name.startsWith("Z"));  
console.log(match); // "Zoe"
```

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
