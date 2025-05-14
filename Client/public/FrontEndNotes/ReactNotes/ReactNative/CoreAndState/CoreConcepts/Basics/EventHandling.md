## **Event Handling**
---
React Native handles **user interactions** using built-in event handlers such as **onPress**, **onChangeText**, and **onSwipe**.

---
### **Handling Button Clicks**
---
The **onPress** event is used to **detect when a button is tapped**.

✅ **Example: Handling Button Press**

---

```javascript
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default ClickCounter;
```
---
### **Handling Text Input Changes**
---
The **onChangeText** event allows you to **capture user input** in a text field.

✅ **Example: Handling Text Input**

---

```javascript
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter your name:</Text>
      <TextInput
        placeholder="Type here..."
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Hello, {name}!</Text>
    </View>
  );
}

export default NameInput;
```
---
### **Handling Gestures & Touch Events**
---
React Native provides components like **TouchableOpacity** and **TouchableHighlight** for handling **tap gestures**.

✅ **Example: Using TouchableOpacity**

---

```javascript
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function TouchableExample() {
  return (
    <View>
      <TouchableOpacity onPress={() => alert("Box Pressed!")}>
        <View style={{ padding: 20, backgroundColor: "lightblue" }}>
          <Text>Tap Me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default TouchableExample;
```
---
### **Common Event Handling Methods**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Event</th>
            <th class="tableCellHeader">Description</th>
            <th class="tableCellHeader">Example Component</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>onPress</strong></td>
            <td class="tableCell">Handles button or touch events</td>
            <td class="tableCell"><span class="codeSnip">Button, TouchableOpacity</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>onChangeText</strong></td>
            <td class="tableCell">Handles text input changes</td>
            <td class="tableCell"><span class="codeSnip">TextInput</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>onSwipe</strong></td>
            <td class="tableCell">Handles swipe gestures</td>
            <td class="tableCell"><span class="codeSnip">Gesture Recognizers</span></td>
        </tr>
    </tbody>
</table>

---
### **Conclusion**
---
- **onPress** is used for **button clicks and touch gestures**.  
- **onChangeText** captures **text input updates**.  
- **Touchable components** handle **gestures and user interactions** effectively.  
