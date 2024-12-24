## Running Python Files  
---

The following code demonstrates how to run a Python file in the terminal:

```shell
python3 python_file_name.py
python python_file_name.py
```

- <span class="emphasis">NOTE:</span> Depending on your system, <span class="emphasis">python</span> or <span class="emphasis">python3</span> may work.

---

## Basic Python Functions and Keywords  
---

### Defining Functions

The following <span class="emphasis">keyword</span> is used to <span class="emphasis">define</span> a <span class="emphasis">function</span>:

```python
def
```

Example:

```python
def my_function():
    pass
```

---

### Rounding Numbers

The following <span class="emphasis">function</span> is used to <span class="emphasis">round</span> a <span class="emphasis">number</span> to a <span class="emphasis">specified</span> number of <span class="secondEmphasis">decimal places</span>:

```python
round()
```

---

### Printing to Console

The following <span class="emphasis">function</span> is used to <span class="emphasis">print</span> a line of code to the <span class="emphasis">console</span>:

```python
print()
```

- It is the <span class="emphasis">equivalent</span> of <span class="emphasis">console.log()</span> in <span class="emphasis">JavaScript</span>.

---

### String Literals

The following code demonstrates Python's <span class="emphasis">string literal</span> syntax:

```python
f"{}"
```

Example:

```python
name = "Alice"
age = 25
print(f"Hello, my name is {name} and I am {age} years old.")
```

---

### Type Conversions

#### Convert to Float

The following <span class="emphasis">function</span> converts a <span class="emphasis">number</span> or <span class="emphasis">string</span> to a <span class="emphasis">floating-point</span> <span class="secondEmphasis">number</span>:

```python
float()
```

#### Convert to String

The following <span class="emphasis">function</span> converts a value into a string:

```python
str()
```

---

## Operators and Boolean Logic  
---

### Inverting Boolean Logic

The following <span class="emphasis">operator</span> is used to <span class="emphasis">invert</span> the <span class="emphasis">truth</span> value of a <span class="emphasis">Boolean</span> <span class="secondEmphasis">expression</span>:

```python
not
```

- <span class="emphasis">Equivalent</span> to using <span class="emphasis">!</span> in <span class="emphasis">JavaScript</span>.

---

## String Methods  
---

### Convert to Lowercase

The following <span class="emphasis">method</span> <span class="emphasis">lowercases</span> a string:

```python
.lower()
```

---

### Capitalize Each Word

The following <span class="emphasis">method</span> <span class="secondEmphasis">capitalizes</span> the first letter of each word:

```python
.title()
```

---

### Check if All Characters are Digits

The following method checks if all characters in a string are digits:

```python
isdigit()
```

---

## Working with Data Structures  
---

### Lists

Lists store multiple <span class="emphasis">items</span> in a single <span class="emphasis">variable</span> within <span class="emphasis">square brackets</span>:

```python
[1, 2, 3, 4, 5]
["item1", "item2", "item3"]
[1, "item2", 3.14, True]
```

#### Common List Methods

1. **Count**: Returns the number of occurrences of a value.

```python
list.count(value)
```

Example:

```python
fruits = ["apple", "banana", "apple"]
print(fruits.count("apple"))  # Output: 2
```

2. **Extend**: Adds elements from another iterable to the end of the list.

```python
list.extend(iterable)
```

Example:

```python
fruits = ["apple", "banana"]
fruits.extend(["cherry", "date"])
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'date']
```

3. **Index**: Returns the index of the first occurrence of a value.

```python
list.index(value)
```

Example:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits.index("banana"))  # Output: 1
```

4. **Insert**: Inserts an item at a specified position.

```python
list.insert(index, value)
```

Example:

```python
fruits = ["apple", "cherry"]
fruits.insert(1, "banana")
print(fruits)  # Output: ['apple', 'banana', 'cherry']
```

5. **Pop**: Removes and returns the item at a specified position (default is the last item).

```python
list.pop([index])
```

Example:

```python
fruits = ["apple", "banana", "cherry"]
print(fruits.pop())  # Output: 'cherry'
print(fruits)  # Output: ['apple', 'banana']
```

6. **Remove**: Removes the first occurrence of a value.

```python
list.remove(value)
```

Example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)  # Output: ['apple', 'cherry']
```

7. **Reverse**: Reverses the order of the list in place.

```python
list.reverse()
```

Example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.reverse()
print(fruits)  # Output: ['cherry', 'banana', 'apple']
```

8. **Sort**: Sorts the list in ascending order by default.

```python
list.sort()
```

Example:

```python
numbers = [3, 1, 4, 2]
numbers.sort()
print(numbers)  # Output: [1, 2, 3, 4]
```

9. **Append**: Adds a single item to the end of the list.

```python
list.append(value)
```

Example:

```python
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)  # Output: ['apple', 'banana', 'cherry']
```

10. **Clear**: Removes all items from the list.

```python
list.clear()
```

Example:

```python
fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)  # Output: []
```

11. **Copy**: Creates a shallow copy of the list.

```python
new_list = list.copy()
```

Example:

```python
fruits = ["apple", "banana"]
copy_fruits = fruits.copy()
print(copy_fruits)  # Output: ['apple', 'banana']
```

---

### Tuples

Tuples store multiple <span class="emphasis">items</span> in a single <span class="emphasis">variable</span>, but within <span class="emphasis">parenthesis</span>:

```python
("item1", "item2", "item3")
```

---

## Object-Oriented Programming in Python  
---

### Defining Classes

The following syntax is used to define a class:

```python
class myClass:
    pass
```

#### Constructor

The following code defines a constructor for a class:

```python
__init__()
```

#### Using <span class="emphasis">self</span>

The following variable/parameter is equivalent to <span class="emphasis">this</span> in <span class="emphasis">JavaScript</span>:

```python
self
```

Example:

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

my_car = Car("Toyota", "Corolla", 2021)
my_car.display_info()
```

---

## Exception Handling  
---

### Try-Catch Equivalent

The following statement is the Python equivalent of a try-catch block:

```python
with
```

### Raise Exceptions

The following keyword is used to raise an exception:

```python
raise
```

Example:

```python
if x < 0:
    raise Exception("No numbers below zero.")
```
