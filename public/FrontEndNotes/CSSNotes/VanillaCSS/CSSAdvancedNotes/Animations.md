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
