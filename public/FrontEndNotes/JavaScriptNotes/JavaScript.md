
---

### Conditional Statements

JavaScript provides conditional statements to execute code based on specific conditions. They help control the flow of the program by executing certain blocks of code only when particular conditions are true.

- <span class="emphasis">if</span>: Executes a block of code if a specified condition evaluates to true.
- <span class="emphasis">else</span>: Executes an alternative block of code if the condition in the if statement evaluates to false.
- <span class="emphasis">else if</span>: Allows additional conditions to be tested if the previous conditions were false.
- <span class="emphasis">switch</span>: Provides a way to test a variable or expression against multiple possible values and execute different blocks of code depending on the match.

---

### Loops

Loops are used in JavaScript to execute a block of code multiple times. They are particularly useful when working with collections of data or when repeating an action until a specific condition is met.

- <span class="emphasis">for</span>: A loop that runs a block of code a specific number of times. It is commonly used when the number of iterations is known beforehand.
- <span class="emphasis">while</span>: A loop that continues to execute a block of code as long as a specified condition remains true. It is useful when the number of iterations is not known in advance.
- <span class="emphasis">forEach</span>: A method available on arrays that iterates over each element in the array, executing a specified function for each element.

---

---

## Modules
---

JavaScript modules allow developers to organize code into reusable components. When exporting a module, you can rename a function or class to better match the context in which it is being used.

---

### Managing Import Paths
---

JavaScript allows developers to organize code using imports, which can reference files in different parts of the project.

- **Relative Paths:** Use <span class="emphasis">./</span>, <span class="emphasis">../</span>, or <span class="emphasis">../../</span> to navigate directories. While effective in small projects, they can become unwieldy in larger, deeply nested structures.
- **Path Aliases:** Offer a cleaner alternative. By defining aliases in tools like Webpack or Rollup, developers can use shorthand paths, such as <span class="emphasis">@/</span>, to reference directories like <span class="emphasis">src/</span>.

Path aliases improve readability and reduce the effort required during refactoring.

