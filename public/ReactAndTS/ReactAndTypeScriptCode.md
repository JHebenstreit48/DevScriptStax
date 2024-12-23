The following hook allows you to make data accessible directly where it is needed in your application:

```bash
useContext
```

When using interfaces the following keyword makes TypeScript's type checker run faster than when using a different symbol for types.

```bash
extends
```

The following symbol is used with types to create an intersection.

```bash
&
```
The following hook is used to access and manage the state in between components without needing to pass props down to the component tree manually.

```bash
useContext
```

The following file is used to set the configuration rules for the React application portion of the project.

```bash
tsconfig.app.json
```

The following file is used to set the configuration rules for the Node.js environment portions of the project.

```bash
tsconfig.node.json
```

The following code is an example of combining two interfaces into one by giving them the same name.

```bash
interface Person
  firstName: string;

interface Person
  lastName: string;
```

The following rule does not allow you to use the same interface name more than once inside your linter.

```bash
no-redeclare
```

When using a .env package in the front-end, you have to prefix the key value pairs with the following at the start of any environment variables.

```bash
VITE_
```
 
 ## React Functional Components

 ### Defining a React Functional Component with Props

```typescript
interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => <h1>Hello, {name}!</h1>;
```

- This functional component uses TypeScript to define the props parameter's structure with an interface.

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

- Explanation: This component demonstrates how to use generics (<T>) for reusable, type-safe components.

## Keys and TypeScript

### Dynamic Key Mapping with TypeScript

```typescript
const dynamicKey = `${car.Brand.toLowerCase().replace(/\s+/g, "-")}-${car.Model.toLowerCase().replace(/\s+/g, "-")}`;
return DynamicImageKeys[dynamicKey] && Images[DynamicImageKeys[dynamicKey]]
  ? Images[DynamicImageKeys[dynamicKey]]
  : Images["placeholder"];
```

- Explanation: This code uses TypeScript’s strong typing for backend data integration and ensures type-safe string manipulation.

### Type-Safe Fallback Handling

```typescript
interface ImageMapping {
  [key: string]: string;
}

const Images: ImageMapping = {
  placeholder: "path/to/placeholder.png",
};
```

- Explanation: This example demonstrates how to type object mappings and implement fallback logic with TypeScript.
