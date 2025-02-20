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

- <span class="emphasis">ease</span> <span class="secondEmphasis">(default)</span> : Starts <span class="emphasis">slow</span>, <span class="emphasis">speeds up</span>, then <span class="emphasis">slows down</span>.
- <span class="emphasis">linear</span> : Moves at a <span class="emphasis">constant</span> speed from <span class="emphasis">start</span> to <span class="emphasis">finish</span>.
- <span class="emphasis">ease-in</span> : Starts <span class="emphasis">slow</span>, then <span class="emphasis">speeds up</span>.
- <span class="emphasis">ease-out</span> : Starts <span class="emphasis">fast</span>, then <span class="emphasis">slows down</span>.
- <span class="emphasis">ease-in-out</span> : <span class="emphasis">Slow</span> at <span class="secondEmphasis">both</span> the <span class="emphasis">start</span> and <span class="emphasis">end</span>.

---

### Transition-Delay

---

The <span class="emphasis">transition-delay</span> property adds a <span class="emphasis">pause</span> <span class="secondEmphasis">before</span> a transition <span class="emphasis">begins</span>.

```css
/* Waits 1 second before transitioning */
transition-delay: 1s;
```

- <span class="emphasis">Positive values</span> : Delay before transition starts.
- <span class="emphasis">Negative values</span> : Transition starts **midway**.

---

### Real-World Example: Hover Effect with Transform and Opacity

---

The following example demonstrates how transitions work with **positioning**, **overflow handling**, and **transforms**.

```css
/* Container: establishes relative positioning and hides overflow */
.box {
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
}

/* Image: applies a smooth transition for scaling */
.box img {
  transition: all 1.7s;
}

/* Image hover effect: enlarges the image by scaling up */
.box:hover img {
  transform: scale(1.5);
}

/* Text: initially hidden with opacity 0 and positioned below view */
.text {
  position: absolute;
  opacity: 0;
  transition-property: all;
  transition-duration: 1s;
  transform: translateY(100%);
}

/* Text hover effect: fades in and moves into view */
.box:hover .text {
  opacity: 1;
  transform: translateY(0);
}
```

---

### Explanation of the Example

---

#### Positioning & Overflow:

- The .box container uses position: relative so that its child elements (such as .text) can be absolutely positioned within it.
- overflow: hidden ensures that any scaling of the image remains contained within the boundaries of .box.

#### Image Scaling:

- The image inside .box is set to transition with "transition: all 1.7s", allowing it to animate smoothly when its properties change.
- On hover, the image scales up via "transform: scale(1.5)", enlarging it by 1.5 times for a dynamic effect.

#### Text Reveal Effect:

- The .text element is initially hidden by setting opacity: 0 and positioning it off-screen with "transform: translateY(100%)".
- By defining "transition-property: all" and "transition-duration: 1s", the element’s opacity and transform properties animate smoothly.
- On hover, the .text element transitions to opacity: 1 and transform: translateY(0), causing it to fade in and slide into view over 1 second.

---

### Comparison: Transition vs. No Transition

---

<table class="notesTable">
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

By using <span class="emphasis">transition-property</span>, <span class="emphasis">transition-duration</span>, <span class="emphasis">transition-timing-function</span>, and <span class="emphasis">transition-delay</span> together, developers can create <span class="secondEmphasis">precise</span> and <span class="secondEmphasis">controlled</span> animations.

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

### Comparison: Transition Timing Functions

---

<table class="notesTable">
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
