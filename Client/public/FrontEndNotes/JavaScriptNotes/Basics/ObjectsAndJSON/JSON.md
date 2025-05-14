## Working with JSON

---

### What Is JSON?

<span class="emphasis">JSON</span> (JavaScript Object Notation) is a lightweight format for storing and exchanging data.  
It’s based on JavaScript object syntax but follows stricter rules to ensure universal compatibility.

✅ JSON is widely used to send data between a server and a web app  
✅ Easy for both humans and machines to read and write

---

### Key Differences Between JSON and JavaScript Objects

| Rule | JavaScript Objects | JSON |
|------|---------------------|------|
| Quotes around keys | ❌ Optional (if valid) | ✅ Always required (double quotes only) |
| Quotes around string values | ✅ Required | ✅ Required |
| Quotes around number/boolean/null | ❌ Not allowed | ❌ Not allowed |
| Valid key names | Any valid identifier (or quoted string) | Must be quoted strings |
| Trailing commas | Allowed in JS | ❌ Not allowed in JSON |

---

### Example Comparison

✅ JavaScript object:

let jsObj = {
  name: "Alice",
  age: 30,
  isMember: true
};

✅ JSON equivalent:

{
  "name": "Alice",
  "age": 30,
  "isMember": true
}

❌ Invalid JSON (missing quotes):

{
  name: "Alice"  // ❌ error: missing quotes around key
}

---

### JSON Keys: Why Double Quotes?

JSON is a strict data format meant for interoperability between systems and languages.  
Double quotes ensure that parsers in any programming language can reliably read the data.

✅ JavaScript is more relaxed and developer-friendly.  
✅ JSON must be predictable, so it enforces stricter rules.

---

### JSON Values: When Are Quotes Required?

✅ Only strings need quotes  
❌ Numbers, booleans, arrays, objects, or null do NOT need quotes

| Value Type | Quotes Required? | Example |
|------------|------------------|---------|
| String | ✅ Yes | "hello" |
| Number | ❌ No | 42 |
| Boolean | ❌ No | true |
| null | ❌ No | null |
| Array | ❌ No | [1, 2, 3] or ["a", "b"] |
| Object | ❌ No | { "a": 1 } |

---

### Common Pitfall: Numbers in Quotes

✅ Correct:

{
  "quantity": 70
}

❌ Incorrect (value is now a string):

{
  "quantity": "70"
}

Even though this is valid JSON, using quotes turns the number into a string, which can break math logic.

---

### JSON.stringify()

Converts a JavaScript object into a JSON-formatted string.  
Useful when you want to store or transmit structured data.

let obj = {
  name: "Alice",
  age: 30
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);  
// Output: '{"name":"Alice","age":30}'

✅ Common use cases:
- Sending data in a POST request
- Saving structured data in localStorage
- Logging full object structures

⚠️ Only enumerable, own properties get included (functions are excluded).

---

### JSON.parse()

Takes a JSON string and turns it back into a JavaScript object.

let jsonStr = '{"name":"Alice","age":30}';
let parsedObj = JSON.parse(jsonStr);

console.log(parsedObj.name); // "Alice"

✅ Common use cases:
- Reading data from an API response
- Loading data from storage
- Converting static config into usable variables

⚠️ JSON.parse() will throw an error if the string isn’t properly formatted JSON.

---

### Summary

✅ JSON is stricter than JS objects  
✅ Keys must use double quotes  
✅ Only string values need quotes  
✅ Use <span class="codeSnip">JSON.stringify()</span> to convert JS → JSON  
✅ Use <span class="codeSnip">JSON.parse()</span> to convert JSON → JS  
✅ Avoid quoting numbers unless you intend to treat them as strings

---
