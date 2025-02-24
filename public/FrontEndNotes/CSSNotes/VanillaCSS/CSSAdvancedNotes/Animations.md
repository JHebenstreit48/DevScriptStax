# Animations

CSS <span class="emphasis">animations</span> are inherently <span class="emphasis">visual</span>, meaning they show or render on <span class="emphasis">page load</span>.

---

### Difference Between Transitions and Animations

---

Unlike <span class="emphasis">transitions</span>, which require an explicit <span class="secondEmphasis">trigger</span> (such as hover, focus, or click), <span class="emphasis">animations</span> can start automatically without user interaction.

---

### Defining an Animation with @keyframes

---

To begin an animation, use the @ symbol followed by the word keyframes. Then after that, pick a name.

```css
@keyframes fadeBounce {
}
```

---

### Setting the 0% Stage of an Animation

---

When the animation is 0% complete, or in other words, has just begun, you can use the following code as a starting point. This will not create the bounce effect yet.

```css
@keyframes fadeBounce {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
}
```

---

### Completing the Animation with 100%

---

When the animation is 100% complete, you can use the following as a full start-to-end animation code example.

```css
@keyframes fadeBounce {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### Applying the Animation to an Element

---

Next, you would have to apply the animation to the appropriate element for the animation itself to take place. However, the bounce effect still has not been applied yet.

```css
.box-a {
  animation-name: fadeBounce;
  animation-duration: 1s;
}
```

### **animation-name: Defining the Animation to Use**

---

The animation-name property specifies **which keyframes animation** an element should use. If this property is not set, the animation **will not run**, even if other animation properties are present.

```css
.star {
  animation-name: fadeBounce;
  animation-duration: 2s;
}
```

This tells the element to use **the fadeBounce keyframes**, making it animate **according to the defined rules**.

If an invalid or non-existent animation name is provided, **the element will remain unchanged**.

---

### **animation-iteration-count: Controlling Looping**

---

The animation-iteration-count property controls **how many times** an animation will **repeat** before stopping. By default, an animation runs **once** unless specified otherwise.

```css
.star {
  animation-name: fadeBounce;
  animation-duration: 1s;
  animation-iteration-count: 3;
}
```

In this example, the animation will **play three times** and then stop.

If you want the animation to **loop endlessly**, you can set the value to infinite.

```css
.star {
  animation: fadeBounce 1s infinite;
}
```

Here, the animation will **run forever** without stopping.

---

### **animation-direction: Controlling Play Direction**

---

The animation-direction property determines **whether an animation plays forward, backward, or alternates direction** on each loop.

```css
.star {
  animation: fadeBounce 2s infinite;
  animation-direction: reverse;
}
```

In this example, the animation will **start from the end (100%) and play backward to the beginning (0%)** on each loop.

If you set the value to alternate, the animation will **switch directions on each iteration**—first playing **forward (0% → 100%)**, then **backward (100% → 0%)**, and repeating.

```css
.star {
  animation: fadeBounce 2s infinite alternate;
}
```

This creates a **smooth back-and-forth effect** without needing extra keyframes.

<table class="notesTable">  
    <thead>  
        <tr class="tableHeader">  
            <th class="tableCellHeader">Value</th>  
            <th class="tableCellHeader">Effect</th>  
        </tr>  
    </thead>  
    <tbody>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">normal</span></td>  
            <td class="tableCell">Default. The animation plays **from 0% to 100%**, then restarts.</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">reverse</span></td>  
            <td class="tableCell">The animation **plays backward**, starting at 100% and ending at 0%.</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">alternate</span></td>  
            <td class="tableCell">The animation **switches direction** on each loop—first forward (0% → 100%), then backward (100% → 0%).</td>  
        </tr>  
        <tr class="tableRow">  
            <td class="tableCell"><span class="codeSnip">alternate-reverse</span></td>  
            <td class="tableCell">Like <span class="codeSnip">alternate</span>, but **starts in reverse** (100% → 0%) before switching directions.</td>  
        </tr>  
    </tbody>  
</table>

---

### **Using animation Shorthand for Multiple Effects**

---

The animation property can **combine multiple animation settings** into a **single line**, making the code **more concise and readable**.

```css
.star {
  animation: slideSpin 2s infinite alternate forwards;
}
```

This shorthand achieves the following:

- slideSpin → Uses a predefined animation name.
- 2s → Runs for **2 seconds** per loop.
- infinite → Loops **endlessly**.
- alternate → **Reverses direction** on each loop.
- forwards → Keeps the **final animation state** after finishing.

Using shorthand makes it **easier to manage** multiple animation properties at once.

---

### **Keeping the Final State with animation-fill-mode**

---

By default, once an animation completes, the element will **return to its original state** before the animation started. However, you can **retain the final keyframe styles** by using the **animation-fill-mode** property.

```css
.box-a {
  opacity: 0;
  animation-name: fadeBounce;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  background-color: black;
}
```

Here, animation-fill-mode: forwards; ensures that **after the animation ends**, the element **keeps the styles from the 100% stage** of the animation. Without it, the element would **revert back to its initial state**.

---

### **Using the animation Shorthand**

---

Instead of setting **each animation property separately**, you can combine them into a **single shorthand property**. This reduces repetition while keeping the same functionality.

```css
.box-a {
  opacity: 0;
  animation: fadeBounce 1s forwards;
  background-color: black;
}
```

This is equivalent to:

```css
.box-a {
  animation-name: fadeBounce;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
```

Using the shorthand property **keeps the code cleaner** while maintaining the same animation behavior.

---

### animation-delay: Controlling Animation Timing

---

The <span class="emphasis">animation-delay</span> property specifies <span class="emphasis">how long</span> an element should <span class="emphasis">wait</span> before <span class="emphasis">starting</span> its animation. This is useful for <span class="emphasis">staggering</span> animations of <span class="emphasis">multiple</span> elements on <span class="emphasis">page load</span> or in relation to <span class="emphasis">each other</span>.

```css
.boxes :nth-child(2) .box-a {
  animation-delay: 0.5s;
}

.boxes :nth-child(3) .box-a {
  animation-delay: 1s;
}

.boxes :nth-child(4) .box-a {
  animation-delay: 1.5s;
}
```

Here, the <span class="emphasis">second child</span> starts after <span class="secondEmphasis">0.5 seconds</span>, the <span class="emphasis">third child</span> after <span class="secondEmphasis">1 second</span>, and the <span class="emphasis">fourth child</span> after <span class="secondEmphasis">1.5 seconds</span>, creating a <span class="emphasis">staggered</span> animation effect.

---

### Adding Intermediate States to Create a Bounce Effect

---

Creating intermediate states between the 0% and 100% stages of the animation will allow you to start adding in the bounce effect.

---

### Simple and Completed Bounce Animation

---

The following is an example of a simple and completed bounce animation.

```css
/* Bounce Animation */
@keyframes fadeBounce {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }

  40% {
    transform: translateY(0);
  }

  55% {
    transform: translateY(-6px);
  }

  70% {
    opacity: 1;
    transform: translateY(0);
  }

  85% {
    transform: translateY(-3px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```
