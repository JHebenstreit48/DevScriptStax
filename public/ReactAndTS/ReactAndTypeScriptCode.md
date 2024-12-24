# React and TypeScript Code Examples

## Setting Up TypeScript in a React Project  
---

### Using Create React App

1. Create a React app with TypeScript:

```shell
npx create-react-app my-app --template typescript
```

2. Install necessary TypeScript dependencies:

```shell
npm install --save-dev @types/react @types/react-dom
```

3. Configure TypeScript settings for React in `tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node"
  }
}
```

### Using Vite

1. Create a React app with TypeScript using Vite:

```shell
npm create vite@latest
```

2. When prompted, select the react-ts template.

3. Install dependencies:

```shell
npm install
```

4. To avoid creating a nested folder structure, run the Vite command with a single dot (`.`) to use the current directory:

```shell
npm create vite@latest . -- --template react-ts
```

5. Start the development server:

```shell
npm run dev
```

6. Update the tsconfig.json file for stricter typing rules if needed:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node"
  }
}
```

---

## TypeScript Basics  
---

### Keywords and Symbols

1. The following hook allows you to make data accessible directly where it is needed in your application and manage the state between components without passing props manually:

```typescript
useContext
```

2. The extends keyword allows TypeScript's type checker to perform faster checks compared to other symbols.

```typescript
extends
```

3. The & symbol is used with types to create an intersection.

```typescript
&
```

---

## TypeScript Configuration Files

1. The following file sets the configuration rules for the React application portion of the project:

```bash
tsconfig.app.json
```

2. The following file sets the configuration rules for the Node.js environment portion of the project:

```bash
tsconfig.node.json
```

---

## Using TypeScript Interfaces  
---

### Combining Interfaces

```typescript
interface Person {
  firstName: string;
}

interface Person {
  lastName: string;
}
```

- Explanation: Interfaces with the same name merge automatically, combining their properties.

### Linter Rule for Interfaces

```shell
no-redeclare
```

- Explanation: This linter rule prevents you from using the same interface name more than once.

---

## React Functional Components with TypeScript  
---

### Defining Components with Props

```typescript
interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => <h1>Hello, {name}!</h1>;
```

- Explanation: This defines a functional component with strongly-typed props.

---

### Using Generics in Functional Components

```typescript
interface ListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

const List = <T,>({ items, render }: ListProps<T>) => (
  <ul>{items.map(render)}</ul>
);
```

- Explanation: This example demonstrates how to use generics (<T>) to create reusable, type-safe components.

---

## Keys and TypeScript  
---

### Dynamic Key Mapping

```typescript
const dynamicKey = `${car.Brand.toLowerCase().replace(/\\s+/g, "-")}-${car.Model.toLowerCase().replace(/\\s+/g, "-")}`;
return DynamicImageKeys[dynamicKey] && Images[DynamicImageKeys[dynamicKey]]
  ? Images[DynamicImageKeys[dynamicKey]]
  : Images["placeholder"];
```

- Explanation: Use TypeScript for dynamic key mapping and type-safe string manipulation.

---

### Type-Safe Fallback Handling

```typescript
interface ImageMapping {
  [key: string]: string;
}

const Images: ImageMapping = {
  placeholder: "path/to/placeholder.png",
};
```

- Explanation: This ensures type-safe mappings and fallback handling for missing data.

---

## Environment Variables in TypeScript Projects

1. When using a .env package in the front-end, prefix environment variable keys with:

```dotenv
VITE_
```
- Explanation: This is required for proper integration in Vite-based projects.

---

Use this structure to optimize your React and TypeScript projects efficiently.
