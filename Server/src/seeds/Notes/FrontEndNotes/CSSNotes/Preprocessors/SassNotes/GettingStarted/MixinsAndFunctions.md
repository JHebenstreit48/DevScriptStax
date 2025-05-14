## **Sass Mixins & Functions**
---

### **What are Mixins in Sass?**
---
Mixins allow you to **reuse groups of styles** without repeating code.  
- They accept **parameters** for dynamic styling.  
- Unlike @extend, mixins **do not merge selectors**, preventing unintended styles.  
- They are useful for **responsive design, utility styles, and vendor prefixes**.  

✅ **Example of a Mixin:**

```scss
@mixin button-styles($bgColor)
  background-color: $bgColor
  color: white
  padding: 10px

.button
  @include button-styles(blue)
```

---
### **Creating and Using Mixins**
---

#### **Basic Mixin Syntax**
```scss
@mixin mixin-name(parameters)
  property: value

@include mixin-name(arguments)
```

---
#### **Example: Mixin for Buttons**

```scss
@mixin button-styles($bgColor, $textColor: white)
  background-color: $bgColor
  color: $textColor
  padding: 10px

.button-primary
  @include button-styles(blue)

.button-danger
  @include button-styles(red, black)
```

✅ **Mixins allow reusable styles with dynamic values.**

---
### **Mixin vs. @extend – When to Use Each?**
---
Both @mixin and @extend allow code reuse, but they work differently.

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">@mixin</th>
            <th class="tableCellHeader">@extend</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Allows Parameters?</strong></td>
            <td class="tableCell">✅ Yes</td>
            <td class="tableCell">❌ No</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Repeats Code in CSS?</strong></td>
            <td class="tableCell">✅ Yes</td>
            <td class="tableCell">❌ No (merges selectors)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Best For</strong></td>
            <td class="tableCell">Reusable styles with variables</td>
            <td class="tableCell">Inheritance-based styles</td>
        </tr>
    </tbody>
</table>

✅ **Use @mixin for dynamic styles and @extend for inheritance.**

---
### **Best Practices for Using Mixins**
---
✅ **Keep mixins small and modular** (avoid bloated CSS).  
✅ **Use mixins for reusable components** (e.g., buttons, grids, breakpoints).  
✅ **Avoid excessive mixins** (use @extend when applicable).  

---
### **Using Mixins for Responsive Design**
---
Mixins are useful for **media queries** and **responsive layouts**.

```scss
@mixin mobile
  @media screen and (max-width: 600px)
    @content

.container
  width: 80%

  @include mobile
    width: 100%
```

✅ **@content inside mixins allows dynamic blocks of CSS.**

---
### **Sass Functions**
---
Functions in Sass allow you to **process values** and **return a result**.

```scss
@function calculate-padding($size)
  @return $size * 2

.box
  padding: calculate-padding(10px)
```

✅ **Use functions for calculations, color manipulation, or custom logic.**

---
### **Conclusion**
---
- **Mixins allow reusable styles with dynamic values.**  
- **Use @extend for shared styles and @mixin for dynamic styles.**  
- **Functions process values and return results for calculations.**
