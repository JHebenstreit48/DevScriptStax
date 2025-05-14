## Advanced Array Techniques

---

### Overview

This section covers advanced array methods that provide more control over transformation, searching, slicing, flattening, and aggregating data.  
These methods are widely used in real-world JavaScript applications for functional and data-driven programming.

✅ Ideal for intermediate-to-advanced use cases  
✅ Most return new arrays or derived values  
✅ Often paired with arrow functions or callbacks

---

### reduce()

Reduces an array to a single value by applying a reducer function.

```javascript  
let nums = [1, 2, 3, 4];  
let total = nums.reduce((acc, curr) => acc + curr, 0);  
console.log(total); // 10
```

---

### some() and every()

<span class="codeSnip">some()</span> returns true if *any* element passes the test  
<span class="codeSnip">every()</span> returns true if *all* elements pass the test

```javascript  
let nums = [1, 2, 3];  
console.log(nums.some(n => n > 2));   // true  
console.log(nums.every(n => n > 0));  // true
```

---

### sort() and reverse()

Sort elements alphabetically or numerically.

```javascript  
let names = ["Zoe", "Adam", "Eve"];  
names.sort();  
console.log(names); // ["Adam", "Eve", "Zoe"]
```

```javascript  
let numbers = [3, 1, 2];  
numbers.sort((a, b) => a - b);  
console.log(numbers); // [1, 2, 3]
```

```javascript  
numbers.reverse();  
console.log(numbers); // [3, 2, 1]
```

---

### slice() and splice()

<span class="codeSnip">slice()</span> creates a new shallow copy  
<span class="codeSnip">splice()</span> modifies the original array

```javascript  
let fruits = ["apple", "banana", "cherry", "date"];  
let sliced = fruits.slice(1, 3);  
console.log(sliced); // ["banana", "cherry"]
```

```javascript  
fruits.splice(2, 1, "grape");  
console.log(fruits); // ["apple", "banana", "grape", "date"]
```

---

### indexOf(), lastIndexOf(), and findIndex()

Search for values or conditions:

```javascript  
let letters = ["a", "b", "c", "b"];  
console.log(letters.indexOf("b"));         // 1  
console.log(letters.lastIndexOf("b"));     // 3  
console.log(letters.findIndex(l => l === "c")); // 2
```

---

### concat()

Merges arrays into a new array.

```javascript  
let arr1 = [1, 2];  
let arr2 = [3, 4];  
let combined = arr1.concat(arr2);  
console.log(combined); // [1, 2, 3, 4]
```

---

### flat() and flatMap()

Flatten nested arrays and apply transformations.

```javascript  
let nested = [1, [2, 3], [4, [5]]];  
console.log(nested.flat());       // [1, 2, 3, 4, [5]]  
console.log(nested.flat(2));      // [1, 2, 3, 4, 5]
```

```javascript  
let nums = [1, 2, 3];  
console.log(nums.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
```

---

### entries(), keys(), and values()

Useful for iterating with index-value pairs or structure access.

```javascript  
let fruits = ["apple", "banana", "cherry"];

for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}

for (let index of fruits.keys()) {
  console.log(index);
}

for (let value of fruits.values()) {
  console.log(value);
}
```

---

### Summary

✅ <span class="codeSnip">reduce()</span> is great for totals, transformations, or grouped results  
✅ <span class="codeSnip">sort()</span> and <span class="codeSnip">reverse()</span> help organize data  
✅ <span class="codeSnip">slice()</span> copies arrays, <span class="codeSnip">splice()</span> changes them  
✅ <span class="codeSnip">flat()</span> and <span class="codeSnip">flatMap()</span> handle nested structures  
✅ Use <span class="codeSnip">findIndex()</span> and <span class="codeSnip">entries()</span> for custom searches and iteration

---
