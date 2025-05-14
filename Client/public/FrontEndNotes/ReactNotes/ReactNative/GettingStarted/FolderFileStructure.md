## **Folder Structure & Best Practices**
---
A well-organized folder structure improves **maintainability** and **scalability** in React Native projects.

---
### **Recommended Folder Structure**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Folder</th>
            <th class="tableCellHeader">Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>/src</strong></td>
            <td class="tableCell">Contains all source code.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/components</strong></td>
            <td class="tableCell">Reusable UI components.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/screens</strong></td>
            <td class="tableCell">Application screens.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/assets</strong></td>
            <td class="tableCell">Images, fonts, and static assets.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/navigation</strong></td>
            <td class="tableCell">Handles app routing and navigation logic.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/services</strong></td>
            <td class="tableCell">Handles API calls and business logic.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/context</strong></td>
            <td class="tableCell">Manages global state using React Context API.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>/styles</strong></td>
            <td class="tableCell">Contains global styles, themes, and reusable stylesheets.</td>
        </tr>
    </tbody>
</table>

---
### **Best Practices for Organizing Files**
---
✅ **Follow a modular folder structure** for scalability.  
✅ **Separate components from screens** to improve **code reuse**.  
✅ **Store assets like images and fonts in a dedicated folder** for easy access.  
✅ **Use a centralized navigation system** to manage app routing efficiently.  
✅ **Group related functionality into separate folders** (e.g., services, context, styles).  

---
### **Code Organization Tips**
---
#### **1. Separate Business Logic from UI**
- Keep **business logic** (API calls, data processing) in **services/**.
- UI components should focus only on **rendering** and **state management**.

#### **2. Use Constants & Config Files**
- Store **API URLs**, **theme settings**, and **static values** in a **config file**.
- Example:

```javascript  
export const API_BASE_URL = "https://api.example.com";  
```

#### **3. Use Path Aliases for Cleaner Imports**
- Instead of:

```javascript  
import MyComponent from "../../components/MyComponent";  
```

- Use path aliases:

```javascript  
import MyComponent from "@/components/MyComponent";  
```

---
### **Conclusion**
---
- **A clear folder structure enhances scalability and maintainability.**  
- **Using best practices ensures better code organization.**  
- **Path aliases, modular components, and separate logic layers improve efficiency.**  
