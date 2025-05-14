## Promises

---

### What is a Promise?

A Promise is an object in JavaScript that represents the eventual result of an asynchronous operation.  
It allows you to write asynchronous code in a cleaner, more manageable way than using nested callbacks.

---

### Promise States

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">State</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Pending</span></td>
      <td class="tableCell">Initial state — operation not completed yet</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Fulfilled</span></td>
      <td class="tableCell">Operation completed successfully and returned a value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Rejected</span></td>
      <td class="tableCell">Operation failed and returned a reason (error)</td>
    </tr>
  </tbody>
</table>

Once a Promise is settled (fulfilled or rejected), it cannot change state again.

---

### Creating a Promise

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("The operation was successful");
  } else {
    reject("Something went wrong");
  }
});

---

### Using .then() and .catch()

<span class="codeSnip">.then()</span> is used to handle a fulfilled result.  
<span class="codeSnip">.catch()</span> is used to handle a rejected result or thrown error.

myPromise
  .then(result => {
    console.log("Resolved with:", result);
  })
  .catch(error => {
    console.error("Rejected with:", error);
  });

---

### Chaining Promises

Each <span class="codeSnip">.then()</span> returns a new Promise, allowing multiple steps to be chained cleanly.

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Data received:", data);
    return processData(data);
  })
  .then(processed => {
    console.log("Processed data:", processed);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });

---

### Visual Breakdown of a Promise Chain

[fetch()]  
   ↓  
.then(response => ...)  
   ↓  
.then(data => ...)  
   ↓  
.then(processed => ...)  
   ↓  
.catch(error => ...)

---

### Manually Throwing an Error in .then()

You can throw an error inside a <span class="codeSnip">.then()</span> block to trigger the nearest <span class="codeSnip">.catch()</span>.

.then(data => {
  if (!data) {
    throw new Error("No data returned");
  }
  return data;
})

---

### Summary

- Promises handle asynchronous results using <span class="codeSnip">.then()</span> and <span class="codeSnip">.catch()</span>
- Each <span class="codeSnip">.then()</span> returns a new Promise and can pass values down the chain
- Errors can be caught using <span class="codeSnip">.catch()</span>, even if thrown in earlier steps
- This model improves readability over deeply nested callbacks
