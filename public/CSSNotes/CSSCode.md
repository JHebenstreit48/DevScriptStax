CSSCode.md code

# CSS Code Examples

---

## Introduction to CSS

### External Stylesheet

This example shows how to link an external CSS file to an HTML document:

html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>

---

### Basic CSS Syntax

Here is the basic structure of a CSS rule. The selector targets elements, and the property applies a specific style:

css
p {
  color: blue; /* Property and Value */
}

---

## CSS Box Model

The box model consists of the content, padding, border, and margin. It defines the space an element occupies:

css
div {
  margin: 10px; /* Space outside the element */
  padding: 20px; /* Space inside the border */
  border: 1px solid black; /* Border width and color */
}

---

## CSS Selectors

### Basic Selectors

CSS selectors target specific HTML elements for styling:

css
header {
  background-color: lightgray;
}
p {
  color: green;
}

---

### Descendant Selectors

Descendant selectors target elements nested within a specific parent:

css
header p {
  color: green;
}

header p span {
  color: blue;
}

---

## CSS Grid Layout

### Grid Template Areas

If you have two columns in the grid layout, the first column word in the string defines the left column, and the word on the right defines the second or right column:

css
.layout {
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar footer";
}

---

### Row Definition

In the `grid-template-areas` property, each string defines a row.

---

### Grid Row Span

To define a row span:

css
grid-row: 2 / 4;

---

### Grid Column Span

The first number in the following grid display code is the line you start at, and the number after the `/` is the line you end at:

css
grid-column: 3 / 5;

---

## CSS Flexbox Layout

### Flex Order

To specify the order in which elements flex, use the `order` property:

css
.main-column {
  flex: 3;
  order: 2;
}
.sidebar-one {
  flex: 1;
  order: 1;
}
.sidebar-two {
  flex: 1;
  order: 3;
}

---

### Flex Grow

If you use `flex: 1` in CSS, the `1` is the baseline value. Increasing it makes the element grow in size compared to other elements.

---

## CSS Backgrounds

### CSS Sprites

CSS sprites can be used for small icon-based graphics to improve page load speed:

css
.sprite {
  background-image: url('sprites.png');
  background-position: -50px -25px;
}

---

### Gradient Fallbacks

Always include a fallback `background-color` for browsers that do not support CSS gradients:

css
.fallback {
  background-color: #c2bbb1;
  background: linear-gradient(to bottom, #ffffff, #c2bbb1);
}

---

### Shorthand Background Property

Combine multiple properties into one shorthand property:

css
.shorthand {
  background: #c2bbb1 url(../images/bird.jpg) center center no-repeat;
}

---

## Typography

### Custom Fonts

Use the `@font-face` rule to reference a font file:

css
@font-face {
  font-family: 'PTSans';
  src: url('fonts/PT-Sans.woff') format('woff');
}

---

### Font Style Examples

css
/* To capitalize all letters */
text-transform: uppercase;

/* To control spacing between letters */
letter-spacing: 2px;

/* To control spacing between words */
word-spacing: 5px;

/* To add a text shadow */
text-shadow: 1px 1px 2px #000000;

---

## Forms

### Highlight Focus

To highlight the focused form field:

css
input[type="email"]:focus {
  border: 1px solid #cccccc;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .1);
}

---

### Hide Labels

To hide labels but keep them accessible to screen readers:

css
.label-hidden {
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
}

---

## Tables

### Select Specific Rows or Columns

To target specific rows or columns:

css
table tr:nth-child(2) {
  background-color: #f0f0f0;
}
table tr:nth-child(3) {
  color: #333333;
}

---

### Collapsing Borders

To collapse the borders of a table:

css
table {
  border-spacing: 0;
  border-collapse: collapse;
}

---

CSSCode.md code
