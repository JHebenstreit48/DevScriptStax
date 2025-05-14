## **Sass Extend & Placeholder Selectors**
---

### **What is @extend in Sass?**
---
The @extend directive allows elements to **share styles without duplicating code**.  
- It **reduces CSS repetition** by merging selectors.  
- Useful for **inheritance-based styling** (e.g., buttons, alerts, common utilities).  

✅ **Example of @extend:**

```scss
.button
  background-color: blue
  color: white
  padding: 10px

.button-primary
  @extend .button
```

✅ **CSS Output:**

```scss
.button, .button-primary
  background-color: blue
  color: white
  padding: 10px
```

---
### **Benefits of @extend**
---
✅ Reduces **duplicate styles** in compiled CSS.  
✅ Keeps styles **organized** with shared rules.  
✅ Ensures **efficient inheritance** for utility classes.  

---
### **What are Placeholder Selectors (%placeholder)?**
---
Placeholders (%) work **like @extend** but **do not appear in the final CSS** unless used.

#### **Why Use %placeholder Instead of @extend?**
- **Prevents unused styles** from appearing in CSS.  
- **Keeps CSS clean**—only added when extended.  

✅ **Example:**

```scss
%button-styles
  background-color: blue
  color: white
  padding: 10px

.button-primary
  @extend %button-styles
```

✅ **CSS Output (Only When Used):**

```scss
.button-primary
  background-color: blue
  color: white
  padding: 10px
```

✅ **Unlike @extend, placeholders (%) do not generate unused CSS.**

---
### **Comparing @extend vs. Mixins**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">@extend</th>
            <th class="tableCellHeader">@mixin</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Reduces Duplicate CSS?</strong></td>
            <td class="tableCell">✅ Yes</td>
            <td class="tableCell">❌ No (generates new CSS each time)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Allows Parameters?</strong></td>
            <td class="tableCell">❌ No</td>
            <td class="tableCell">✅ Yes</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Best For</strong></td>
            <td class="tableCell">Reusing styles with inheritance</td>
            <td class="tableCell">Reusable components with dynamic values</td>
        </tr>
    </tbody>
</table>

✅ **Use @extend for shared styles and @mixin for reusable components.**

---
### **Best Practices for Using @extend**
---
✅ **Use placeholders (%) when possible** to avoid generating extra unused styles.  
✅ **Avoid overextending selectors**, as it can lead to **deeply nested CSS**.  
✅ **Use @mixin when variables or arguments are needed** instead of @extend.  

---
### **Common Mistakes with @extend**
---
❌ **Overusing @extend inside deep structures**

```scss
.nav
  @extend .container
```

❌ **Extending classes that change frequently**

```scss
.box
  @extend .old-box-style  /* Risky if .old-box-style changes later */
```

✅ **Correct Usage:**

```scss
%shared-button
  background: blue
  color: white

.button-primary
  @extend %shared-button
```

✅ **Placeholders prevent unnecessary styles from appearing in the final CSS.**

---
### **Conclusion**
---
- **@extend allows elements to inherit styles without duplication.**  
- **Placeholders (%) prevent unused CSS from appearing in the final stylesheet.**  
- **Use @mixin instead of @extend when variables are needed.**  

✅ **Now you understand how to use @extend & Placeholder Selectors in Sass!** 🚀  
