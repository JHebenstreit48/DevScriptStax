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
$primary-color: blue

button  
  background-color: $primary-color  
  color: white  
  padding: 10px 
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
### **Compiling Sass into CSS**
---
Before using Sass in a project, you need to **compile** your <span class="codeSnip">.sass</span> files into standard <span class="codeSnip">.css</span>.

---
#### **Installing Sass**
---
To install Sass in your Node.js project, run:  

```sh
npm install sass --save-dev  
```

---
#### **Compiling Sass to CSS**
---
To manually compile a **single** Sass file:  

```sh
npx sass Sass/main.sass Sass/main.css  
```

- **Sass/main.sass** → Input Sass file  
- **Sass/main.css** → Output CSS file  

For an **entire directory**, use:  

```sh
npx sass Sass:dist  
```

- **Sass/** → Folder containing <span class="codeSnip">.sass</span> files  
- **dist/** → Folder where compiled <span class="codeSnip">.css</span> files are saved  

---
#### **Watching for Changes**
---
To **automatically recompile** when changes are made:  

```sh
npx sass --watch Sass/main.sass Sass/main.css  
```

For an **entire folder**, use:  

```sh
npx sass --watch Sass:dist  
```

---
#### **Adding Compilation to package.json**
---
To automate Sass compilation, add this to your <span class="codeSnip">package.json</span>:

```json
{
  "scripts": {
    "sass": "sass Sass/main.sass Sass/main.css",
    "sass:watch": "sass --watch Sass/main.sass Sass/main.css",
    "sass:watch-all": "sass --watch Sass:dist"
  }
}  
```

---
#### **Running the Scripts**
---
Compile manually:  

```sh
npm run sass  

Watch for changes:  
```

```sh
npm run sass:watch  

Watch all .sass files:  
```

```sh
npm run sass:watch-all  
```
---
#### **Identifying Watched Files**
---
When using --watch, Sass provides real-time feedback.

1️⃣ If watching **one file**, you’ll see:  

<span class="shell">
Sass is watching for changes...<br>  
Compiled Sass/main.sass to Sass/main.css.
</span>
<br><br>

If you modify <span class="codeSnip">Sass/main.sass</span>, it automatically recompiles:  

<span class="shell">
Change detected. Recompiling...<br>  
Compiled Sass/main.sass to Sass/main.css.  
</span>
<br><br>

2️⃣ If watching <span class="emphasis">multiple files</span>, you’ll see:  

<span class="shell">
Sass is watching for changes...<br>  
Watching Sass/*.sass
</span>
<br><br>

If any file inside <span class="codeSnip">Sass/</span> changes:  

<span class="shell">
Change detected in Sass/header.sass. Recompiling...<br>  
Compiled Sass/header.sass to dist/header.css.  
</span>
<br><br>

✅ **Now your Sass files are automatically compiled into CSS whenever changes are made!** 🚀
