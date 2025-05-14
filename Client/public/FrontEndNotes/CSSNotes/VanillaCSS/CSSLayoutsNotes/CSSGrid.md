## CSS Grid Layout

### Introduction to Grid

<span class="emphasis">CSS Grid</span> is a two-dimensional layout system that allows for precise positioning and alignment of elements. It enables control over both rows and columns in a web layout.

---

### Grid Template Areas

Grid-template-areas define named areas within the grid layout. Each string represents a row, and column positions are separated by spaces:

- **Note:** Named grid areas make it easier to organize layouts by assigning readable labels to sections.

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

### Grid Template Columns with repeat()

The repeat() function allows defining multiple columns dynamically.

- **Definition:** repeat() simplifies grid setup by avoiding manually defining each column size.
- **Example Usage:**

```css
grid-template-columns: repeat(3, 1fr);
```

- This creates **three equal columns** dynamically.

---

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

---

### Alignments

---

#### Self vs. Group Alignment

CSS Grid offers alignment options similar to Flexbox, but with additional control over individual grid items through justify-self and align-self. These properties complement the group alignment properties justify-content and align-items.

- **Note:** Individual alignment (justify-self and align-self) only applies to **one item**, while justify-content and align-items apply to the entire grid.

- **Example:**

```css
.grid-item {
  justify-self: center; /* Aligns a single item horizontally */
  align-self: center; /* Aligns a single item vertically */
}
```

For a detailed comparison of alignment properties between Grid and Flexbox, refer to the [CSS Flexbox Layout Alignment](/css/vanillacss/layouts/flexbox#comparison-flexbox-vs-grid-alignment) file.

### Row and Column Span

---

Grid items can span multiple rows or columns:

```css
grid-row: 2 / 4; /* Spans rows from line 2 to line 4 */
grid-column: 3 / 5; /* Spans columns from line 3 to line 5 */
```

---

### Comparison: auto-fit vs. auto-fill

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">auto-fit</th>
            <th class="tableCellHeader">auto-fill</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Column Adjustment</strong></td>
            <td class="tableCell">Fills available space by expanding columns</td>
            <td class="tableCell">Maintains reserved empty columns</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Behavior with Extra Space</strong></td>
            <td class="tableCell">Expands existing columns to fill the grid</td>
            <td class="tableCell">Leaves space for additional columns</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Use Case</strong></td>
            <td class="tableCell">For fluid, adaptive layouts</td>
            <td class="tableCell">For consistent column structures</td>
        </tr>
    </tbody>
</table>

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

### Using Pseudo-Elements (::before and ::after)

Pseudo-elements like ::before and ::after can be used for decorative elements inside a grid layout.

> **When to Use:** Use ::before and ::after for non-essential content, such as icons, separators, or design embellishments.

```css
.grid-item::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background: red;
}
```

- Useful for **adding visual separators, icons, or custom styles** inside the grid.

---
