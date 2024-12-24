# Server Code Examples
---

## HTTP Request Methods

### POST Request

The following <span class="secondEmphasis">HTTP request method</span> <span class="emphasis">creates</span> new <span class="emphasis">data</span> or <span class="emphasis">resources</span> on a <span class="emphasis">server</span>:

```javascript
.post()
```

Example:

```javascript
app.post('/create', (req, res) => {
  res.send('Resource created');
});
```

---

### GET Request

The following <span class="secondEmphasis">HTTP request method</span> <span class="emphasis">retrieves</span> or <span class="emphasis">requests</span> a <span class="emphasis">resource</span> from the <span class="emphasis">server</span>:

```javascript
.get()
```

Example:

```javascript
app.get('/data', (req, res) => {
  res.json({ message: 'Hello World', status: 200 });
});
```

---

### PUT Request

The following <span class="secondEmphasis">HTTP request method</span> <span class="emphasis">updates</span> data that already exists on a <span class="emphasis">server</span>:

```javascript
.put()
```

Example:

```javascript
app.put('/update', (req, res) => {
  res.send('Resource updated');
});
```

---

### DELETE Request

The following <span class="secondEmphasis">HTTP request method</span> <span class="emphasis">deletes</span> a specified <span class="emphasis">resource</span> or <span class="emphasis">data</span> from a <span class="emphasis">server</span>:

```javascript
.delete()
```

Example:

```javascript
app.delete('/delete', (req, res) => {
  res.send('Resource deleted');
});
```

---

## Middleware in Express

### Parsing Incoming JSON

The following Express method is middleware used to <span class="emphasis">parse</span>, (make it <span class="emphasis">readable</span> by the <span class="emphasis">server</span>), incoming <span class="emphasis">JSON</span> data within the <span class="secondEmphasis">request body</span>:

```javascript
app.use(express.json());
```

---

### Reading Raw Data

The following <span class="emphasis">Express method</span> is used to <span class="emphasis">read</span> the <span class="emphasis">raw</span> incoming <span class="emphasis">request</span> data and <span class="emphasis">store</span> it in a <span class="emphasis">buffer object</span>:

```javascript
app.use(express.raw());
```

---

## Handling Server Responses

### Sending Files with <span class="emphasis">res.sendFile</span>

Serving an HTML file using <span class="emphasis">res.sendFile</span>:

```javascript
const path = require('path');
app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
```

---

### Sending JSON Data with <span class="emphasis">res.json</span>

Sending a JSON response with <span class="emphasis">res.json</span>:

```javascript
app.get('/data', (req, res) => {
  res.json({ message: 'Hello World', status: 200 });
});
```

---

## Fetch API

### Fetch API Overview

The following <span class="emphasis">JavaScript API/tool</span> can perform all of the CRUD operations:

- It also defaults to a <span class="emphasis">GET</span> request:

```javascript
fetch()
```

---

### Example: Fetch API GET Request

Fetching data from an API using the <span class="emphasis">Fetch API</span>:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

### Example: Fetch API POST Request

Sending data to an API with a <span class="emphasis">POST</span> request:

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## Promises and Async/Await

### Using Promises

Promises use the following methods to handle <span class="secondEmphasis">asynchronous operations</span>:

```javascript
.then()
.catch()
```

Example:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

### Using Async/Await

The <span class="emphasis">async/await</span> syntax simplifies handling of <span class="secondEmphasis">asynchronous operations</span>:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## Handling User Input with Inquirer

### Using <span class="emphasis">inquirer.prompt</span>

The following code shows how to use <span class="emphasis">inquirer.prompt</span> to wait for user input:

```javascript
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.userName}!`);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

## Placeholder for Additional Code Examples

### Error Handling

Add examples for:
- Logging errors.
- Returning custom error responses.

---

### Advanced Middleware

Add examples for:
- Implementing custom middleware for specific use cases.
- Managing authentication and authorization.

