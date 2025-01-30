## Positioning

### Positioning Types

Positioning options allow you to control how <span class="secondEmphasis">elements</span> are placed on a webpage:

1. <span class="emphasis">Static</span>: The default positioning. Elements are positioned in the document flow as they appear.
2. <span class="secondEmphasis">Relative</span>: Positioned relative to its normal placement.
3. <span class="emphasis">Absolute</span>: Positioned relative to the nearest positioned ancestor.
4. <span class="secondEmphasis">Fixed</span>: Positioned relative to the viewport, remaining fixed even during scrolling.

```css
div {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

---

### Z-index and Stacking

The z-index property specifies the stacking order of elements. Elements with a higher z-index appear in front of those with a lower z-index:

```css
.element1 {
  z-index: 1; /* Appears below elements with a higher z-index */
}

.element2 {
  z-index: 2; /* Appears above .element1 */
}
```

- Negative values move elements behind others.
- Only elements with position set to relative, absolute, or fixed respect the z-index property.

---

### Practical Example: Floating Elements

```css
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 20px;
  left: 30px;
}
```
### Transform-Origin and Placement (Brief Overview)

The transform-origin property controls where transformations start from, such as the center or a specific edge of an element.

For a **full explanation of transform-origin**, including practical examples, visit the **[CSS Transform Page](/css/basics/transform)**.

---

### Practical Example: Floating Elements

css
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 20px;
  left: 30px;
}

---

## Final Thoughts

- Use transform-origin to control how transformations behave.
- z-index only applies to positioned elements (relative, absolute, fixed).
- Absolute and fixed elements are removed from normal document flow.
