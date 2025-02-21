## Introduction to Sass

---
### **What is Sass?**
---
Sass (**Syntactically Awesome Stylesheets**) is a **CSS extension language** that adds **extra functionality to CSS**.

- Introduces **variables, nesting, mixins, and logic-based styling**.
- Helps **reduce repetition** in stylesheets.
- **Compiles into standard CSS**, making it browser-compatible.
- Used by **popular frameworks like Bootstrap**.

✅ **Sass makes CSS more powerful, but browsers cannot read Sass directly.**  

---
### **Sass vs. CSS: Key Differences**
---
Sass extends **CSS** with additional features **not available in standard CSS**.

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Aspect</th>
            <th class="tableCellHeader">Sass</th>
            <th class="tableCellHeader">CSS</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Standardized?</strong></td>
            <td class="tableCell">❌ No, Sass is NOT an official W3C standard.</td>
            <td class="tableCell">✅ Yes, CSS is an official W3C standard.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Works in Browsers?</strong></td>
            <td class="tableCell">❌ No, browsers do NOT understand Sass directly.</td>
            <td class="tableCell">✅ Yes, CSS works natively in browsers.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Compilation Needed?</strong></td>
            <td class="tableCell">✅ Yes, Sass must be compiled into CSS.</td>
            <td class="tableCell">❌ No, CSS does not require compilation.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Advanced Features?</strong></td>
            <td class="tableCell">✅ Yes, includes variables, mixins, loops, etc.</td>
            <td class="tableCell">❌ No, CSS is simpler with fewer dynamic features.</td>
        </tr>
    </tbody>
</table>

✅ **Sass is NOT a replacement for CSS—it enhances it!**

---
### **What is W3C?**
---

**W3C (World Wide Web Consortium)** is the main international organization that **develops web standards**, including **CSS, HTML, and JavaScript**.

- It ensures **consistency across browsers and devices**.
- CSS is **an official W3C standard**, while **Sass is NOT**.
- Sass is a **preprocessor** that adds features on top of CSS, but it is not part of the **official web standards**.

✅ **Browsers support W3C standards natively, but they do NOT support Sass directly.**  

---
### **Sass File Extensions: .scss vs. .sass**
---
Sass uses **two different file extensions**:

- **SCSS (<span class="codeSnip">.scss</span>)** → The most common syntax, similar to CSS.  
- **SASS (<span class="codeSnip">.sass</span>)** → A shorthand syntax that removes {} and ;.  

✅ **SCSS is preferred** because it is **easier to read and write**, especially for developers familiar with CSS.  

⚠️ **SCSS is also covered separately in the SCSS section of this site.**  

---
### **How Sass Works**
---
1️⃣ **Write styles in a Sass file** (<span class="codeSnip">.scss</span> or <span class="codeSnip">.sass</span>).  
2️⃣ **Compile Sass into standard CSS** using a preprocessor.  
3️⃣ **Link the compiled <span class="codeSnip">.css</span> file** to your HTML page.

Example Sass (<span class="codeSnip">.scss</span>):

```scss  
$primary-color: blue;  

button {  
  background-color: $primary-color;  
  color: white;  
  padding: 10px;  
}  
```

After compilation, it turns into standard CSS:

```css  
button {  
  background-color: blue;  
  color: white;  
  padding: 10px;  
}  
```

✅ **Sass variables make code reusable and easier to maintain.**  

---
### **Key Takeaways**
---
✅ **Sass is a CSS extension language** that adds extra features.  
✅ **It is NOT an official part of CSS** and must be **compiled** before use.  
✅ **Browsers do not understand Sass directly—only compiled CSS.**  
✅ **Sass files use <span class="codeSnip">.scss</span> (most common) or <span class="codeSnip">.sass</span> (less common).**  
✅ **SCSS is covered separately in the SCSS section of this site.**  

---
