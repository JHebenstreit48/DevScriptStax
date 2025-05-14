## Built-in Methods in JavaScript

---

### What Are Built-in Methods?

<span class="emphasis">Built-in methods</span> are predefined functions provided by JavaScript that you can use on common data types like <span class="secondEmphasis">strings</span> and <span class="secondEmphasis">numbers</span>.

✅ They help you manipulate and evaluate data easily.  
✅ Methods are called with parentheses <span class="codeSnip">()</span> after the value.  
✅ Strings and numbers have many helpful methods available without you needing to define them yourself.

---

## String Methods

---

### .toUpperCase()

Converts a string to uppercase letters.

```javascript
let name = "alice";  
console.log(name.toUpperCase()); // "ALICE"
```

---

### .toLowerCase()

Converts a string to lowercase.

```javascript
let title = "JAVASCRIPT";  
console.log(title.toLowerCase()); // "javascript"
```

---

### .charAt()

Returns the character at a specific index.

```javascript
let word = "hello";  
console.log(word.charAt(1)); // "e"
```

---

### .trim()

Removes whitespace from both ends of a string.

```javascript
let messy = "  clean me  ";  
console.log(messy.trim()); // "clean me"
```

---

### .split()

Splits a string into an array using a separator.

```javascript
let sentence = "apple,banana,grape";  
let fruits = sentence.split(",");  
console.log(fruits); // ["apple", "banana", "grape"]
```

---

## Number Methods and Utilities

---

### .toFixed()

Rounds a number to a fixed number of decimal places and returns a string.

```javascript
let price = 5.6789;  
console.log(price.toFixed(2)); // "5.68"
```

---

### parseInt()

Converts a string into an integer (whole number).

```javascript
let strNum = "42";  
console.log(parseInt(strNum)); // 42
```

---

### parseFloat()

Converts a string into a floating-point number (decimal supported).

```javascript
let value = "3.14";  
console.log(parseFloat(value)); // 3.14
```

---

### isNaN()

Checks if a value is <span class="emphasis">Not a Number</span>.

```javascript
console.log(isNaN("hello")); // true  
console.log(isNaN(123));     // false
```

---

## Type Conversion Helpers

---

### String()

Converts a value into a string.

```javascript
let age = 25;  
console.log(String(age)); // "25"
```

---

### .replace()

<span class="emphasis">replace</span> is a JavaScript string method used to find and replace substrings or patterns within a string.

#### Key Points:

- It searches for specific text or patterns and replaces them with new text.
- It can handle advanced search patterns through regular expressions.
- Commonly used in web development to clean or reformat data, like standardizing numeric strings.

```javascript
let greeting = "Hello World";  
let newGreeting = greeting.replace("World", "JavaScript");  
console.log(newGreeting); // "Hello JavaScript"
```

---

### Number()

Converts a string or boolean into a number.

```javascript
let isTrue = true;  
console.log(Number(isTrue)); // 1
```

---

### typeof

Returns the data type of a value.

```javascript
let x = "hello";  
console.log(typeof x); // "string"
```

---

## Summary

✅ <span class="codeSnip">.toUpperCase()</span>, <span class="codeSnip">.split()</span>, <span class="codeSnip">.trim()</span> make strings easier to work with.  
✅ <span class="codeSnip">parseInt()</span>, <span class="codeSnip">toFixed()</span>, and <span class="codeSnip">isNaN()</span> are essential for number manipulation.  
✅ Use <span class="codeSnip">String()</span> and <span class="codeSnip">Number()</span> to convert between types.  
✅ <span class="codeSnip">typeof</span> helps you check what kind of data you’re working with.

---
