## Bootstrap Grid System
---

### What is the Bootstrap Grid System?
---

The <span class="emphasis">Bootstrap Grid</span> System is a <span class="emphasis">flexible layout</span> system that divides the page into <span class="emphasis">12 equal</span> <span class="secondEmphasis">columns</span>. It allows you to create <span class="emphasis">responsive</span> and <span class="secondEmphasis">structured layouts</span> for your webpage.

- Uses <span class="emphasis">CSS Flexbox</span> for alignment.
- Automatically adjusts for different <span class="emphasis">screen sizes</span>.
- You can mix and match column sizes for <span class="emphasis">custom layouts</span>.

---
## **Understanding col-8 and col-4**
---
Bootstrap’s grid system is based on <span class="emphasis">12 columns</span>. The numbers in <span class="codeSnip">col-*</span> classes represent <span class="emphasis">how many</span> of those <span class="emphasis">12 columns</span> the <span class="secondEmphasis">element</span> will take up.

#### **Example:**

```html  
<div class="row">
    <div class="col-8">This div takes up 8 columns</div>
    <div class="col-4">This div takes up 4 columns</div>
</div>  
```

✅ <span class="codeSnip">col-8</span> takes up approximately **2/3** (66.67%) of the total row width.  
✅ <span class="codeSnip">col-4</span> takes up approximately **1/3** (33.33%) of the total row width.  
✅ Since **8 + 4 = 12**, these two elements will fit perfectly in a single row.  

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
            <td class="centeredCell"><span class="codeSnip">col-8</span></td>
            <td class="centeredCell"><span class="tableEmphasis">8 out of 12</span></td>
            <td class="centeredCell"><span class="tableEmphasis">66.67% (≈ 2/3 of the row)</span></td>
        </tr>
        <tr class="tableRow">
            <td class="centeredCell"><span class="codeSnip">col-4</span></td>
            <td class="centeredCell"><span class="tableEmphasis">4 out of 12</span></td>
            <td class="centeredCell"><span class="tableEmphasis">33.33% (≈ 1/3 of the row)</span></td>
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
<br><br>

---
### **Making It Responsive (col-sm-8, col-md-8, etc.)**
---
You can use <span class="emphasis">responsive column classes</span> to <span class="secondEmphasis">change layouts for different screen sizes</span>.

#### **Example:**
```html  
<div class="row">
    <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12">
        This div takes up 8 columns on xl & lg screens, 6 on md, and 12 on sm.
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        This div takes up 4 columns on xl & lg screens, 6 on md, and 12 on sm.
    </div>
</div>  
```

🔹 **On extra-extra-large screens (<span class="codeSnip">xxl</span> ≥ 1400px)** → <span class="codeSnip">col-xxl-8</span> takes **8 columns**, <span class="codeSnip">col-xxl-4</span> takes **4 columns** (8+4=12).  
🔹 **On extra-large screens (<span class="codeSnip">xl</span> ≥ 1200px)** → <span class="codeSnip">col-xl-8</span> takes **8 columns**, <span class="codeSnip">col-xl-4</span> takes **4 columns** (8+4=12).  
🔹 **On large screens (<span class="codeSnip">lg</span> ≥ 992px)** → <span class="codeSnip">col-lg-8</span> takes **8 columns**, <span class="codeSnip">col-lg-4</span> takes **4 columns** (8+4=12).  
🔹 **On medium screens (<span class="codeSnip">md</span> ≥ 768px)** → <span class="codeSnip">col-md-6</span> makes both divs take **6 columns each** (6+6=12).  
🔹 **On small screens (<span class="codeSnip">sm</span> ≥ 576px)** → Both divs take **12 columns each**, stacking on top of each other.  

---
### **Screen Size Breakpoints**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Screen Size</th>
            <th class="tableCellHeader">Class Prefix</th>
            <th class="tableCellHeader">Min Width</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Extra Small (xs)</span></td>
            <td class="tableCell"><span class="codeSnip">col-*</span> (no prefix)</td>
            <td class="centeredCell"><span class="tableEmphasis">&lt;576px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Small (sm)</span></td>
            <td class="tableCell"><span class="codeSnip">col-sm-*</span></td>
            <td class="centeredCell"><span class="tableEmphasis">≥576px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Medium (md)</span></td>
            <td class="tableCell"><span class="codeSnip">col-md-*</span></td>
            <td class="centeredCell"><span class="tableEmphasis">≥768px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Large (lg)</span></td>
            <td class="tableCell"><span class="codeSnip">col-lg-*</span></td>
            <td class="centeredCell"><span class="tableEmphasis">≥992px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Extra Large (xl)</span></td>
            <td class="tableCell"><span class="codeSnip">col-xl-*</span></td>
            <td class="centeredCell"><span class="tableEmphasis">≥1200px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><span class="tableEmphasis">Extra Extra Large (xxl)</span></td>
            <td class="tableCell"><span class="codeSnip">col-xxl-*</span></td>
            <td class="centeredCell"><span class="tableEmphasis">≥1400px</span></td>
        </tr>
    </tbody>
</table>

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
            <td class="centeredCell"><span class="codeSnip">col-8</span></td>
            <td class="centeredCell"><span class="tableEmphasis">8/12 columns</span> (66.67%) ≈ <span class="tableEmphasis">2/3</span> of the <span class="tableEmphasis">row</span></td>
            <td class="centeredCell">Stays on the same row if total ≤ 12</td>
        </tr>
        <tr class="tableRow">
            <td class="centeredCell"><span class="codeSnip">col-4</span</td>
            <td class="centeredCell"><span class="tableEmphasis">4/12 columns</span> (33.33%) ≈ <span class="tableEmphasis">1/3 of row</span></td>
            <td class="centeredCell">Stays on the same row if total ≤ 12</td>
        </tr>
    </tbody>
</table>
