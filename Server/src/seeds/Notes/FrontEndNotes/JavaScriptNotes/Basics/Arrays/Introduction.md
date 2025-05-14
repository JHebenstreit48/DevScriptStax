## Arrays

---

### What is an Array?

<span class="emphasis">Arrays</span> in JavaScript are ordered collections that can store multiple values in a single variable.  
Each item in an array is known as an <span class="secondEmphasis">element</span>, and elements are accessed by their <span class="secondEmphasis">index</span>, starting at <span class="codeSnip">0</span>.

✅ Arrays are useful when you want to store lists of data — like names, numbers, or objects.  
✅ Arrays in JavaScript are a type of <span class="emphasis">object</span> and can hold elements of different types.

---

### Array Characteristics

- JavaScript arrays are dynamic — they can grow or shrink during runtime.
- Arrays are zero-indexed (the first element is at position <span class="codeSnip">0</span>).
- They can contain elements of any type, including other arrays and objects.

---

### Creating an Array

```javascript
let empty = [];  
let colors = ["red", "green", "blue"];  
let numbers = [1, 2, 3];  
let mixed = [true, "hello", 42, null];  
let fruits = new Array("apple", "banana", "cherry");
```

⚠️ Prefer array literals ([] syntax) for clarity and reliability.

---

### Accessing Elements

Use bracket notation with the index to access elements:

```javascript
let animals = ["dog", "cat", "bird"];  
console.log(animals[0]); // "dog"  
console.log(animals[2]); // "bird"
```

You can also modify values at a specific index:

```javascript
animals[1] = "rabbit";  
console.log(animals); // ["dog", "rabbit", "bird"]
```

---

### Arrays of Objects

Arrays can store complex elements like objects:

```javascript
let myPets = [
  { name: "Meowsalot", species: "cat" },
  { name: "Barksalot", species: "dog" }
];
```

✅ Each element in the array is itself an object with its own properties.

---

### Accessing Object Properties in an Array

You can access specific object properties by combining array index and dot notation:

```javascript
console.log(myPets[1].species); // "dog"
```
✅ This logs the <span class="secondEmphasis">species</span> property of the second object in the array.

---

### Array Length

The <span class="codeSnip">length</span> property shows how many elements the array contains:

```javascript
let nums = [10, 20, 30];  
console.log(nums.length); // 3
```

You can also use it to truncate an array:

```javascript
nums.length = 1;  
console.log(nums); // [10]
```

---

### Arrays with Holes

JavaScript allows sparse arrays:

```javascript
let sparse = [];  
sparse[3] = "hi";  
console.log(sparse); // [empty × 3, "hi"]  
console.log(sparse.length); // 4
```

⚠️ Not recommended for most use cases — use dense arrays unless sparse data is intentional.

---

### typeof and Array Check

The <span class="codeSnip">typeof</span> operator returns <span class="codeSnip">"object"</span> for arrays, so use <span class="codeSnip">Array.isArray()</span> to check:

```javascript
let list = ["a", "b"];  
console.log(typeof list);         // "object"  
console.log(Array.isArray(list)); // true
```

---

### Summary

✅ Arrays are flexible, ordered collections indexed from zero.  
✅ You can store any type of data — even other arrays or objects.  
✅ Use bracket notation to access or change elements.  
✅ Use <span class="codeSnip">Array.isArray()</span> to reliably test if a value is an array.

---
