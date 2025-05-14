## Parameters and Arguments

---

### What Are Parameters and Arguments?

<span class="emphasis">Parameters</span> are the placeholders or variable names you define when creating a function.  
<span class="emphasis">Arguments</span> are the actual values passed to the function when it is called.

```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice");
```

✅ <span class="codeSnip">name</span> is the parameter.  
✅ <span class="codeSnip">"Alice"</span> is the argument.

---

### Multiple Parameters

You can define multiple parameters by separating them with commas.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
```

---

### Default Parameters

You can set a default value for a parameter if no argument is passed.

```javascript
function greet(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greet();         // Welcome, Guest!
greet("Zara");   // Welcome, Zara!
```

---

### Rest Parameters

Use the rest operator <span class="codeSnip">...</span> to capture multiple arguments as an array.

```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
```

✅ Useful when you don’t know how many arguments will be passed.

---

### Destructured Parameters

You can destructure objects or arrays directly in the parameter list.

```javascript
function printUser({ name, age }) {
  console.log(name + " is " + age + " years old.");
}

printUser({ name: "Sam", age: 30 }); // Sam is 30 years old.
```

---

### Arguments Object (Regular Functions Only)

In regular (non-arrow) functions, you can access all passed arguments using the built-in <span class="codeSnip">arguments</span> object.

```javascript
function showArgs() {
  console.log(arguments);
}

showArgs(1, "hello", true);
// Outputs: [1, "hello", true] (array-like object)
```
✅ This does not work in arrow functions.

---

### Best Practices

✅ Match the number of arguments to parameters whenever possible  
✅ Use default values to avoid <span class="codeSnip">undefined</span>  
✅ Use rest parameters for flexible input  
✅ Avoid relying too heavily on the <span class="codeSnip">arguments</span> object in modern code

---

### Summary

✅ <span class="emphasis">Parameters</span> are placeholders in the function definition  
✅ <span class="emphasis">Arguments</span> are the real values passed when calling  
✅ Use rest, default, and destructured parameters for flexibility  
✅ The <span class="codeSnip">arguments</span> object works only in regular functions

---
