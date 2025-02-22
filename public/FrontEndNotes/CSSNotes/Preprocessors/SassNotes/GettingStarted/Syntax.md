## **Sass Syntax & Indentation**
---

### **Sass Syntax**
---
Sass uses **indentation-based syntax** instead of curly braces {} and semicolons ;.

✅ **Key Features:**
- Uses **indentation instead of {} and ;**.
- Provides a **cleaner, minimal syntax** but requires proper whitespace.
- Faster to write but has a learning curve for those used to CSS.

---
### **Example of Indented Sass**
---

```scss
.button
  background-color: blue
  color: white
  padding: 10px
```

✅ **Whitespace matters! Indentation determines structure instead of {}.**

---
### **Sass Variables & Formatting Rules**
---
Sass supports **variables**, but they must follow specific formatting rules.

#### **General Variable Syntax**
```scss
$variableName: value
```

✅ **Key Rules for Sass Variables:**
- **Must start with $** → Example: $primaryColor
- **Must include a : (colon) after the variable name**
- **No {} or ; required** (Indented Sass uses only whitespace)
- **Variables can use camelCase, kebab-case, or snake_case**

---
### **Examples of Sass Variables**
---

```scss
$primaryColor: blue
$fontSize: 16px
$borderRadius: 5px

.button
  background-color: $primaryColor
  font-size: $fontSize
  border-radius: $borderRadius
```

✅ **Variables make styles reusable and easier to maintain.**

---
### **Nesting Rules in Sass**
---
One of Sass’s most powerful features is **nesting selectors** inside other selectors.

```scss
.nav
  background: black
  .nav-item
    color: white
```

✅ **Nesting keeps styles organized but should be used carefully to avoid deep, hard-to-maintain structures.**  

---
### **Whitespace & Indentation Rules**
---
Sass **relies on indentation** instead of {}.

❌ **Invalid (missing indentation in Sass)**:
```scss
.button
background-color: blue
color: white
```

✅ **Valid (correct indentation)**:
```scss
.button
  background-color: blue
  color: white
```

✅ **Since Sass does not use {} or ;, correct indentation is required!**

---
### **Conclusion**
---
- **Sass (Indented Syntax) removes {} and ;** but requires **strict indentation**.
- **Variables start with $, require :**, and **do not need ;**.
- **Nesting improves organization** but should be used carefully. 
