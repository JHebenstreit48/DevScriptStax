# Cypress Testing Code Examples

## Setting Up Cypress for Your Project  
---

1. Install Cypress:

```shell
npm install --save-dev cypress
```

2. Open Cypress Test Runner:

```shell
npx cypress open
```

3. Add Cypress Scripts to package.json:

```json
{
  "scripts": {
    "test": "cypress run",
    "cypress:open": "cypress open"
  }
}
```

4. Write and Execute Your First Test!

## Example Cypress Test

```javascript
describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome');
  });
});
```

Use this structure to add more Cypress tests and keep your test suite organized.
