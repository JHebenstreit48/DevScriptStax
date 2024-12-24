# Vitest Code Examples

## Setting Up Vitest in Your Project  
---

1. Install Vitest as a development dependency:

```shell
npm install --save-dev vitest
```

2. Add a test script to your `package.json` file:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

3. Run your tests using the command:

```shell
npm test
```

---

## Writing Your First Test  
---

1. Create a test file, such as `example.test.js` or `example.test.ts`.
2. Write a simple test:

```javascript
import { describe, it, expect } from 'vitest';

describe('Basic Test Suite', () => {
  it('should add numbers correctly', () => {
    const sum = 1 + 2;
    expect(sum).toBe(3);
  });
});
```

---

## Advanced Testing Features  
---

### Mocking a Module

```javascript
import { vi } from 'vitest';
import { fetchData } from './api';

vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve('mocked data')),
}));

describe('Mocking Example', () => {
  it('fetches mocked data', async () => {
    const data = await fetchData();
    expect(data).toBe('mocked data');
  });
});
```

---

### Snapshot Testing

```javascript
import { describe, it, expect } from 'vitest';

describe('Snapshot Example', () => {
  it('matches the snapshot', () => {
    const ui = '<div>Hello World</div>';
    expect(ui).toMatchSnapshot();
  });
});
```

---

Use this structure to organize your tests and explore Vitest's full range of features.
