## **Sass Operators & Calculations**
---

### **What Are Operators in Sass?**
---
Operators allow mathematical and logical calculations inside Sass.  
- They make dynamic styling easier by allowing **calculations, conditions, and logic.**  
- Operators work with **numbers, colors, strings, and boolean values.**  

✅ **Types of Operators in Sass:**
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Type</th>
            <th class="tableCellHeader">Operators</th>
            <th class="tableCellHeader">Example</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Arithmetic</strong></td>
            <td class="tableCell"><span class="codeSnip">+</span>, <span class="codeSnip">-</span>, <span class="codeSnip">*</span>, <span class="codeSnip">/</span>, <span class="codeSnip">%</span></td>
            <td class="tableCell"><span class="codeSnip">width: 100% / 3</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Comparison</strong></td>
            <td class="tableCell"><span class="codeSnip">==</span>, <span class="codeSnip">!=</span>, <span class="codeSnip"><</span>, <span class="codeSnip">></span>, <span class="codeSnip"><=</span>, <span class="codeSnip">>=</span></td>
            <td class="tableCell"><span class="codeSnip">@if $size > 10px</span></td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Boolean (Logic)</strong></td>
            <td class="tableCell"><span class="codeSnip">and</span>, <span class="codeSnip">or</span>, <span class="codeSnip">not</span></td>
            <td class="tableCell"><span class="codeSnip">@if ($dark-theme and $enabled)</span></td>
        </tr>
    </tbody>
</table>

---
### **1️⃣ Arithmetic Operators in Sass**
---
Arithmetic operators allow **basic math operations** inside styles.

#### **Example: Multiplication & Division**
```scss
$base-size: 10px

.box
  width: $base-size * 2  /* 20px */
  margin: $base-size / 2 /* 5px */
```

✅ **Useful for setting dynamic widths, padding, and margins.**

---
### **2️⃣ Operators in Color Functions**
---
Operators work with color functions to create **lighter or darker color variations.**  

#### **Example: Lightening & Darkening Colors**
```scss
$primary: blue

.button
  background-color: lighten($primary, 10%)
  border-color: darken($primary, 5%)
```

✅ **This allows colors to be dynamically adjusted within styles.**

---
### **3️⃣ Comparison Operators in Conditional Logic**
---
Comparison operators **evaluate conditions** in @if statements.  

#### **Example: Changing Font Size Based on a Variable**

```scss
$size: 12px

@if $size > 10px
  .box
    font-size: $size
```

✅ **This ensures certain styles only apply when conditions are met.**

---
### **4️⃣ Boolean Operators in Sass**
---
Boolean operators (and, or, not) allow **logic-based styling.**

#### **Example: Applying Styles Based on Multiple Conditions**
```scss
$dark-theme: true
$enabled: true

@if ($dark-theme and $enabled)
  body
    background: black
    color: white
```

✅ **This ensures styles are only applied when both conditions are met.**

---
### **Best Practices for Using Operators in Sass**
---
✅ **Use arithmetic for calculations instead of hardcoding values.**  
✅ **Avoid dividing by zero (/ 0 will cause errors).**  
✅ **Use comparison operators for responsive design logic (@if).**  

---
### **Conclusion**
---
- **Operators allow calculations, logic, and conditions in Sass.**  
- **Arithmetic operators (+, -, *, /, %) simplify calculations.**  
- **Comparison and boolean operators make styles dynamic.**  
