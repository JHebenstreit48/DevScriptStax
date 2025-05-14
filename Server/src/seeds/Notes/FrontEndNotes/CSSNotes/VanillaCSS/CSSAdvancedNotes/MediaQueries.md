### What are Media Queries?

<span class="emphasis">Media Queries</span> allow you to apply styles based on the <span class="emphasis">characteristics</span> of the <span class="secondEmphasis">user's device</span>, such as <span class="emphasis">screen size</span>, <span class="emphasis">resolution</span>, or <span class="emphasis">orientation</span>. They are essential for creating <span class="secondEmphasis">responsive web designs</span>.

---

### Basic Syntax

```css
@media (condition) {
  selector {
    property: value;
  }
}
```

Example:

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

- This rule applies when the viewport width is **768px or smaller**.

---

### Common Media Query Features

1. **Width and Height**:
```css
   @media (min-width: 1024px) {
     .container {
       width: 80%;
     }
   }
```

2. **Orientation**:
```css
   @media (orientation: landscape) {
     .image {
       height: 300px;
     }
   }
```

3. **Resolution**:
```css
   @media (min-resolution: 2dppx) {
     .icon {
       background-image: url('high-res.png');
     }
   }
```

---

### Combining Conditions

Combine multiple conditions using and, not, and only.

```css
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
```

---

### Advanced Use: Dark Mode

Target devices in dark mode using prefers-color-scheme:

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```

---

### Practical Example: Responsive Layout

Default styles for larger screens:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Styles for smaller screens:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```