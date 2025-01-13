## Creating Vue App with Vite  
---

1. Install Vite:

```shell
npm create vite@latest . -- --template vue
```

2. Install Dependencies

```shell
npm i
```
or

```shell
npm install
```

3. Start the Development Server

```shell
npm run dev
```

## Creating Vue App with Vue CLI  
---

1. Install Vue CLI

```shell
npm install -g @vue/cli
```

2. Initialize the Project

```shell
vue create .
```

3. Start the Development Server

```shell
npm run serve
```

### Example Vue Project file Structure

```perl
my-vue-app/
├── public/                 # Static files
├── src/                    # Main application source code
│   ├── components/         # Vue components
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Entry point
├── package.json            # Project metadata
├── vite.config.js          # Configuration file (for Vite)
└── README.md               # Project documentation
```

## Configuring Path Aliases with Vite  
---

Path aliases simplify imports in complex Vue projects by allowing you to replace long relative paths with short, meaningful ones. This is especially useful when using Vite as your modern tooling solution for Vue projects.

### Configuration in vite.config.js

javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

### Example: Relative Path vs. Alias

#### Without Alias (Relative Path)
javascript
import MyComponent from '../../components/MyComponent.vue';

#### With Alias
javascript
import MyComponent from '@/components/MyComponent.vue';

### Explanation

- **Alias `@`:** The alias `@` points to the `src` directory, simplifying file imports.
- **Benefits:** This configuration reduces complexity, improves readability, and enhances productivity, especially in large-scale Vue projects.

---
