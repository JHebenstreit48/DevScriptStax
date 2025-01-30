## Box Model

The box model consists of four layers that define the space an element occupies:

1. <span class="emphasis">Content</span>: The actual text or images inside the element.
2. <span class="emphasis">Padding</span>: Space between the content and the border.
3. <span class="emphasis">Border</span>: Surrounds the padding.
4. <span class="emphasis">Margin</span>: Space outside the border, separating the element from others.

```css
div {
  margin: 10px; /* Space outside the element */
  padding: 20px; /* Space inside the border */
  border: 1px solid black; /* Border width and color */
}
```

---

### Box-sizing

The box-sizing property determines how the total width and height of an element are calculated:

```css
div {
  box-sizing: border-box;
}
```

- When set to border-box, padding and border are included in the element’s total width and height.

## Box Shadow

The box-shadow property allows you to add shadows to elements, creating depth and visual contrast. Shadows can be **outer** (default) or **inner** (using inset).

### Shadow Positioning

By default, the shadow is **outside** of the content.  
If you want the shadow **inside**, use the inset keyword:

```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* Default outer shadow */
box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5); /* Inner shadow */
```

- **Outer Shadow (Default):** Appears outside the element’s boundary.
- **Inner Shadow (inset):** Appears **inside** the element.

### Using rgba() for Transparent Shadows

The **fourth value** in rgba() controls transparency.

```css
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); /* Light shadow */
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8); /* Darker shadow */
```

- **Lower values (0.1 - 0.3)** = More transparent.
- **Higher values (0.7 - 1.0)** = More opaque.

### Negative Values for Box Shadow

If you want the shadow to appear **above** the content, use **negative values**:

```css
box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.5);
```

- **Negative Horizontal (-x)** → Moves shadow left.
- **Negative Vertical (-y)** → Moves shadow up.

### Combining Multiple Shadows

You can apply **multiple shadows** by **separating them with commas**:

```css
box-shadow: 
  5px 5px 10px rgba(0, 0, 0, 0.3),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5);
```

- The **first shadow** is an **outer shadow**.
- The **second shadow** is an **inner shadow** (inset).

---

## Border Radius

The border-radius property allows you to create rounded corners on elements.

### Basic Usage

If you have a square element that is **200px by 200px**, you can turn it into a **circle** by setting border-radius to **half** of its width and height.

```css
border-radius: 100px;
```

### Elliptical Border Radius

By default, border-radius creates **circular rounding** of the edges. You can also use **elliptical rounding**:

```css
border-radius: 10px / 25px;
```

- The **first value** controls the **horizontal radius**.
- The **second value** controls the **vertical radius**.

### Using Four Values for Fine Control

You can define **different radius values for each corner** using four values:

```css
border-radius: 10px 10px 25px 25px;
```

- **Top-left and bottom-right**: 10px
- **Top-right and bottom-left**: 25px

### Two-Value Syntax

If you provide **two values**, the browser applies:

- **First value** → Top-left & bottom-right
- **Second value** → Top-right & bottom-left

```css
border-radius: 15px 30px;
```

---

## Final Thoughts

- **Use box-shadow to add depth** and make UI elements more engaging.
- **border-radius creates softer edges**, improving UI aesthetics.
- **Combine box-shadow and border-radius** for stylized buttons, cards, and UI components.
