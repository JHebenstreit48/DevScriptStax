# Introduction to Node.js
---

Node.js is a runtime environment that allows you to execute JavaScript code outside the browser. It is widely used for building server-side applications and offers features like asynchronous programming, event-driven architecture, and a vast ecosystem of packages.

---

## Installing Node.js
---

To get started, you need to install Node.js. Visit the official Node.js website and download the appropriate version for your operating system. Once installed, verify the installation:

shell
node -v

This command displays the installed Node.js version.

---

## Running a Simple Node.js Script
---

Create a file named `app.js` and add the following code:

javascript
console.log('Hello, Node.js!');

Run the script using the following command:

shell
node app.js

This will execute the script and print "Hello, Node.js!" in the terminal.

---

## Creating a Simple HTTP Server
---

Node.js allows you to create an HTTP server with minimal code. Here’s an example:

javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

Run this script, then visit `http://localhost:3000/` in your browser to see the "Hello, World!" message.

---

## Using module-alias for Path Aliases
---

Node.js does not natively support path aliases, but the module-alias package provides a way to configure them.

### Steps to Configure:

1. Install module-alias:

shell
npm install module-alias --save

2. Add configuration to package.json:

json
{
  "_moduleAliases": {
    "@": "src"
  }
}

3. Use the alias in your code:

javascript
require('@utils/MyModule');

---

### Example: Relative Path

javascript
const MyModule = require('../../utils/MyModule');

---

### Example: Using Alias

javascript
const MyModule = require('@/utils/MyModule');

---

### Explanation

- Path aliases reduce the complexity of deeply nested imports in large Node.js projects.
- Using module-alias simplifies module resolution and refactoring.

---

## Additional Notes and Best Practices
---

- **Asynchronous Programming**: Use `async/await` or Promises to handle asynchronous operations effectively.
- **Error Handling**: Always handle errors using `try...catch` blocks or `.catch()` for Promises.
- **Package Management**: Use `npm` or `yarn` to manage dependencies in your Node.js projects.
- **Environment Variables**: Use a `.env` file and packages like `dotenv` to manage environment variables securely.

---
