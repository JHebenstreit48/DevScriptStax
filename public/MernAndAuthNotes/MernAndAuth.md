# MERN Stack and Authentication Notes

## What is the MERN Stack?

<span class="emphasis">MERN</span> is short for MongoDB, Express.js, React.js, and Node.js.

### Architecture
- The MERN stack uses a three-layer architecture based on the Model-View-Controller (MVC) design pattern.
- Each interconnected layer performs a specific function in the web application.

### Layers
1. **Client Layer**
   - Uses React.js.
   - Controls what the user sees and how the user interacts with the data.

2. **Server Layer**
   - Uses Node.js and Express.js.

---

## Authentication in MERN

### Authentication Process
Authentication involves verifying the identity of a user to ensure they are authorized to access specific resources in the application.

### Common Authentication Techniques
1. **Session-Based Authentication**
   - Sessions are stored on the server.
   - Typically involves cookies to maintain the user’s state.

2. **Token-Based Authentication**
   - Uses JSON Web Tokens (JWT) for stateless authentication.
   - Tokens are signed and encoded with user information.

---

### Advantages of Token-Based Authentication
- Stateless: No server-side storage of sessions.
- Scalability: Works well in distributed systems or cloud environments.
- Cross-Domain: Ideal for SPAs (Single Page Applications) and mobile apps.

---

## Security Best Practices

1. **Use HTTPS**
   - Ensures secure communication between client and server.

2. **Hash Passwords**
   - Use algorithms like bcrypt to securely store passwords.

3. **Validate Inputs**
   - Prevent injection attacks by validating all user inputs.

4. **Implement Role-Based Access Control (RBAC)**
   - Define user roles to control access to specific resources.

5. **Store Secrets Securely**
   - Store keys, tokens, and sensitive configuration in environment variables or secure vaults.

```
