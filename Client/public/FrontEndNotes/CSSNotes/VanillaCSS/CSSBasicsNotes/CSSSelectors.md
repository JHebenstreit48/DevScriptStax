## Selectors

### Basic Selectors
---  

CSS selectors target specific <span class="emphasis">HTML elements</span> for styling:

```css
header {
  background-color: lightgray;
  /* Targets all <header> elements */
}
p {
  color: green;
  /* Targets all <p> elements */
}
```

---

### Descendant Selectors
 

Descendant selectors target elements nested within a specific parent:

```css
header p {
  color: green;
  /* Targets <p> elements inside <header> */
}

header p span {
  color: blue;
  /* Targets <span> inside <p> within <header> */
}
```
---
### Advanced Selectors
 
<br>

#### Universal Selector 

```css
* {
  margin: 0;
  padding: 0;
}
```

- Targets all elements on the page.

<br>

#### Attribute Selector

```css
input[type="text"] {
  border: 1px solid gray;
}
```

- Targets elements with specific attributes.

<br>

#### Pseudo-Classes

```css
a:hover {
  text-decoration: underline;
}
```

- Targets elements in a specific state, such as <span class="emphasis">hover</span> or <span class="secondEmphasis">focus</span>.

<br>

#### Pseudo-Elements

```css
p::first-line {
  font-weight: bold;
}
```

- Targets specific parts of elements, such as <span class="secondEmphasis">::first-line</span> or <span class="secondEmphasis">::before</span>.
