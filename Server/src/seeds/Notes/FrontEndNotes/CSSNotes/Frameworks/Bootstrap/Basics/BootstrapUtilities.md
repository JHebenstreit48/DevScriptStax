## Bootstrap Utilities
---

### Finding Bootstrap Utilities & Class Names
---

Bootstrap provides built-in utility classes that control spacing, colors, typography, and more.

---
#### How to Find Bootstrap Utilities
---

📌 Go to Bootstrap's Docs → Click on the **"Utilities"** dropdown.  
🔹 Examples:

- **Colors** → Lists available text/background colors.
- **Spacing** → Predefined padding/margin classes.
- **Typography** → Controls font styles and sizes.

---

## **Bootstrap Colors**
---
Bootstrap provides predefined color classes for **text, backgrounds, and borders**.

---
### **Understanding Bootstrap Colors**
---

- **Primary** → Typically represents **blue**.
- **Success** → Typically represents **green**.
- **Danger** → Typically represents **red**.
- **Warning** → Typically represents **yellow/orange**.
- **Info** → Typically represents **light blue**.
- **Dark** → Typically represents **dark gray/black**.
- **Light** → Typically represents **light gray/white**.

---
### **Bootstrap Default Color Classes**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Class</th>
            <th class="tableCellHeader">Text Color</th>
            <th class="tableCellHeader">Background Color</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-primary</span></td>
            <td class="tableCell"><span class="tableEmphasis">Blue</span></td>
            <td class="tableCell"><span class="codeSnip">bg-primary</span> (Blue Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-success</span></td>
            <td class="tableCell"><span class="tableEmphasis">Green</span></td>
            <td class="tableCell"><span class="codeSnip">bg-success</span> (Green Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-danger</span></td>
            <td class="tableCell"><span class="tableEmphasis">Red</span></td>
            <td class="tableCell"><span class="codeSnip">bg-danger</span> (Red Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-warning</span></td>
            <td class="tableCell"><span class="tableEmphasis">Yellow/Orange</span></td>
            <td class="tableCell"><span class="codeSnip">bg-warning</span> (Yellow/Orange Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-info</span></td>
            <td class="tableCell"><span class="tableEmphasis">Light Blue</span></td>
            <td class="tableCell"><span class="codeSnip">bg-info</span> (Light Blue Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-dark</span></td>
            <td class="tableCell"><span class="tableEmphasis">Dark Gray/Black</span></td>
            <td class="tableCell"><span class="codeSnip">bg-dark</span> (Dark Gray/Black Background)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">text-light</span></td>
            <td class="tableCell"><span class="tableEmphasis">Light Gray/White</span></td>
            <td class="tableCell"><span class="codeSnip">bg-light</span> (Light Gray/White Background)</td>
        </tr>
    </tbody>
</table>

---
## **Bootstrap Spacing Utilities**
---
Bootstrap provides predefined classes for **padding and margins**.

---
### **Spacing Class Structure**
---

- **{property}{sides}-{size}**

<span class="bullet1">

  - **p** → Padding  
  - **m** → Margin  
  - **x** → Left & Right  
  - **y** → Top & Bottom  
  - **t** → Top  
  - **b** → Bottom  
  - **l** → Left  
  - **r** → Right  
  - **size** → A number from **0 to 5** that determines spacing  

</span>

---
## **Bootstrap Spacing Scale**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Size</th>
            <th class="tableCellHeader">Pixels</th>
            <th class="tableCellHeader">rem</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">0</span></td>
            <td class="tableCell">0px</td>
            <td class="tableCell">0rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">1</span></td>
            <td class="tableCell">4px</td>
            <td class="tableCell">0.25rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">2</span></td>
            <td class="tableCell">8px</td>
            <td class="tableCell">0.5rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">3</span></td>
            <td class="tableCell">16px</td>
            <td class="tableCell">1rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">4</span></td>
            <td class="tableCell">24px</td>
            <td class="tableCell">1.5rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">5</span></td>
            <td class="tableCell">48px</td>
            <td class="tableCell">3rem</td>
        </tr>
    </tbody>
</table>

---

### **Examples of Bootstrap Spacing Classes**
---
#### **1. Padding on All Sides**

```html  
<div class="p-5">This div has 48px (3rem) padding on all sides.</div>
```

#### **2. Padding on the Y-Axis (Top & Bottom)**

```html  
<div class="py-5">This div has 48px padding on the top and bottom.</div>
```

#### **3. Padding on the X-Axis (Left & Right)**

```html  
<div class="px-5">This div has 48px padding on the left and right.</div>
```

#### **4. Margin on All Sides**

```html  
<div class="m-3">This div has 16px margin on all sides.</div>
```

---

### **Summary of Bootstrap Spacing Classes**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Class</th>
            <th class="tableCellHeader">Meaning</th>
            <th class="tableCellHeader">Example</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">p-5</span></td>
            <td class="tableCell">Padding on all sides (48px)</td>
            <td class="tableCell"><span class="codeSnip">&lt;div class="p-5"&gt;...&lt;/div&gt;</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">py-5</span></td>
            <td class="tableCell">Padding on top & bottom (48px)</td>
            <td class="tableCell"><span class="codeSnip">&lt;div class="py-5"&gt;...&lt;/div&gt;</span></td>
        </tr>
    </tbody>
</table>

## **Bootstrap Collapse Utility**
---
The **collapse** class is used to **show and hide content dynamically** without JavaScript.

### **How collapse Works**
---
- **Allows toggling content visibility** with a button or link.
- **Requires data-bs-toggle="collapse"** for functionality.
- **Uses id to link the trigger element to the collapsible content.

---

### **Example of Basic Collapse**
---
```html  
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
    This content will appear when the button is clicked.
</div>
```

✅ Clicking the button **toggles the visibility** of the <div>.  

---
### **Making a Section Expand by Default**
---
To have content **visible by default**, add show inside the collapse class.

```html  
<div id="exampleCollapse" class="collapse show">
    This content is visible by default.
</div>
```

✅ The **show class** makes the section **expanded on page load**.

---

### **Using collapse with Multiple Elements**
---
```html  
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target=".multiCollapse">
    Toggle Both Sections
</button>
<div class="collapse multiCollapse">Content 1</div>
<div class="collapse multiCollapse">Content 2</div>
```

✅ This **toggles multiple sections** at the same time.

---
## **Bootstrap data-toggle Attribute (Deprecated)**
---
The **data-toggle** attribute was used in **Bootstrap 4 and earlier** to enable JavaScript-based behaviors **without custom JavaScript**.

### **Why Was data-toggle Deprecated?**
---
- ❌ **Deprecated in Bootstrap 5** → **Replaced by <span class="codeSnip">data-bs-toggle</span>**
- ✅ **Still used in Bootstrap 4 and below**
- **The new format ensures consistency with Bootstrap 5’s naming conventions.**

---
### **Old vs. New Syntax**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Version</th>
            <th class="tableCellHeader">Old (Bootstrap 4)</th>
            <th class="tableCellHeader">New (Bootstrap 5)</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Collapse Example</span></td>
            <td class="tableCell">
                <span class="codeSnip">data-toggle="collapse"</span>
            </td>
            <td class="tableCell">
                <span class="codeSnip">data-bs-toggle="collapse"</span>
            </td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Modal Example</span></td>
            <td class="tableCell">
                <span class="codeSnip">data-toggle="modal"</span>
            </td>
            <td class="tableCell">
                <span class="codeSnip">data-bs-toggle="modal"</span>
            </td>
        </tr>
    </tbody>
</table>

---
### **Example Using data-bs-toggle**
---
```html  
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
    This content will appear when the button is clicked.
</div>
```

✅ **This is the correct Bootstrap 5 syntax.**  
❌ **Do not use data-toggle in Bootstrap 5.**  

---
## **Bootstrap data-target Attribute (Deprecated)**
---

The **data-target** attribute was used in **Bootstrap 4 and earlier** to define the **element that should be affected by data-toggle**.  

### **Why Was data-target Deprecated?**
---

- ❌ **Deprecated in Bootstrap 5** → **Replaced by <span class="codeSnip">data-bs-target</span>**.  
- ✅ **Still used in Bootstrap 4 and below**.  
- **The new format follows Bootstrap 5’s naming convention for consistency**.  

---
### **Old vs. New Syntax**
---

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Version</th>
            <th class="tableCellHeader">Old (Bootstrap 4)</th>
            <th class="tableCellHeader">New (Bootstrap 5)</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Collapse Example</span></td>
            <td class="tableCell">
                <span class="codeSnip">data-target="#exampleCollapse"</span>
            </td>
            <td class="tableCell">
                <span class="codeSnip">data-bs-target="#exampleCollapse"</span>
            </td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Modal Example</span></td>
            <td class="tableCell">
                <span class="codeSnip">data-target="#myModal"</span>
            </td>
            <td class="tableCell">
                <span class="codeSnip">data-bs-target="#myModal"</span>
            </td>
        </tr>
    </tbody>
</table>

---
### **Example Using data-bs-target**
---
```html  
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#exampleCollapse">
    Toggle Content
</button>
<div id="exampleCollapse" class="collapse">
    This content will appear when the button is clicked.
</div>

✅ **This is the correct Bootstrap 5 syntax.**  
❌ **Do not use <span class="codeSnip">data-target</span> in Bootstrap 5.**  
```

---
