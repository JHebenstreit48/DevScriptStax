# JavaScript Basics with Code Examples
---

## Exporting and Importing Functions

### Default Function Export

When you use the following code before the name of a <span class="emphasis">function</span>, you can change the <span class="secondEmphasis">name</span> of the function when you <span class="emphasis">import</span> it into another file:

```javascript
export default function myFunction() {
    console.log("Default exported function");
}
```

In another file, you can <span class="emphasis">import</span> it with any name:

```javascript
import myFunction from "./fileName";
myFunction();
```

---

### Renaming Exported Functions

When exporting a <span class="emphasis">function</span>, you can rename it using curly brackets and the <span class="emphasis">as</span> keyword.

```javascript
function greet() {
    console.log("Hello!");
}

export { greet as sayHello };
```

In another file, <span class="emphasis">import</span> the function using its new name:

```javascript
import { sayHello } from "./fileName";
sayHello(); // Outputs: Hello!
```

---

### Using Webpack to Configure Path Aliases

When working with JavaScript projects, managing file imports with relative paths like ./ and ../ can become complex in larger projects. To address this, Webpack allows developers to configure path aliases, simplifying file imports and improving code readability.

#### Webpack Configuration

```javascript
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

---

#### Example: Relative Path

```javascript
import MyComponent from '../../components/MyComponent';
```

---

#### Example: Using Alias

javascript
import MyComponent from '@/components/MyComponent';

---

#### Explanation

- The alias @/ replaces the need for long relative paths.
- Using aliases makes refactoring easier because you only update the alias definition, not every import.

---

## Event Handling

### Placeholder for an Event

The parameter <span class="emphasis">(e)</span> inside a <span class="secondEmphasis">function</span> serves as a placeholder for the <span class="emphasis">Event object</span>. It allows access to <span class="secondEmphasis">event properties</span>.

```javascript
document.querySelector("button").addEventListener("click", (e) => {
    console.log("Button clicked", e.type); // Outputs: Button clicked click
});
```

---

### Preventing Default Behavior

The <span class="emphasis">preventDefault()</span> method stops the browser's <span class="secondEmphasis">default behavior</span>, such as submitting a <span class="emphasis">form</span> or navigating a <span class="secondEmphasis">link</span>.

```javascript
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Default form submission prevented");
});
```

---

## Summary

These examples demonstrate core <span class="emphasis">JavaScript</span> techniques, including exporting <span class="secondEmphasis">functions</span>, handling <span class="emphasis">events</span>, using <span class="secondEmphasis">array methods</span>, and working with <span class="emphasis">strings</span>. Mastering these concepts will help you build <span class="secondEmphasis">dynamic</span> and <span class="emphasis">interactive</span> applications.
