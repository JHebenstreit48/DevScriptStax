### What Are export and import?

JavaScript modules allow you to break code into smaller pieces and share functionality across files.  
Modules expose variables, functions, or classes using the export keyword and include them in other files using import.

✅ You can export multiple values or a single default value.  
✅ You must use the exact exported name when importing (unless using export default).

---

### Named Exports

You can export multiple named values from a file.

```javascript
// utils.js  
export function greet(name) {  
  console.log("Hello, " + name);  
}  

export const age = 30;
```

Import them using curly braces:

```javascript
// app.js  
import { greet, age } from "./utils.js";  
greet("Alice"); // "Hello, Alice"
```

You can also rename on import:

```javascript
import { greet as sayHello } from "./utils.js";  
sayHello("Alice");
```

---

### Default Exports

Each module can optionally export one default value:

```javascript
// utils.js  
export default function greet(name) {  
  console.log("Hello, " + name);  
}

import greet from "./utils.js";  
greet("Alice");
```

You can combine named and default exports in one file:

```javascript
// utils.js  
export const age = 25;  
export default function greet(name) {  
  console.log("Hello, " + name);  
}

import greet, { age } from "./utils.js";
```

---

### Summary

✅ Use export to expose values from a module.  
✅ Use import to bring values into another file.  
✅ Named exports require curly braces; default exports do not.  
✅ You can alias imports with as to rename them.

---
