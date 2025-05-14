## **Advanced Concepts**
---
### **Advanced Component Patterns**
---
React Native supports **advanced patterns** for **building reusable, scalable, and flexible components**.

---
### **1. Higher-Order Components (HOCs)**
---
A **Higher-Order Component (HOC)** is a function that **takes a component and returns a new component**.

✅ **Example: Higher-Order Component**
---
```javascript
import React from "react";
import { View, Text } from "react-native";

// HOC function
function withBackgroundColor(WrappedComponent) {
  return function (props) {
    return (
      <View style={{ backgroundColor: "lightblue", padding: 10 }}>
        <WrappedComponent {...props} />
      </View>
    );
  };
}

// Base component
function Message(props) {
  return <Text>{props.text}</Text>;
}

// Enhanced component using HOC
const ColoredMessage = withBackgroundColor(Message);

export default function App() {
  return <ColoredMessage text="This is an HOC example" />;
}
```

---
### **2. Render Props Pattern**
---
**Render props** allow sharing **component logic** using a function as a prop.

✅ **Example: Render Props Pattern**
---

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

// Counter component using render prop
function Counter({ render }) {
  const [count, setCount] = useState(0);
  return (
    <View>
      {render(count, () => setCount(count + 1))}
    </View>
  );
}

export default function App() {
  return (
    <Counter render={(count, increment) => (
      <>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={increment} />
      </>
    )} />
  );
}
```

---
### **3. Compound Components Pattern**
---
The **Compound Component pattern** allows components to **work together without relying on props**.

✅ **Example: Compound Components**
---
javascript
import React, { createContext, useContext, useState } from "react";
import { View, Text, Button } from "react-native";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  return (
    <ToggleContext.Provider value={{ on, setOn }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleButton() {
  const { setOn } = useContext(ToggleContext);
  return <Button title="Toggle" onPress={() => setOn((prev) => !prev)} />;
}

function ToggleMessage() {
  const { on } = useContext(ToggleContext);
  return <Text>{on ? "Toggled On" : "Toggled Off"}</Text>;
}

export default function App() {
  return (
    <Toggle>
      <ToggleMessage />
      <ToggleButton />
    </Toggle>
  );
}

---
### **Comparison of Advanced Component Patterns**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Pattern</th>
            <th class="tableCellHeader">Purpose</th>
            <th class="tableCellHeader">Example Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Higher-Order Components (HOC)</strong></td>
            <td class="tableCell">Enhance components with additional behavior</td>
            <td class="tableCell"><span class="codeSnip">withAuth(Component)</span> for authentication</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Render Props</strong></td>
            <td class="tableCell">Share logic dynamically through function props</td>
            <td class="tableCell"><span class="codeSnip">Counter with render prop</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Compound Components</strong></td>
            <td class="tableCell">Allow components to communicate without direct props</td>
            <td class="tableCell"><span class="codeSnip">Toggle component with context</span></td>
        </tr>
    </tbody>
</table>

---
### **Conclusion**
---
- **HOCs** wrap components to extend functionality.  
- **Render props** pass functions to allow flexible rendering.  
- **Compound components** share state through context instead of passing props down manually.  
- Choosing the **right pattern** depends on **scalability, maintainability, and component structure needs**.
