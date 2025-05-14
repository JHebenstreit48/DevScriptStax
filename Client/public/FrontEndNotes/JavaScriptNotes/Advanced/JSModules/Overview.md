## JavaScript Modules Overview

---

### What are Modules?

<span class="emphasis">Modules</span> are reusable blocks of code that help organize and isolate functionality in a JavaScript application.  
They allow developers to split complex programs into smaller, manageable parts and load only what is needed.

✅ Think of a module as a self-contained file that exports logic and can be imported into other files.

---

### Why Use Modules?

- Reduce global scope pollution.
- Improve project maintainability and readability.
- Enable reusability across files.
- Allow lazy loading and performance optimization (especially with dynamic imports).

---

### History and Standards

- JavaScript originally had no built-in module system.
- Developers relied on IIFEs, CommonJS (Node), or AMD for years.
- Modern browsers now support **ES Modules (ESM)** natively via the <span class="codeSnip">&lt;script type="module"&gt;</span> tag or <span class="secondEmphasis">.mjs</span> files.
- Modules must use **strict mode** automatically ('use strict' is applied by default).

---

### Summary

✅ Modules help structure your code.  
✅ Each module has its own scope, separate from the global scope.  
✅ Use import and export statements to share functionality between files.  
✅ Modern ES Modules are the preferred way to build modular JavaScript.

---
