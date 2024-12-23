## React Basics
<br>

### What is React?
---
<br>

React is a JavaScript library for building user interfaces or UI pieces that are also known as components.

- Components are flexible and reusable.
- Define a component once, and it can be rendered multiple times with different data.

<br>

### Component Reusability
---
<br>

- React components are designed to be reusable across your application.
- This reduces redundancy and improves maintainability.

<br>

### Why Use Vite to Create a React App?
---
<br>

- Vite is a fast development server with modern tooling.
- It requires minimal configuration.
- Excellent for small to medium-sized projects.

<br>

### Differences Between .jsx and .tsx
---
<br>

#### File Extensions
- .jsx is a JavaScript file with JSX syntax.
- .tsx is a TypeScript file with JSX syntax and type annotations.

#### Typing
- .jsx: No type safety; runtime errors are common.
- .tsx: Allows compile-time error checking with TypeScript.

#### Use Cases
- .jsx: Suitable for plain JavaScript projects.
- .tsx: Recommended for TypeScript projects where type safety and strict checking are needed.

<br>

### Rendering Markdown in React
---
<br>

#### Markdown Placement
- Place .md files in the public folder to ensure they render in the deployed version of the webpage.
- If placed in the src/ folder, Markdown files will render locally but not when deployed.

<br>

---

## State and State Management
---
<br>

### What is State?
  - State is a built-in React object used to store data or information about a component.
  - A component's state can change over time, typically in response to user actions.
  - Whenever a component's state changes, it re-renders to reflect the updated state.

### Managing State
  - For local state, use useState for functional components.
  - For complex state or shared state across components, use useReducer.

### State Management with Context
  - Context allows you to manage state globally without prop drilling.
  - Combine useContext with useState or useReducer for complex applications.
  - Ideal for managing themes, authentication states, or other global application data.

<br>

## Props (Properties)
---
<br>

- Props allow you to pass data into a component.
- They enable customization by providing any attribute or piece of data to a component.

<br>

---

