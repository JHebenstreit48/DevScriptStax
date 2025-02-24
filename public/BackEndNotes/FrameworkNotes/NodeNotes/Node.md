# Node.js Basics

## Overview
---

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a browser, enabling server-side scripting for scalable applications such as APIs, real-time services, and command-line tools.

---

## Key Features
---

- **Non-blocking I/O:** Node.js uses asynchronous, event-driven programming to handle input/output operations efficiently, making it ideal for high-performance, scalable applications.
- **Single-threaded with Event Loop:** While Node.js operates on a single thread, it uses an event loop to manage concurrency. Modern versions also support worker threads for CPU-intensive tasks.
- **npm (Node Package Manager):** Comes with a vast library of reusable packages, simplifying development and dependency management.
- **Cross-platform:** Runs on multiple platforms, including Windows, macOS, and Linux.

---

## Modules
---

Modules in Node.js allow developers to organize code into reusable pieces. They can be built-in modules, user-defined modules, or third-party modules installed via npm.

- **Common Built-in Modules:**
  - <span class="emphasis">fs</span>: Handles file system operations.
  - <span class="emphasis">http</span>: Provides HTTP server and client functionality.
  - <span class="emphasis">path</span>: Works with file and directory paths.

- **Importing Modules:**
  - Use <span class="emphasis">require()</span> for CommonJS modules.
  - Use <span class="emphasis">import</span> for ES modules, supported in modern Node.js versions.

<br>

### Managing Import Paths
---

Node.js supports relative paths for importing modules or files, such as <span class="emphasis">./</span>, <span class="emphasis">../</span>, and <span class="emphasis">../../</span>. These paths work well for small projects but can become cumbersome in larger ones.

To simplify imports, aliases like <span class="emphasis">@/</span> can be configured using tools such as <span class="emphasis">module-alias</span>. Path aliases provide:
- Cleaner and more readable import statements.
- Easier refactoring when moving files.

**Additional Notes:**
- In ES Module projects, aliases may require custom loaders or configurations using <span class="emphasis">NODE_OPTIONS</span>.
- Aliases are especially useful for managing shared utilities or deeply nested directories in larger applications.

---

