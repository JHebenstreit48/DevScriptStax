## Object Utilities and Common Patterns

---

### Destructuring Objects

Object destructuring lets you extract properties from an object into individual variables.

let user = {
  name: "Alice",
  age: 30,
  country: "USA"
};

let { name, age } = user;

console.log(name); // "Alice"
console.log(age);  // 30

✅ Destructuring makes your code cleaner and reduces repetition.

---

### Renaming While Destructuring

You can rename properties when destructuring:

let { name: userName, age: userAge } = user;

console.log(userName); // "Alice"
console.log(userAge);  // 30

---

### Object.freeze() and Object.seal()

Use these to restrict modification of an object.

✅ Freeze: No changes allowed (no new properties, deletions, or edits)

let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // ❌ Fails silently or throws in strict mode

✅ Seal: Allows editing existing properties but no new ones or deletions

let user = { name: "Alice" };
Object.seal(user);
user.name = "Bob"; // ✅ Works
user.age = 25;     // ❌ Won't be added

---

### Object.keys(), values(), entries()

These utilities allow you to loop over or access an object’s structure:

let car = {
  make: "Toyota",
  year: 2023
};

console.log(Object.keys(car));    // ["make", "year"]
console.log(Object.values(car));  // ["Toyota", 2023]
console.log(Object.entries(car)); // [["make", "Toyota"], ["year", 2023]]

---

### Looping Through an Object

Use a <span class="codeSnip">for...in</span> loop to iterate over an object's keys:

for (let key in car) {
  console.log(key + ": " + car[key]);
}

⚠️ Consider using <span class="codeSnip">Object.entries()</span> + <span class="codeSnip">for...of</span> for cleaner syntax:

for (let [key, value] of Object.entries(car)) {
  console.log(key + ": " + value);
}

---

### Summary

✅ Use destructuring for cleaner variable access  
✅ Freeze/seal objects to control modification  
✅ Loop through keys, values, or entries depending on your goal  
✅ Combine patterns to simplify your codebase

---
