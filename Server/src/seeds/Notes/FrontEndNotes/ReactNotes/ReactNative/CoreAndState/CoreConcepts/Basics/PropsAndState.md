## **Props & State**
---
React Native uses **props** and **state** to manage **data flow and component behavior**.

---
### **Props: Passing Data to Components**
---
Props (short for **properties**) are **read-only** and allow **data to be passed from a parent component to a child component**.

✅ **Example: Using Props**

---

```javascript
import React from "react";
import { Text, View } from "react-native";

function Greeting(props) {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
}

export default function App() {
  return (
    <View>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </View>
  );
}
```

---
### **State: Managing Component Data**
---

State allows components to **store and update data** dynamically.

✅ **Example: Using State with <span class="codeSnip">useState</span>**  

---

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Counter;
```

---
### **Props vs State: Key Differences**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">Props</th>
            <th class="tableCellHeader">State</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Data Flow</strong></td>
            <td class="tableCell">Passed from parent to child</td>
            <td class="tableCell">Managed within the component</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Mutability</strong></td>
            <td class="tableCell">Immutable (cannot be changed)</td>
            <td class="tableCell">Mutable (can be updated)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Scope</strong></td>
            <td class="tableCell">Available in child components</td>
            <td class="tableCell">Local to the component</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Usage</strong></td>
            <td class="tableCell">Used to pass static data</td>
            <td class="tableCell">Used for dynamic changes</td>
        </tr>
    </tbody>
</table>

---
### **Conclusion**
---
- **Props** pass **data from parent to child** but **cannot be modified**.  
- **State** is **local** to a component and can be **updated dynamically**.  
- Understanding props and state is **essential for managing data in React Native**.  
