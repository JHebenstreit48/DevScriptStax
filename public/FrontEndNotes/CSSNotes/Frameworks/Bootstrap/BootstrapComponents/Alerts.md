## Bootstrap Alerts
---

### What are Bootstrap Alerts?
---
Bootstrap provides **pre-styled alert components** for **notifications, warnings, and messages**.

- **Easily customizable** using utility classes.
- **Supports dismissible alerts** with JavaScript.
- Uses **color-coded classes** for **different alert types**.

---

### **Bootstrap Alert Classes**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Class</th>
            <th class="tableCellHeader">Color</th>
            <th class="tableCellHeader">Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.alert-primary</span></td>
            <td class="tableCell">Blue</td>
            <td class="tableCell">For **important messages**</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.alert-success</span></td>
            <td class="tableCell">Green</td>
            <td class="tableCell">For **successful actions**</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.alert-warning</span></td>
            <td class="tableCell">Yellow/Orange</td>
            <td class="tableCell">For **cautionary messages**</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.alert-danger</span></td>
            <td class="tableCell">Red</td>
            <td class="tableCell">For **errors or critical issues**</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.alert-info</span></td>
            <td class="tableCell">Light Blue</td>
            <td class="tableCell">For **informational messages**</td>
        </tr>
    </tbody>
</table>

---

### **Example Alert**
---

```html  
<div class="alert alert-warning">
    This is a warning alert!
</div>
```

✅ This creates a **yellow/orange** alert for **warnings**.  

---

### **Dismissible Alerts**
---
You can add a **close button** to dismiss alerts.

```html  
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error:</strong> Something went wrong!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

✅ Adding **.alert-dismissible** makes the alert **closable** with a button.  

---

### **Key Takeaways**
---
✅ **Alerts use .alert-* classes** for different **message types**.  
✅ **Alerts can be dismissible** using **.alert-dismissible**.  
✅ **Each alert type has a distinct color** (e.g., success = green, danger = red).  

---
