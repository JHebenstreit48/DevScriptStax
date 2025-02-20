## Bootstrap Typography
---

### What is Bootstrap Typography?
---
Bootstrap provides **predefined typography classes** to control **font size, text style, and emphasis**.

- Helps maintain **consistent text styling** across a project.
- Uses **utility classes** for **quick customization**.
- Supports **responsive font scaling** with .fs-* classes.

---

### **Font Size (.fs-*) Classes**
---
Bootstrap provides **six font size classes** to control text size.

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Class</th>
            <th class="tableCellHeader">Size</th>
            <th class="tableCellHeader">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-1</span></td>
            <td class="tableCell">Largest</td>
            <td class="tableCell">Extra-large font (≈ 2.5rem / 40px)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-2</span></td>
            <td class="tableCell">Larger</td>
            <td class="tableCell">Large font (≈ 2rem / 32px)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-3</span></td>
            <td class="tableCell">Medium-Large</td>
            <td class="tableCell">Slightly smaller (≈ 1.75rem / 28px)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-4</span></td>
            <td class="tableCell">Medium</td>
            <td class="tableCell">Standard text size (≈ 1.5rem / 24px)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-5</span></td>
            <td class="tableCell">Small</td>
            <td class="tableCell">Smaller text (≈ 1.25rem / 20px)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">.fs-6</span></td>
            <td class="tableCell">Smallest</td>
            <td class="tableCell">Smallest text (≈ 1rem / 16px)</td>
        </tr>
    </tbody>
</table>

---

### **Small Text (.small) Class**
---
- Makes text **smaller than the surrounding text**.
- Often used for **disclaimers, legal text, or captions**.

#### **Example:**

```html  
<p>This is normal text. <span class="small">This text is smaller.</span></p>
```

---

### **Muted Text (.text-muted)**
---
- Reduces **text opacity** for **less emphasis**.
- Commonly used for **subtle descriptions or secondary content**.

#### **Example:**
html  
<p>This is normal text. <span class="text-muted">This text is muted.</span></p>

✅ The **.text-muted** class applies **a gray color** to de-emphasize text.  

---

### **Key Takeaways**
---
✅ **.fs-* classes** adjust **font sizes** (1 = largest, 6 = smallest).  
✅ **.small makes text smaller** than the default size.  
✅ **.text-muted de-emphasizes text** by reducing contrast.  

---


