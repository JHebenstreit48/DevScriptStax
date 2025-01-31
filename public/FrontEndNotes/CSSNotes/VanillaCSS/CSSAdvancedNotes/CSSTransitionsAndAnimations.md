# Transitions

CSS <span class="emphasis">transitions</span> allow properties to change <span class="emphasis">smoothly</span> over a <span class="emphasis">specified duration</span>, <span class="secondEmphasis">instead of</span> happening <span class="emphasis">instantly</span>.  

---
### Transition Syntax
---

```css
transition: property duration timing-function delay;
```

---
### Transition-Property
---

The <span class="emphasis">transition-property</span> property determines which CSS properties will animate when their values change.

```css
/* Transitions only the background-color */
transition-property: background-color;

/* Transitions multiple properties */
transition-property: color, background-color;

/* Transitions all animatable properties */
transition-property: all;
```

- By <span class="emphasis">default</span>, <span class="secondEmphasis">no</span> properties transition unless <span class="emphasis">explicitly</span> specified.
- Setting <span class="emphasis">transition-property: all;</span> will apply transitions to <span class="emphasis">all</span> animatable properties.

---
### Transition-Duration
---

The <span class="emphasis">transition-duration</span> property defines how long a transition takes.

```css
/* Changes background-color over 2 seconds */
transition-duration: 2s;
```

- <span class="emphasis">Values</span> are in <span class="emphasis">seconds(s)</span> or <span class="emphasis">milliseconds(ms)</span>.
- If omitted, the transition happens instantly.

---
### Transition-Timing-Function
---

The <span class="emphasis">transition-timing-function</span> property controls how the transition progresses over time.

```css
/* Smooth start and end */
transition-timing-function: ease;

/* Linear transition */
transition-timing-function: linear;

/* Slow start */
transition-timing-function: ease-in;

/* Slow end */
transition-timing-function: ease-out;

/* Slow start and end */
transition-timing-function: ease-in-out;
```

- **ease** (default) → Starts slow, speeds up, then slows down.
- **linear** → Moves at a **constant speed** from start to finish.
- **ease-in** → Starts slow, then speeds up.
- **ease-out** → Starts fast, then slows down.
- **ease-in-out** → Slow at both the start and end.

---
### Transition-Delay
---

The <span class="emphasis">transition-delay</span> property adds a pause before a transition begins.

```css
/* Waits 1 second before transitioning */
transition-delay: 1s;
```

- **Positive values** → Delay before transition starts.
- **Negative values** → Transition starts **midway**.

---
### Comparison: Transition vs. No Transition
---

<table class="comparisonTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Feature</th>
            <th class="tableCellHeader">With Transition</th>
            <th class="tableCellHeader">Without Transition</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>Property Change Effect</strong></td>
            <td class="tableCell">Smooth animation between states</td>
            <td class="tableCell">Instant and abrupt change</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>User Experience</strong></td>
            <td class="tableCell">More visually appealing and fluid</td>
            <td class="tableCell">Can feel jarring or unnatural</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Performance Impact</strong></td>
            <td class="tableCell">Minimal (hardware-accelerated in most cases)</td>
            <td class="tableCell">None</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>Best Use Case</strong></td>
            <td class="tableCell">Hover effects, UI state changes</td>
            <td class="tableCell">Static elements that do not need animation</td>
        </tr>
    </tbody>
</table>

---
### Combining Transition Properties
---

By using <span class="emphasis">transition-property</span>, <span class="emphasis">transition-duration</span>, <span class="emphasis">transition-timing-function</span>, and <span class="emphasis">transition-delay</span> together, developers can create **precise** and **controlled** animations.

```css
div {
  transition: color 1s ease-in-out 0.5s;
}

div:hover {
  color: red;
}
```

- The <span class="emphasis">color</span> transition occurs over <span class="emphasis">1 second</span>, using <span class="emphasis">ease-in-out</span>, **after** a <span class="emphasis">0.5-second delay</span>.

---
### Combining Transition-Property and Transition-Duration
---

By using <span class="emphasis">transition-property</span> and <span class="emphasis">transition-duration</span> <span class="secondEmphasis">together</span>, developers can create <span class="emphasis">smooth</span>, controlled animations instead of <span class="emphasis">abrupt</span> property changes.

```css
div {
  transition-property: all;
  transition-duration: 1s;
}

div:hover {
  color: red;
  background-color: black;
}
```

- The <span class="emphasis">color</span> transition occurs over <span class="emphasis">1 second</span> <span class="secondEmphasis">instead of</span> changing <span class="emphasis">instantly</span>.
- Using <span class="emphasis">all</span> applies the transition effect to <span class="emphasis">every</span> animatable property on the element.

---

---
### Comparison: Transition Timing Functions
---

<table class="comparisonTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Timing Function</th>
            <th class="tableCellHeader">Effect</th>
            <th class="tableCellHeader">Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>ease</strong></td>
            <td class="tableCell">Starts slow, speeds up, then slows down</td>
            <td class="tableCell">Default; works for most cases</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>linear</strong></td>
            <td class="tableCell">Same speed from start to finish</td>
            <td class="tableCell">Continuous movement, like a loading bar</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>ease-in</strong></td>
            <td class="tableCell">Slow start, then accelerates</td>
            <td class="tableCell">Good for elements entering the screen</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>ease-out</strong></td>
            <td class="tableCell">Fast start, then slows down</td>
            <td class="tableCell">Good for elements leaving the screen</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>ease-in-out</strong></td>
            <td class="tableCell">Slow start, speeds up, then slows again</td>
            <td class="tableCell">Smooth natural movement</td>
        </tr>
    </tbody>
</table>

## More to be added as transitions are completed...
