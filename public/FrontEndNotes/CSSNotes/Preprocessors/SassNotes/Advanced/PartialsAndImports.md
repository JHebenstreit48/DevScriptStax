## **Sass Partials & Imports**
---

### **What are Partials in Sass?**
---
Partials are **smaller Sass files** that can be imported into other Sass files.  
- Partials help **organize styles into modular files**.  
- They are **not compiled into CSS directly** unless imported.  
- A partial file **starts with an underscore (_)** to indicate it should be included in another file.

✅ **Example Sass Partial (_buttons.sass)**

```scss
$buttonColor: blue

.button
  background-color: $buttonColor
  color: white
  padding: 10px
```

---
### **Using @import to Include Partials**
---
Sass provides the @import directive to include **partials** inside other Sass files.

#### **Syntax:**
```scss
@import "filename"
```

- **Do NOT include the underscore (_) or file extension (.sass)** when importing.
- Sass automatically looks for a file named _filename.sass.

✅ **Example Importing _buttons.sass into styles.sass:**
```scss
@import "buttons"

body
  font-family: Arial, sans-serif
```

---
### **Why @import is Deprecated?**
---
In modern Sass, @import is **deprecated** in favor of @use and @forward.

✅ **Problems with @import:**
- **Causes global namespace pollution** (mixes all styles together).  
- **Files are imported multiple times**, leading to **duplicate styles**.  
- **No clear dependency management** between files.  

✅ **The Solution: @use and @forward**
- **@use** is the **new way to import** files while keeping styles modular.  
- **@forward** is used in **shared modules** to expose styles to multiple files.  

---
### **Comparing @import vs. @use**
---
<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">@import</th>
            <th class="tableCellHeader">@use</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Global Namespace</strong></td>
            <td class="tableCell">✅ Yes (all variables & mixins are global)</td>
            <td class="tableCell">❌ No (keeps variables private by default)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Duplicate Imports</strong></td>
            <td class="tableCell">⚠️ Yes (imports same file multiple times)</td>
            <td class="tableCell">✅ No (each file is only loaded once)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Recommended?</strong></td>
            <td class="tableCell">❌ No, deprecated in newer Sass versions</td>
            <td class="tableCell">✅ Yes, use @use instead</td>
        </tr>
    </tbody>
</table>

---
### **How to Replace @import with @use**
---
Instead of @import, use @use to **import partials** in a modular way.

✅ **Converting from @import to @use**
❌ **Old (using @import)**

```scss
@import "buttons"
```

✅ **New (using @use)**

```scss
@use "buttons"
```

---
### **Using @forward for Shared Modules**
---
If you have a **central Sass file** that imports multiple files, use @forward to expose styles.

✅ **Example: Using @forward in _all.sass**

```scss
@forward "buttons"
@forward "typography"
```

✅ **Then, in styles.sass, you can import everything at once:**
```scss
@use "all"
```

---
### **Best Practices for Imports in Sass**
---
✅ **Use @use instead of @import** (modern Sass).  
✅ **Keep files modular** (one purpose per partial).  
✅ **Use @forward to group shared files**.  
✅ **Follow naming conventions** (_filename.sass for partials).  

---
### **Conclusion**
---
- **Partials (_filename.sass) help modularize styles.**  
- **@import is deprecated—use @use and @forward instead.**  
- **@use prevents global namespace pollution.**  
- **@forward is useful for sharing styles across multiple files.**  
