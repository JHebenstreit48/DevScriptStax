## CSS Flexbox Layout

### Introduction to Flexbox

<span class="secondEmphasis">Flexbox</span> is a one-dimensional layout system that allows for efficient alignment and distribution of space among items in a container, even when their size is dynamic or unknown.

---

### Key Concepts in Flexbox

1. **Flex Container**:
   - An element becomes a flex container when you set its display property to flex or inline-flex.

```css
.container {
  display: flex;
}
```

2. **Flex Items**:
   - The child elements of a flex container are called flex items.

---

### Flex Order

To specify the order in which items appear, use the order property:

```css
.main-column {
  flex: 3;
  order: 2;
  /* Places this item second */
}
.sidebar-one {
  flex: 1;
  order: 1;
  /* Places this item first */
}
.sidebar-two {
  flex: 1;
  order: 3;
  /* Places this item third */
}
```

---

### Flex Grow, Shrink, and Basis

1. **Flex Grow**:
   - Defines how much a flex item should grow relative to the other items in the container.

```css
.flex-item {
  flex-grow: 2;
  /* This item grows twice as much as others */
}
```

2. **Flex Shrink**:
   - Defines how much a flex item should shrink relative to the others when space is limited.

```css
.flex-item {
  flex-shrink: 1;
  /* This item shrinks with the others */
}
```

3. **Flex Basis**:
   - Defines the default size of an element before the remaining space is distributed.

```css
.flex-item {
  flex-basis: 200px;
  /* Default size is 200px */
}
```

---

### Justify Content

Align items along the main axis using justify-content:

```css
.container {
  justify-content: space-between;
}
```

- Common values:
  - flex-start: Align items to the start of the container.
  - flex-end: Align items to the end of the container.
  - center: Center items within the container.
  - space-between: Distribute items evenly with space between them.
  - space-around: Distribute items evenly with space around them.

---

### Align Items

Align items along the cross axis using align-items:

```css
.container {
  align-items: center;
}
```

- Common values:
  - stretch: (default): Stretches items to fill the container.
  - flex-start: Align items at the start of the container.
  - flex-end: Align items at the end of the container.
  - center: Align items in the center of the container.

---

### Align Self

Override the align-items property for individual flex items using align-self:

```css
.item {
  align-self: flex-end;
  /* Aligns this item to the end of the container */
}
```

---

### Flex Wrap

Allow items to wrap onto multiple lines using flex-wrap:

```css
.container {
  flex-wrap: wrap;
}
```

- nowrap: (default): All items are placed on one line.
- wrap: Items wrap onto multiple lines.
- wrap-reverse: Items wrap onto multiple lines in reverse order.

---

### Practical Example: Navbar with Flexbox

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  flex: 1;
}

.links {
  flex: 2;
  display: flex;
  justify-content: space-around;
}
```

### Comparison: Flexbox vs. Grid Alignment

---

Below is a comprehensive comparison table outlining the differences and similarities between Flexbox and Grid alignment properties:

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Property</th>
            <th class="tableCellHeader">Flexbox</th>
            <th class="tableCellHeader">Grid</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell">justify-content</td>
            <td class="tableCell">Aligns items as a group along the main axis (horizontal).</td>
            <td class="tableCell">Aligns items as a group along the inline axis (horizontal).</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">align-items</td>
            <td class="tableCell">Aligns items as a group along the cross axis (vertical).</td>
            <td class="tableCell">Aligns items as a group along the block axis (vertical).</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">align-self</td>
            <td class="tableCell">Aligns a single item along the cross axis (vertical).</td>
            <td class="tableCell">Aligns a single item along the block axis (vertical).</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">justify-self</td>
            <td class="tableCell"><strong>Not applicable</strong></td>
            <td class="tableCell">Aligns a single item along the inline axis (horizontal).</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">justify-items</td>
            <td class="tableCell"><strong>Not applicable</strong></td>
            <td class="tableCell">Aligns all items horizontally within their grid cells.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">align-content</td>
            <td class="tableCell">Aligns rows in a multi-line flex container along the cross axis.</td>
            <td class="tableCell">Aligns grid tracks (rows) along the block axis.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">place-items</td>
            <td class="tableCell"><strong>Not applicable</strong></td>
            <td class="tableCell">Shorthand for combining align-items and justify-items.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">place-self</td>
            <td class="tableCell"><strong>Not applicable</strong></td>
            <td class="tableCell">Shorthand for combining align-self and justify-self.</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell">place-content</td>
            <td class="tableCell">Shorthand for combining align-content and justify-content (multi-line containers only).</td>
            <td class="tableCell">Shorthand for combining align-content and justify-content.</td>
        </tr>
    </tbody>
</table>

---

### Related Notes on Grid

For more information on Grid-specific alignment properties, refer to the [CSS Grid Layout Alignment](/css/vanillacss/layouts/grid#self-vs-group-alignment) file.
