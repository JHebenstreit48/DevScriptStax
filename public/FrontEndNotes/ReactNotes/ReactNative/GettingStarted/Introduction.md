## **Getting Started**
---
### **Introduction**
---
<span class="emphasis">React Native</span> enables developers to build **mobile applications** using **JavaScript** and **React**. It allows for **cross-platform development** on both **iOS** and **Android** from a **single codebase**.

---
### **What is React Native?**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">React.js</th>
            <th class="tableCellHeader">React Native</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Purpose</strong></td>
            <td class="tableCell">Builds web applications</td>
            <td class="tableCell">Builds mobile applications</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Platform</strong></td>
            <td class="tableCell">Web (Browsers)</td>
            <td class="tableCell">iOS & Android</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Rendering</strong></td>
            <td class="tableCell">Uses React-DOM to render HTML & CSS</td>
            <td class="tableCell">Compiles to native UI elements</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Access to Native APIs</strong></td>
            <td class="tableCell">Limited (browser APIs only)</td>
            <td class="tableCell">Full access (e.g., Camera, GPS, etc.)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Bridge Mechanism</strong></td>
            <td class="tableCell">Directly manipulates the DOM</td>
            <td class="tableCell">Uses a JavaScript-to-Native bridge</td>
        </tr>
    </tbody>
</table>

---
### **Games vs Non-Game Applications in React Native**
---
React Native’s suitability for games depends on the complexity and performance requirements of the game.

#### **Games**
- Best for lightweight, 2D games or games with simple interactivity.
- Examples: Quiz games, card games, turn-based games.
- Limited for graphics-intensive or real-time 3D games due to performance constraints.

#### **Non-Game Applications**
- Ideal for creating cross-platform mobile apps.
- Examples: Messaging apps, e-commerce platforms, productivity tools, or social networking apps.
- Offers seamless integration with native mobile APIs like Camera and Geolocation.

---
### **Setup & Installation**
---
React Native provides **two primary ways** to create a new project:

1. **React Native CLI** – Full control over native code.
2. **Expo CLI** – Simplifies development but has limitations.

#### **Using React Native CLI**
1. Ensure dependencies are installed.
2. Create a new project:

```shell  
npx react-native init MyReactNativeApp  
```

3. Navigate to the project directory and run:

- **For Android:**

```shell  
  npx react-native run-android  
```

- **For iOS:**  
```shell  
  npx react-native run-ios  
```

💡 **Tip:** Ensure an **Android Emulator or iOS Simulator** is set up.

#### **Using Expo CLI**
1. Install Expo CLI.
2. Create a new project:

```shell  
npx expo-cli init MyExpoApp  
```

3. Start the project:

```shell  
npx expo start  
```

4. Use the **Expo Go app** to scan the QR code and preview your app.

---
### **Conclusion**
---
- **React Native allows mobile development with JavaScript.**  
- **Two installation methods:** React Native CLI (full control) & Expo CLI (easier setup).  
- **React.js and React Native differ in platform, rendering, and native API access.**  
