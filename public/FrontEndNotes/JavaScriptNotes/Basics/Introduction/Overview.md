## Overview of JavaScript

---

### What is JavaScript?

<span class="emphasis">JavaScript</span> is a <span class="secondEmphasis">dynamic, high-level programming language</span> primarily used for creating <span class="emphasis">interactive and dynamic web applications</span>.

<span class="emphasis">JavaScript</span> serves as the <span class="secondEmphasis">brain or nervous system</span> of a web page. It provides the <span class="emphasis">logic</span> and extra functionality that enhances a webpage’s <span class="secondEmphasis">interactivity</span> and <span class="secondEmphasis">user experience</span>.

- Runs inside web browsers to manipulate <span class="secondEmphasis">HTML</span> and <span class="secondEmphasis">CSS</span>.
- Now also used outside browsers thanks to platforms like <span class="emphasis">Node.js</span>.
- Supports both <span class="secondEmphasis">object-oriented programming (OOP)</span> and <span class="secondEmphasis">functional programming</span> paradigms.
- Plays a critical role alongside <span class="secondEmphasis">HTML</span> and <span class="secondEmphasis">CSS</span> in the core technologies of web development.

---

### Key Characteristics of JavaScript

✅ **Interpreted Language** → Runs directly without needing prior compilation.  
✅ **Prototype-Based Inheritance** → Objects inherit directly from other objects.  
✅ **Event-Driven** → Designed to respond to user interactions dynamically.  
✅ **First-Class Functions** → Functions are treated as variables and can be passed as arguments.

---

### Example of Simple JavaScript Code

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World"); // Output: Hello, World!
```

---

### Why Use JavaScript?

🔹 **Enhances Web Interactivity** → Enables dynamic content like popups, forms, animations, and games.  
🔹 **Full Stack Capabilities** → With Node.js, JavaScript can be used for both front-end and back-end development.  
🔹 **Rich Ecosystem** → A vast number of libraries (like React, Angular, Vue) and frameworks help speed up development.  
🔹 **Large Community Support** → Active community with millions of developers and open-source contributions.  
🔹 **Continuous Evolution** → New features added regularly via ECMAScript (ES6+ updates).

---

### JavaScript in the Browser vs. Server

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Aspect</th>
      <th class="tableCellHeader">Browser</th>
      <th class="tableCellHeader">Server (Node.js)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><strong>Environment</strong></td>
      <td class="tableCell">Runs inside a web browser (Chrome, Firefox, Safari)</td>
      <td class="tableCell">Runs on the server using Node.js runtime</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Primary Usage</strong></td>
      <td class="tableCell">DOM manipulation, event handling, client-side validation</td>
      <td class="tableCell">API creation, database communication, backend services</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Access to Filesystem</strong></td>
      <td class="tableCell">No (for security reasons)</td>
      <td class="tableCell">Yes (full access)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><strong>Popular Libraries/Frameworks</strong></td>
      <td class="tableCell">React, Vue.js, Angular</td>
      <td class="tableCell">Express.js, Koa.js, NestJS</td>
    </tr>
  </tbody>
</table>

---
