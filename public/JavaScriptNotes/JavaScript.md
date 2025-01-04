# JavaScript Basics

## Overview
---

JavaScript serves as the brain or nervous system of a web page. It provides the logic and extra functionality that enhances a webpage’s interactivity and user experience.

---

## Key Concepts
---

### Variables

Variables are containers used to store data values. In JavaScript, you can declare variables using the <span class="emphasis">var</span>, <span class="emphasis">let</span>, or <span class="emphasis">const</span> keywords.

---

### Data Types

JavaScript supports several data types, including:
- <span class="emphasis">Number</span>: Represents both integers and floating-point numbers.
- <span class="emphasis">String</span>: Represents textual data.
- <span class="emphasis">Boolean</span>: Represents true or false values.
- <span class="emphasis">Object</span>: Represents collections of properties.
- <span class="emphasis">Undefined</span>: Represents a variable that has been declared but not assigned a value.

---

### Methods

A method is a function that is associated with an object in JavaScript. These methods are used to perform specific operations on the object they belong to. JavaScript provides a wide range of built-in methods for various objects, such as strings, arrays, and numbers, which simplify common programming tasks.

#### Examples of Common Methods:

- String Methods: These methods operate on text data and allow you to manipulate strings.
  - <span class="emphasis">toUpperCase</span>: Converts all characters in a string to uppercase letters.
  - <span class="emphasis">toLowerCase</span>: Converts all characters in a string to lowercase letters.
  - <span class="emphasis">slice</span>: Extracts a section of a string and returns it as a new string without modifying the original one.
  - <span class="emphasis">replace</span>: Finds a substring or pattern in a string and replaces it with a new value.

- Array Methods: These methods are used to manipulate or process lists of data stored in arrays.
  - <span class="emphasis">push</span>: Adds one or more elements to the end of an array.
  - <span class="emphasis">pop</span>: Removes the last element from an array and returns it.
  - <span class="emphasis">map</span>: Creates a new array by applying a function to each element of the original array.
  - <span class="emphasis">filter</span>: Creates a new array containing only the elements that meet a specified condition.

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

### parseFloat

#### What is parseFloat

<span class="emphasis">parseFloat</span> is a built-in JavaScript function that parses a string argument and returns a floating-point number. It is especially useful for converting numeric strings into usable numbers in calculations.

#### Key Points:

- Parses strings to return a floating-point number.
- Stops parsing when it encounters a character that is not part of a number.
- Returns a special value called NaN (Not a Number) if the first character in the string cannot be converted to a number.

---

### String Manipulation with replace

#### What is replace

<span class="emphasis">replace</span> is a JavaScript string method used to find and replace substrings or patterns within a string.

#### Key Points:

- It searches for specific text or patterns and replaces them with new text.
- It can handle advanced search patterns through regular expressions.
- Commonly used in web development to clean or reformat data, like standardizing numeric strings.

---

### Conditional Logic with the Ternary Operator

#### What is the Ternary Operator

The ternary operator is a concise way to write conditional logic in JavaScript. It allows developers to evaluate a condition and return one value if the condition is true, and a different value if it is false.

#### Explanation:

The ternary operator simplifies the structure of conditional logic, making it easier to write and read. It is especially useful in dynamic rendering or data transformations.

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

