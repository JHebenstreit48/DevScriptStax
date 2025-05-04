## Bootstrap Modals

---
### What is a Modal?
---

A **modal** is a **pop-up window** that appears **on top of a webpage** when triggered, typically by a button. It **temporarily disables interaction** with the rest of the website (which is usually **grayed out**) until the user closes the modal or interacts with its content.

📌 **Common Uses for Modals:**

- Displaying **alerts, confirmations, or additional details**.
- Collecting **user input in forms**.
- Showing **login prompts, images, or embedded media**.

---

### **Basic Structure of a Bootstrap Modal**

---

A modal consists of several **key elements** that define its behavior and appearance.

#### **Example:**
<br><br>

```html
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Open Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="close" data-bs-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">This is the modal body content.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
```

✅ Clicking the **"Open Modal"** button triggers the modal.  
✅ Clicking **"Close"** or outside the modal **dismisses it**.

---
## **Key Bootstrap Modal Classes & Attributes**
---

---
### **1. modal**
---

- The **base class** for all Bootstrap modals.
- Must be used with **<span class="codeSnip">modal-dialog</span>** and **<span class="codeSnip">modal-content</span>** for proper structure.

---
### **2. modal-dialog**
---

- Defines the **modal’s positioning and size**.
- Can be customized using classes like:
  - **<span class="codeSnip">modal-lg</span>** → Large modal.
  - **<span class="codeSnip">modal-sm</span>** → Small modal.

---
### **3. modal-content**
---

- **Wrapper for all modal content** (header, body, footer).
- Ensures **proper padding and alignment** inside the modal.

---
### **4. modal-header**
---

- **Container for the modal title & close button.**
- Often contains **<span class="codeSnip">modal-title</span>** and a **"Close"** button.

---
### **5. modal-title**
---

- Defines the **modal’s title**.
- Usually inside **<span class="codeSnip">modal-header</span>**.

---
### **6. modal-body**
---

- Holds the **main content** of the modal.
- Can include **text, images, forms, or other UI elements**.

---
### **7. modal-footer**
---

- Typically contains **action buttons** (e.g., "Close" or "Submit").
- Helps organize buttons at the **bottom of the modal**.

---
## **Bootstrap Modal Attributes**
---

### **8. data-bs-toggle="modal"**
---

- Tells Bootstrap **which element should trigger the modal**.
- **Replaced <span class="codeSnip">data-toggle="modal"</span> in Bootstrap 5.**

---
### **9. data-bs-target**
---

- Specifies **which modal to open** when clicking a trigger element.
- Example:
  - **<span class="codeSnip">data-bs-target="#exampleModal"</span>** → Opens modal with **<span class="codeSnip">id="exampleModal"</span>**.
- **Replaced <span class="codeSnip">data-target="#exampleModal"</span> in Bootstrap 5.**

---
### **10. modal-fade**
---

- Adds a **fade-in animation** when opening the modal.
- Use **<span class="codeSnip">class="modal fade"</span>** to enable smooth transitions.

---
### **11. tabindex="-1"**
---

- Prevents keyboard focus from interacting with background elements **while modal is open**.
- Ensures **accessibility and proper keyboard navigation**.

---
### **12. class="close"**
---

- Used for the **close button** inside the modal.
- Usually placed in **<span class="codeSnip">modal-header</span>**.
- **Replaced by <span class="codeSnip">btn-close</span> in Bootstrap 5.**

---
### **13. data-bs-dismiss="modal"**
---

- Closes the modal when clicking an element with this attribute.
- **Replaced <span class="codeSnip">data-dismiss="modal"</span> in Bootstrap 5.**
- Example:

```html
<button class="btn btn-secondary" data-bs-dismiss="modal">
    Close
</button>
```

---
## **Bootstrap 4 vs. Bootstrap 5: Modal Changes**
---

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">Bootstrap 4</th>
            <th class="tableCellHeader">Bootstrap 5</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Trigger Attribute</span></td>
            <td class="tableCell"><span class="codeSnip">data-toggle="modal"</span></td>
            <td class="tableCell"><span class="codeSnip">data-bs-toggle="modal"</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Target Attribute</span></td>
            <td class="tableCell"><span class="codeSnip">data-target="#modalID"</span></td>
            <td class="tableCell"><span class="codeSnip">data-bs-target="#modalID"</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Dismiss Attribute</span></td>
            <td class="tableCell"><span class="codeSnip">data-dismiss="modal"</span></td>
            <td class="tableCell"><span class="codeSnip">data-bs-dismiss="modal"</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Close Button Class</span></td>
            <td class="tableCell"><span class="codeSnip">class="close"</span></td>
            <td class="tableCell"><span class="codeSnip">class="btn-close"</span></td>
        </tr>
    </tbody>
</table>

---
