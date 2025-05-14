## Dynamic Imports and Lazy Loading

---

### What is Dynamic Import?

<span class="emphasis">Dynamic import</span> is a way to load JavaScript modules only when they are needed, rather than upfront.  
It uses the <span class="codeSnip">import()</span> function to asynchronously load a module at runtime.

✅ Improves performance by reducing initial load size.  
✅ Allows conditional or event-driven module loading.  
✅ Returns a <span class="codeSnip">Promise</span> that resolves to the module object.

---

### Syntax: Dynamic import()

import("./module.js")
  .then((module) => {
    module.sayHello();
  })
  .catch((err) => {
    console.error("Failed to load module:", err);
  });

---

### Using async/await with Dynamic Imports

You can also use <span class="codeSnip">await</span> inside an <span class="codeSnip">async</span> function for cleaner syntax:

async function loadModule() {
  const module = await import("./math.js");
  console.log(module.add(2, 3));
}

loadModule(); // Outputs: 5

✅ <span class="emphasis">await</span> pauses the function until the Promise resolves.  
✅ This avoids the need for <span class="codeSnip">.then()</span> chaining and keeps the code easier to follow.

---

### Quick Tip: async and await

- <span class="codeSnip">async</span> marks a function as asynchronous and always returns a Promise.
- <span class="codeSnip">await</span> can only be used inside an <span class="codeSnip">async</span> function.
- <span class="codeSnip">await</span> pauses execution until the awaited Promise resolves.

---

### Use Cases

- Load a module only after a user action (like clicking a button).
- Dynamically load code based on a condition (e.g., environment or user role).
- Lazy load large libraries or components only when needed.

---

### Example: Conditional Module Loading

if (user.isAdmin) {
  import("./admin-tools.js").then((adminTools) => {
    adminTools.showDashboard();
  });
}

---

### Lazy Loading UI Components

In frameworks like React or Vue, dynamic import is often paired with lazy loading techniques:

const LazyComponent = React.lazy(() => import("./MyComponent"));

React will load this component only when it is rendered, helping reduce bundle size.

---

### Summary

✅ Use <span class="codeSnip">import()</span> for async module loading.  
✅ Works well with <span class="codeSnip">await</span> inside <span class="codeSnip">async</span> functions.  
✅ Helps performance by deferring non-critical code.  
✅ Ideal for conditional features, modal components, admin tools, etc.

---
