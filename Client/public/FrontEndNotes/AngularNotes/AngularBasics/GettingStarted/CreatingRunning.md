## Creating & Running an Angular Application
---

### 1. Install Angular CLI

Angular CLI is the official command-line tool for creating and managing Angular projects.

```shell  
npm install -g @angular/cli  
```

💡 **Tip:** After installation, verify the CLI version by running:

```shell  
ng version  
```

If installed correctly, this will display the Angular CLI version, Node.js version, and other relevant environment details.

---

### 2. Generate a New Angular Project
Create a new Angular project by running:

```shell  
ng new my-angular-app  
```

Follow the CLI prompts to configure the project options:

```shell  
CLI Prompts (Interactive)
-------------------------------------------
? Would you like to add Angular routing? (y/N) → Yes
? Which stylesheet format would you like to use? (CSS, SCSS, LESS, Stylus) → SCSS
-------------------------------------------  
```
🔹 **Additional CLI Flags:**  
- To skip routing:  

```shell  
ng new my-angular-app --skip-routing  
```

- To set a specific styling format:  

```shell  
ng new my-angular-app --style=scss  
```

---

### 3. Navigate to the Project Folder
Once the project is created, move into your project directory:

```shell  
cd my-angular-app  
```

---

### 4. Serve the Application
Run the development server with:

```shell  
ng serve  
```

By default, this starts a local development server and automatically recompiles changes.  

```shell  
# ✔ Compiled successfully.  
# Angular Live Development Server is running on http://localhost:4200/  

# 📌 **Access the application in a web browser at:**  
# 🌐 http://localhost:4200  
```

---

### 5. Customizing the Development Server
🔹 **Run the server on a different port (default is 4200):**  

```shell  
ng serve --port 4500  
```

🔹 **Enable Hot Module Replacement (HMR) for faster live updates:**  

```shell  
ng serve --hmr  
```

---

### 6. Understanding Development vs. Production Mode
By default, ng serve runs in **development mode**, which includes debugging tools and source maps.

To create an optimized **production build**, use:

```shell  
ng build --prod  
```

This generates a **minified, tree-shaken dist/ folder** ready for deployment.

---
