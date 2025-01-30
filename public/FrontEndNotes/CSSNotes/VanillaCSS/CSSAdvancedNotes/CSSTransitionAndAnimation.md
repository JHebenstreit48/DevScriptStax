## CSS Transitions

CSS transitions allow properties to change **smoothly** over a specified duration, instead of happening instantly.

---

### Transition Syntax

css
transition: property duration timing-function delay;

- **property** → Specifies which CSS property to animate.
- **duration** → Defines how long the transition should take.
- **timing-function** → Controls acceleration (default: ease).
- **delay** → Optional delay before transition starts.

---

### Transition-Property

The transition-property property determines which CSS properties will animate when their values change.

css
/* Transitions only the background-color */
transition-property: background-color;

/* Transitions multiple properties */
transition-property: color, background-color;

- **By default, no properties transition unless explicitly specified.**
- Setting transition-property: all; will apply transitions to all animatable properties.

---

### Transition-Duration

The transition-duration property defines how long a transition takes.

css
/* Changes background-color over 2 seconds */
transition-duration: 2s;

- **Values are in seconds (s) or milliseconds (ms).**
- If omitted, the transition happens instantly.

---

### Combining Transition-Property and Transition-Duration

By using transition-property and transition-duration together, developers can create smooth, controlled animations instead of abrupt property changes.

css
div {
  transition-property: color;
  transition-duration: 1s;
}

div:hover {
  color: red;
}

- **The color transition occurs over 1 second** instead of changing instantly.

---

## More to be added as transitions are completed...
