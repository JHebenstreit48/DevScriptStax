## What is CSS?
---

<span class="emphasis">CSS</span> stands for <span class="emphasis">Cascading Style Sheets</span>. It functions as the "skin" or styling of a <span class="emphasis">webpage</span>.

- <span class="emphasis">CSS</span> determines how <span class="secondEmphasis">HTML elements</span> appear or are displayed on a webpage.
- Just as clothes express personal style, <span class="emphasis">CSS</span> gives a webpage its unique look and feel.
- Examples include controlling a page's <span class="emphasis">colors</span>, <span class="secondEmphasis">layout</span>, and <span class="emphasis">organization</span>.

---

## Key Features of CSS

1. **Styling Across Multiple Pages**:
   - <span class="emphasis">CSS</span> can style multiple webpages simultaneously, applying consistent design elements.

2. **Inline vs External Styles**:
   - Styles can be <span class="emphasis">embedded</span> directly into <span class="secondEmphasis">HTML</span> or linked externally via a <span class="emphasis">CSS stylesheet</span>.
   - External stylesheets are best for <span class="secondEmphasis">reusability</span> and <span class="emphasis">maintenance</span>.
   - Inline styles are generally avoided because they complicate <span class="secondEmphasis">updates</span> and <span class="emphasis">readability</span>.

3. **Classes and IDs**:
   - When a <span class="punctuationSymbol">.</span> <span class="emphasis">precedes</span> the name of a property, it references an <span class="emphasis">HTML</span> <span class="secondEmphasis">class</span>.
   - When a <span class="punctuationSymbol">#</span> <span class="emphasis">precedes</span> the name of a property, it references an <span class="emphasis">HTML</span> <span class="secondEmphasis">id</span>.

---

## Basic CSS Syntax

Here is the basic structure of a CSS rule. The selector targets elements, and the property applies a specific style:

```css
p {
  color: blue; /* Property and Value */
}
```

- <span class="emphasis">Selector</span>: Targets <span class="secondEmphasis">HTML elements</span>.
- <span class="emphasis">Property</span>: Specifies the style to apply.
- <span class="emphasis">Value</span>: Defines the exact styling.
- Always end each property declaration with a <span class="punctuationSymbol">;</span>.

---

### External Stylesheet

To link an external CSS file to an <span class="secondEmphasis">HTML document</span>:

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```
