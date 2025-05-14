## Function Basics & Declarations

---

### What is a Function?

In JavaScript, a <span class="emphasis">function</span> is a reusable block of code that performs a specific task.  
You can think of a function as an <span class="secondEmphasis">"action word"</span> — similar to a verb in English grammar.  
Functions help us organize logic into named steps, making code reusable and more readable.

---

### Function Declaration Syntax

A <span class="emphasis">function declaration</span> is the traditional way to define a function in JavaScript:

```javascript
function greet(name) {
  console.log("Hello " + name);
}
```

✅ The keyword <span class="codeSnip">function</span> is followed by the function name, parentheses, and a block wrapped in <span class="codeSnip">{}</span>.

---

### Calling vs Referencing a Function

Using parentheses after a function's name <span class="emphasis">calls</span> or <span class="secondEmphasis">invokes</span> the function.  
This is how you execute the logic inside it and optionally pass values (arguments).

```javascript
function sayHello(name) {
  console.log("Hi " + name);
}

sayHello("Alice"); // ✅ Calls the function and passes "Alice"
sayHello;          // ❌ Just a reference — doesn't call it
```

✅ Always include parentheses to run the function.  
✅ Without them, you're just pointing at the function definition.

---

### Function Body

The code inside the curly braces <span class="codeSnip">{}</span> is known as the <span class="emphasis">function body</span>.  
This is the section where your action happens.

```javascript
function sayThanks() {
  console.log("Thanks for visiting!");
}
```

✅ You can put any valid JavaScript logic inside a function body.

---

### Naming Functions

Best practices when naming functions:

- ✅ Use descriptive names: <span class="codeSnip">calculateTax()</span>, <span class="codeSnip">sendEmail()</span>
- ✅ Use camelCase
- ❌ Avoid vague names like <span class="codeSnip">doStuff()</span> or <span class="codeSnip">thing()</span>

---

### Summary

✅ A function is a reusable action block — like a verb in a sentence.  
✅ Function declarations use the <span class="codeSnip">function</span> keyword.  
✅ Call a function with <span class="codeSnip">()</span> to run it.  
✅ Logic inside <span class="codeSnip">{}</span> is the function body.  
✅ Use meaningful names for clarity and reuse.

---
