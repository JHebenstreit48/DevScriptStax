## CSS Transform

The transform property allows elements to be visually manipulated without affecting their document flow. This means elements can be moved, rotated, scaled, or skewed without changing their original position in the page structure.

---

### Transform Syntax

```css
transform: function(value);
```

- **Function:** Defines the type of transformation (translate, scale, rotate, skew).
- **Value:** Specifies how much the transformation is applied.

---

### Translation (Move Elements)

The translate function moves an element horizontally and or vertically without affecting surrounding elements. It is **hardware-accelerated**, meaning animations using translate() will be **smoother** than modifying top or left directly.

```css
/* Moves element 20px right and 20px down */
transform: translate(20px, 20px);

/* Moves element 50px left */
transform: translateX(-50px);

/* Moves element 30px up */
transform: translateY(-30px);
```

- **First value:** Horizontal movement (X-axis).
- **Second value:** Vertical movement (Y-axis).
- **Negative values** move elements in the opposite direction.
- **Does not alter document flow**—surrounding elements remain unaffected.

Using transform: translate(); is the preferred method when animating or transitioning elements smoothly. While position: relative; in combination with top, bottom, left, or right can be used for **static positioning**, it is **not hardware-accelerated** and may result in **jittery animations**.

---

### Comparison: transform vs. position relative for movement

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">transform: translate()</th>
            <th class="tableCellHeader">position: relative + top/left</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Performance</strong></td>
            <td class="tableCell">Hardware-accelerated (smooth animations)</td>
            <td class="tableCell">Not hardware-accelerated (can cause jittery motion)</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Effect on Document Flow</strong></td>
            <td class="tableCell">Does not affect surrounding elements</td>
            <td class="tableCell">Shifts elements and affects layout</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Use Case</strong></td>
            <td class="tableCell">Best for animations and transitions</td>
            <td class="tableCell">Best for static layout positioning</td>
        </tr>
    </tbody>
</table>

---

### Scaling (Resize Elements)

The scale function resizes an element relative to its original size.

```css
/* Increases size to 1.5x */
transform: scale(1.5);

/* Shrinks element to half its size */
transform: scale(0.5);

/* Scales width and height separately */
transform: scale(1.2, 0.8);

- The value acts as a **multiplier**.
- **Greater than 1** enlarges the element.
- **Less than 1** shrinks the element.
```

---

### Rotation (Spin Elements)

The rotate function rotates an element around a fixed point.

```css
/* Rotates 45 degrees clockwise */
transform: rotate(45deg);

/* Rotates 90 degrees counterclockwise */
transform: rotate(-90deg);

- **Positive values** rotate clockwise.
- **Negative values** rotate counterclockwise.
```

---

### Skewing (Tilting Elements)

The skew function distorts an element horizontally and or vertically.

```css
/* Skews element 20 degrees horizontally */
transform: skewX(20deg);

/* Skews element 30 degrees vertically */
transform: skewY(30deg);

/* Skews both horizontally and vertically */
transform: skew(15deg, 10deg);

- Skewing tilts elements along the **X or Y axis**.
- Can be combined with other transforms.
```

---

### Transform-Origin (Control Where Transformations Begin)

By default, transformations occur from the **center** of an element. The transform-origin property allows you to change where transformations start.

```css
/* Rotates from the top-left corner */
transform-origin: 0 0;
transform: rotate(45deg);

/* Scales from the top-right corner */
transform-origin: 100% 0;
transform: scale(1.5);

- **X value (Horizontal positioning)**
  - 0% or 0px → Left edge
  - 50% → Center (default)
  - 100% → Right edge
- **Y value (Vertical positioning)**
  - 0% or 0px → Top edge
  - 50% → Center (default)
  - 100% → Bottom edge
```

Setting a different transform-origin value **changes how** rotate, scale, and skew behave.

---

### Combining Multiple Transforms

```css
/* Rotate and scale at the same time */
transform: rotate(20deg) scale(1.5);

/* Skew and translate together */
transform: skewY(-25deg) translateX(15px);
```

- Multiple transforms can be applied in **one declaration**.
- **Order matters** – transformations apply **left to right**.

---

## Final Thoughts

- **Use translate() instead of top or left for better performance.**
- **Combine transformations** for advanced effects.
- **Scaling and rotation work best with transform-origin.**
- **Avoid animating layout-affecting properties like top, left, or margin as they are not hardware-accelerated. Use transform instead for smoother animations.**
