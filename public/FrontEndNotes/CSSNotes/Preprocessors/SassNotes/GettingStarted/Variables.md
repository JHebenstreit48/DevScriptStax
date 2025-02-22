## **Sass Variables & Nesting**
---

### **Sass Variables & Formatting Rules**
---
Sass allows the use of **variables** to store reusable values.

#### **General Variable Syntax**
---

```scss
$variableName: value
```

✅ **Key Rules for Sass Variables:**
- **Must start with $** → Example: $primaryColor
- **Must include a : (colon) after the variable name**
- **No {} or ; required** in Indented Sass (only whitespace matters)
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
### **Sass Nesting Rules**
---
Sass allows **nesting selectors** inside other selectors to keep styles more organized.

```scss
.nav
  background: black
  .nav-item
    color: white
```

✅ **Nesting helps structure styles but should not be too deep, or it becomes hard to maintain.**

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
- **Sass variables store reusable values** using $ and :.  
- **Nesting allows selectors to be structured inside parent elements** for better readability.  
- **Strict indentation is required** since Sass does not use {} or ;.
