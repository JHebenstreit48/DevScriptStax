## **Core Concepts**
---
### **Components & Styling**
---
React Native applications are built using **components**, which serve as **modular building blocks**. These components can be **built-in (native)** or **custom components**.

---
### **Built-in Components**
---
React Native provides **predefined UI components** that translate into **native UI elements**:

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Component</th>
            <th class="tableCellHeader">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong><span class="codeSnip">&lt;View&gt;</span></strong></td>
            <td class="tableCell">A container like a <span class="codeSnip">&lt;div&gt;</span> in HTML, used for layout.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong><span class="codeSnip">&lt;Text&gt;</span></strong></td>
            <td class="tableCell">Used for displaying text, similar to <span class="codeSnip">&lt;p&gt;</span> or <span class="codeSnip">&lt;span&gt;</span>.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong><span class="codeSnip">&lt;Image&gt;</span></strong></td>
            <td class="tableCell">Displays images natively.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong><span class="codeSnip">&lt;ScrollView&gt;</span></strong></td>
            <td class="tableCell">A scrollable container for larger content.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong><span class="codeSnip">&lt;TextInput&gt;</span></strong></td>
            <td class="tableCell">Allows users to enter text.</td>
        </tr>
    </tbody>
</table>

---
### **Example: Creating a Simple Component**
---
javascript
import React from "react";
import { View, Text } from "react-native";

function Welcome() {
  return (
    <View>
      <Text>Welcome to React Native!</Text>
    </View>
  );
}

export default Welcome;

---
### **Styling Components**
---
React Native **does not use CSS**. Instead, it uses the **StyleSheet API**.

✅ **Example: Using the StyleSheet API**
---
javascript
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});

function StyledComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled Text</Text>
    </View>
  );
}

export default StyledComponent;

---
### **Conclusion**
---
- **React Native components are modular building blocks.**
- **Uses a different approach to styling (StyleSheet API).**
- **Common built-in components include View, Text, Image, and ScrollView.**
