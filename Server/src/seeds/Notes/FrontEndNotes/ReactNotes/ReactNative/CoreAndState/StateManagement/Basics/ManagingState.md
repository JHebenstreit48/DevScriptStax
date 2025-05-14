## **Managing State in React Native**
---
State management is a crucial concept in React Native that determines how data flows and updates within components.

---
### **What is State?**
---
- **State** is an object that holds **dynamic data** and determines a component’s behavior.
- When **state changes**, React **re-renders** the component automatically.

✅ **Example: Basic State Management with `useState`**

javascript
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

---
### **State Updates & Asynchronous Behavior**
---
- **State updates are asynchronous**, meaning React batches updates for performance.
- Use the **functional update pattern** when the next state depends on the previous state.

✅ **Example: Functional Update Pattern**

javascript
setCount((prevCount) => prevCount + 1);

---
### **Multiple State Variables**
---
React allows managing multiple state values in a single component.

✅ **Example: Managing Multiple State Variables**

javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Button title="Increase Age" onPress={() => setAge(age + 1)} />
    </View>
  );
}

export default Profile;

---
### **State vs. Props**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">State</th>
            <th class="tableCellHeader">Props</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Definition</strong></td>
            <td class="tableCell">Managed within the component</td>
            <td class="tableCell">Passed from parent to child</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Mutability</strong></td>
            <td class="tableCell">Can be modified</td>
            <td class="tableCell">Read-only (immutable)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Usage</strong></td>
            <td class="tableCell">Used for dynamic data</td>
            <td class="tableCell">Used for passing data</td>
        </tr>
    </tbody>
</table>

---
### **Conclusion**
---
- **State is used to store dynamic data that changes over time.**
- **`useState` is the primary React Hook for managing state.**
- **State changes trigger re-renders.**
- **Use the functional update pattern when necessary.**
