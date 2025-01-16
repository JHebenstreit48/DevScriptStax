## Box Model

The box model consists of four layers that define the space an element occupies:

1. <span class="emphasis">Content</span>: The actual text or images inside the element.
2. <span class="emphasis">Padding</span>: Space between the content and the border.
3. <span class="emphasis">Border</span>: Surrounds the padding.
4. <span class="emphasis">Margin</span>: Space outside the border, separating the element from others.

css
div {
  margin: 10px; /* Space outside the element */
  padding: 20px; /* Space inside the border */
  border: 1px solid black; /* Border width and color */
}

---

### Box-sizing

The box-sizing property determines how the total width and height of an element are calculated:

css
div {
  box-sizing: border-box;
}

- When set to border-box, padding and border are included in the element’s total width and height.
