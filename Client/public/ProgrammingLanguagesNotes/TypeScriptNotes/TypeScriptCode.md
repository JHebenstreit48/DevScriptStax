# Introduction to TypeScript
---

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing, interfaces, and other features to help developers write robust and maintainable code.

---

## Installing TypeScript
---

To get started, install TypeScript globally using npm:

shell
npm install -g typescript

Verify the installation:

shell
tsc -v

This command displays the installed TypeScript version.

---

## Writing and Compiling TypeScript Code
---

Create a file named `example.ts` and add the following code:

typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('World'));

Compile the TypeScript file to JavaScript:

shell
tsc example.ts

This generates an `example.js` file that can be executed with Node.js or included in a browser.

---

## TypeScript Basics
---

### Static Typing

TypeScript introduces static types to JavaScript:

typescript
let isDone: boolean = true;
let total: number = 42;
let name: string = 'TypeScript';

---

### Interfaces

Interfaces define the structure of an object:

typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
};

---

### Generics

Generics provide a way to create reusable components with variable types:

typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>('Hello'));
console.log(identity<number>(42));

---

## Configuring Path Aliases in tsconfig.json
---

TypeScript supports path aliases natively via tsconfig.json. This enables clean imports and reduces the need for complex relative paths.

### tsconfig.json Configuration

json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

---

### Example: Relative Path

typescript
import MyComponent from '../../components/MyComponent';

---

### Example: Using Alias

typescript
import MyComponent from '@/components/MyComponent';

---

### Explanation

- The `baseUrl` specifies the root directory for module resolution.
- The `paths` map custom aliases (e.g., `@/`) to directories within the project (e.g., `src/`).

---

## Additional Notes and Best Practices
---

- **Type Inference**: Leverage TypeScript's type inference to minimize explicit type annotations where possible.
- **Strict Mode**: Enable `strict` mode in tsconfig.json for stricter type checking and improved code quality.
- **Integration**: TypeScript integrates seamlessly with modern frameworks like React, Angular, and Vue.
- **Tooling**: Use tools like `ts-node` for running TypeScript directly without compiling.

---

This structure introduces TypeScript, provides foundational examples, and incorporates the path alias notes logically. Let me know if further refinements are needed!

