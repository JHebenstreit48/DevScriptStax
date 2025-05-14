## Event Handling

---

### Placeholder for an Event

The parameter <span class="emphasis">(e)</span> inside a <span class="secondEmphasis">function</span> serves as a placeholder for the <span class="emphasis">Event object</span>. It allows access to <span class="secondEmphasis">event properties</span>.

```javascript
document.querySelector("button").addEventListener("click", (e) => {
  console.log("Button clicked", e.type); // Outputs: Button clicked click
});
```

---

### Preventing Default Behavior

The <span class="emphasis">preventDefault()</span> method stops the browser's <span class="secondEmphasis">default behavior</span>, such as submitting a <span class="emphasis">form</span> or navigating a <span class="secondEmphasis">link</span>.

```javascript
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Default form submission prevented");
});
```

---

## Summary

These examples demonstrate core <span class="emphasis">JavaScript</span> techniques, including exporting <span class="secondEmphasis">functions</span>, handling <span class="emphasis">events</span>, using <span class="secondEmphasis">array methods</span>, and working with <span class="emphasis">strings</span>. Mastering these concepts will help you build <span class="secondEmphasis">dynamic</span> and <span class="emphasis">interactive</span> applications.

---
