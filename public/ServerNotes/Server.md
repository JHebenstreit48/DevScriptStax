## Server Basics
---

A server is a program or device that responds to client requests by delivering data, services, or other resources. Servers are essential in web development to handle HTTP requests and serve responses.

---

## HTTP Methods and CRUD Operations
---

### HTTP Methods
HTTP methods are a set of request types used to interact with resources. These include:
- **Create**
- **Read**
- **Update**
- **Delete**  

This is collectively known as CRUD.

---

## Express.js Framework
---

### What is Express.js?
Express.js is a lightweight framework for Node.js that allows developers to:
- Write API handlers.
- Handle HTTP requests.
- Implement middleware for server-side applications.

---

### Frameworks vs Libraries
- **Frameworks**: Follow a strict set of rules for implementation.
- **Libraries**: Offer more flexibility and don't enforce strict rules.

---

## Fetch API
---

The **Fetch API** is used to make requests to specific API endpoints and process the response. It supports all HTTP methods (GET, POST, PUT, DELETE) and is commonly used for client-server communication.

---

## Handling Server Responses
---

### res.sendFile
- Sends a file or webpage from the server to the client.
- Useful for serving static assets like HTML, CSS, or image files.

### res.json
- Sends JSON-formatted data like objects or arrays as a response to the client.
- Commonly used for APIs to return structured data.

---

## Asynchronous Code in Servers
---

### Synchronous vs Asynchronous Code
- **Synchronous**: Executes code from top to bottom as quickly as possible.
- **Asynchronous**: Handles tasks that require waiting (e.g., API calls) without blocking execution.

### Async/Await
- Built on Promises but offers a cleaner syntax.
- Improves code readability for asynchronous operations.
- Preferred over .then() and .catch() for its simplicity.

---

## Placeholder for Additional Notes
---

### Middleware
- Handling JSON and raw data with middleware like express.json() and express.raw().

### Error Handling
- Techniques for logging and debugging server errors.

---
