## Higher-Order Functions

---

### What Is a Higher-Order Function?

A <span class="emphasis">higher-order function</span> is any function that does one or both of the following:

- Takes another function as an <span class="secondEmphasis">argument</span>  
- Returns a new function as its <span class="secondEmphasis">output</span>

✅ This allows you to treat functions like values — pass them, return them, and build powerful abstractions.

---

### Example: Passing a Function as an Argument

The built-in <span class="codeSnip">addEventListener</span> is a higher-order function because it expects a callback function as its second argument.

```javascript
document.querySelector("button").addEventListener("click", function() {
  console.log("Button clicked!");
});
```

✅ The function passed to <span class="codeSnip">addEventListener</span> is not called immediately — it runs later when the event occurs.

---

### Example: Returning a Function

You can also write a function that returns another function — this is another trait of higher-order functions.

```javascript
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

console.log(doubleMe(5));     // 10  
console.log(tripleMe(5));     // 15  
console.log(quadrupleMe(5));  // 20
```

✅ This approach is useful for dynamically creating logic (and uses JavaScript closures under the hood).

---

### Array Methods That Use HOFs

Several built-in array methods are higher-order functions because they accept a callback:

---

#### .forEach()
Runs a function once for each element in the array.

```javascript
let nums = [1, 2, 3];
nums.forEach(n => {
  console.log(n * 2);
});
// Output: 2, 4, 6
```

---

#### .map()
Creates a new array by applying a function to each item.

```javascript
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

---

#### .filter()
Creates a new array with items that pass a condition.

```javascript
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2]
```

---

### Why Use Higher-Order Functions?

✅ Cleaner syntax  
✅ Avoids repetitive logic  
✅ Works well with functional programming patterns  
✅ Enables callback-based and asynchronous programming

---

### Best Practices

✅ Use arrow functions to keep callbacks short and clean  
✅ Chain HOFs when appropriate (e.g., <span class="codeSnip">.map().filter()</span>)  
✅ Use descriptive names for returned functions  
✅ Avoid deeply nested HOFs unless readability is preserved

---

### Summary

✅ Higher-order functions accept or return other functions  
✅ Common in async code and functional programming  
✅ Used in many array methods like <span class="codeSnip">.forEach()</span>, <span class="codeSnip">.map()</span>, and <span class="codeSnip">.filter()</span>  
✅ Powerful for reusability, abstraction, and cleaner logic

---
