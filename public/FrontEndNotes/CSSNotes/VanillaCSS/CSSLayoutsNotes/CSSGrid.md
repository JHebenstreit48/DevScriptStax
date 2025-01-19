## CSS Grid Layout

### Introduction to Grid

<span class="emphasis">CSS Grid</span> is a two-dimensional layout system that allows for precise positioning and alignment of elements. It enables control over both rows and columns in a web layout.

---

### Grid Template Areas

Grid-template-areas define named areas within the grid layout. Each string represents a row, and column positions are separated by spaces:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar footer";
}
```

- Each word in the string corresponds to a column.
- For example:
  - "header header" spans both columns in the first row.
  - "sidebar main" places sidebar in the first column and main in the second column.

---

### Grid Area Assignment

Assign child elements to specific areas using the grid-area property:

```css
.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```
---

### Advanced Grid Properties

#### Implicit vs. Explicit Grid

The grid system can automatically create rows and columns if not explicitly defined:

```css
.container {
  display: grid;
  grid-auto-rows: 100px;
}
```

- **Explicit Grid**: Defined using grid-template-rows and grid-template-columns.
- **Implicit Grid**: Rows or columns are automatically created as needed.

### Alignments  
---

#### Self vs. Group Alignment

CSS Grid offers alignment options similar to Flexbox, but with additional control over individual grid items through justify-self and align-self. These properties complement the group alignment properties justify-content and align-items.

For a detailed comparison of alignment properties between Grid and Flexbox, refer to the [CSS Flexbox Layout Alignment](/css/basics/layouts/flexbox#comparison-flexbox-vs-grid-alignment) file.  

### Row and Column Span  
---

Grid items can span multiple rows or columns:

```css
grid-row: 2 / 4; /* Spans rows from line 2 to line 4 */
grid-column: 3 / 5; /* Spans columns from line 3 to line 5 */
```

---

### Practical Example

Here is a practical example of a grid layout with named areas:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
```

