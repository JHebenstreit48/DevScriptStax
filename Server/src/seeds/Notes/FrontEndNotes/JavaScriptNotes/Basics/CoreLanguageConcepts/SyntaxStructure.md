## Syntax and Structure

---

### Introduction to JavaScript Syntax

<span class="emphasis">JavaScript</span> uses a flexible syntax that allows developers to create programs composed of <span class="secondEmphasis">statements</span>, <span class="secondEmphasis">blocks</span>, and <span class="secondEmphasis">functions</span>.

✅ Syntax refers to the set of rules that define the structure of valid JavaScript code.  
✅ Even though JavaScript is forgiving compared to stricter languages like C++, writing clean and consistent syntax improves readability and maintenance.

---

### Basic Syntax Rules

- Every statement should ideally end with a <span class="codeSnip">;</span> (semicolon), although JavaScript engines can infer them (this is called Automatic Semicolon Insertion — <span class="secondEmphasis">ASI</span>).
- Code blocks are wrapped in <span class="codeSnip">{}</span> (curly braces).
- Case sensitivity matters: <span class="emphasis">myVariable</span> and <span class="emphasis">myvariable</span> are considered different identifiers.
- Indentation and formatting are important for human readability (although not enforced by the JavaScript engine).

---

### Quote Style Consistency

JavaScript allows both <span class="codeSnip">"</span>double quotes<span class="codeSnip">"</span> and <span class="codeSnip">'</span>single quotes<span class="codeSnip">'</span> for string literals.

✅ Choose one style and use it consistently across your codebase.  
✅ Both work identically in JavaScript — it’s just a matter of style preference.

```javascript
let greeting1 = "Hello, World!";
let greeting2 = 'Hello again!';
```

⚠️ Avoid mixing styles unless necessary (e.g., using one to escape the other).

---

### Common Building Blocks of JavaScript Code

🔹 **Statements** → Smallest standalone instructions (e.g., variable declarations, function calls).  
🔹 **Blocks** → Collections of statements grouped by curly braces <span class="codeSnip">{}</span>.  
🔹 **Expressions** → Code that evaluates to a value (e.g., <span class="codeSnip">5 + 10</span>, <span class="codeSnip">"Hello" + "World"</span>).  
🔹 **Functions** → Reusable blocks of code that perform specific tasks.

---

### Example of Basic JavaScript Structure

```javascript
// This is a simple JavaScript program

function greet(name) {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, World!");
  }
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, World!
```

---

### Key Best Practices for Syntax

✅ Always use <span class="emphasis">semicolons</span> to <span class="secondEmphasis">terminate</span> statements explicitly.  
✅ Keep consistent indentation (usually 2 or 4 spaces).  
✅ Place opening curly braces <span class="codeSnip">{</span> on the same line as the control statement (e.g., <span class="codeSnip">if</span>, <span class="codeSnip">function</span>, <span class="codeSnip">for</span>).  
✅ Use clear and descriptive variable and function names.

---

