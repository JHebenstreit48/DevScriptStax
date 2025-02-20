## Bootstrap Grid System
---

### What is the Bootstrap Grid System?
---

The **Bootstrap Grid System** is a **flexible layout system** that divides the page into **12 equal columns**. It allows you to create **responsive** and **structured layouts** for your webpage.

- Uses **CSS Flexbox** for alignment.
- Automatically adjusts for **different screen sizes**.
- You can mix and match column sizes for **custom layouts**.

---

## **Understanding col-8 and col-4**
---
Bootstrap’s grid system is based on **12 columns**. The numbers in col-* classes represent **how many of those 12 columns** the element will take up.

#### **Example:**

```html  
<div class="row">
    <div class="col-8">This div takes up 8 columns</div>
    <div class="col-4">This div takes up 4 columns</div>
</div>  
```

✅ **<span class="codeSnip">col-8</span> takes up approximately 2/3 (66.67%) of the total row width.**  
✅ **<span class="codeSnip">col-4</span> takes up approximately 1/3 (33.33%) of the total row width.**  
✅ Since **8 + 4 = 12**, these two elements will fit perfectly in a single row.  

---

### **Breaking It Down**
---

#### **1. The .row Class**

- A **row** is used to group columns together.
- Columns **must** be placed inside a row to align properly.

#### **2. The .col-8 Class**
- Takes up **8 out of 12** columns (**≈ 66.67% of the row width**).
- The remaining columns can be used by other elements.

#### **3. The .col-4 Class**
- Takes up **4 out of 12** columns (**≈ 33.33% of the row width**).
- Since **8 + 4 = 12**, the two elements fit **perfectly** in one row.

---

### **Visual Representation of col-8 and col-4**
---

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Column Class</th>
            <th class="tableCellHeader">Grid Space Taken</th>
            <th class="tableCellHeader">Percentage of Row</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>col-8</strong></td>
            <td class="tableCell">8 out of 12</td>
            <td class="tableCell"><strong>66.67% (≈ 2/3 of the row)</strong></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>col-4</strong></td>
            <td class="tableCell">4 out of 12</td>
            <td class="tableCell"><strong>33.33% (≈ 1/3 of the row)</strong></td>
        </tr>
    </tbody>
</table>

If <span class="codeSnip">col-8</span> and <span class="codeSnip">col-4</span> were used together in a row, the total would be **12 columns**, meaning they would fit **perfectly** in a single line.

---

### **What Happens If You Exceed 12 Columns?**
---

If your total column count **exceeds 12**, Bootstrap will force elements to **wrap to the next line**.
<br><br>

#### **Example (Will Wrap to the Next Line)**

```html  
<div class="row">
    <div class="col-8">This div takes up 8 columns</div>
    <div class="col-6">This div takes up 6 columns</div>
    <!-- 8 + 6 = 14 (too big) -->
</div>  
```

💡 Since 8 + 6 = 14 (which is **greater than 12**), the second div will **move to the next row automatically**.

---

### **Making It Responsive (col-sm-8, col-md-8, etc.)**
---

You can use **responsive column classes** to **change layouts for different screen sizes**.

#### **Example:**
---

```html  
<div class="row">
    <div class="col-md-8 col-sm-12">
    This div takes 8 columns on medium screens but 12 on small screens
    </div>
    <div class="col-md-4 col-sm-12">
    This div takes 4 columns on medium screens but 12 on small screens
    </div>
</div>
```  

🔹 **On medium screens (<span class="codeSnip">md</span>) and larger (≥768px)** → <span class="codeSnip">col-md-8</span> takes **8 columns**, <span class="codeSnip">col-md-4</span> takes **4 columns** (8+4=12).  
🔹 **On small screens (<span class="codeSnip">sm</span>)** → Both divs take **12 columns**, stacking on top of each other.

---

### **Key Takeaways**
---

✅ <span class="codeSnip">col-8</span> → Takes **8 out of 12** columns (**≈ 66.67% = 2/3 of the row width**).  
✅ <span class="codeSnip">col-4</span> → Takes **4 out of 12** columns (**≈ 33.33% = 1/3 of the row width**).  
✅ **Columns must be inside a <span class="codeSnip">.row</span>** for proper alignment.  
✅ If **column count exceeds 12**, Bootstrap **forces wrapping** to the next line.  
✅ Use **responsive classes (<span class="codeSnip">col-md-8</span>, <span class="codeSnip">col-sm-12</span>)** to change layouts based on screen size.

---

### **Summary Table**
---

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Column Class</th>
            <th class="tableCellHeader">Grid Space Taken</th>
            <th class="tableCellHeader">Behavior</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="codeSnip">col-8</span></td>
            <td class="tableCell"><span class="tableEmphasis">8/12 columns</span> (66.67%) ≈ <span class="tableEmphasis">2/3</span> of the <span class="tableEmphasis">row</span></td>
            <td class="tableCell">Stays on the same row if total ≤ 12</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>col-4</strong></td>
            <td class="tableCell">4/12 columns (33.33%) ≈ <strong>1/3 of row</strong></td>
            <td class="tableCell">Stays on the same row if total ≤ 12</td>
        </tr>
    </tbody>
</table>
