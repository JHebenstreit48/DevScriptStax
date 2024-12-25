# HTML Code Examples

## Basic HTML Structure

### DOCTYPE Declaration
The <span><</span>!DOCTYPE<span>></span> declaration defines the document type and version of HTML being used. It must be the first line of an HTML document to ensure proper rendering by the browser.

```html
<!DOCTYPE html>
```

### HTML Element
The <span><</span>html<span>></span> element serves as the root of an HTML document. All other elements must be contained within this tag.

```html
<html>
  ...
</html>
```

### HTML Head
The <span><</span>head<span>></span> element contains metadata and links to external resources, such as CSS stylesheets or JavaScript files. It is not displayed on the webpage but is essential for proper page rendering.

```html
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
```

#### Meta Tag
The <span><</span>meta<span>></span> tag is used to include metadata, such as character encoding, viewport settings, and descriptions.

```html
<meta charset="UTF-8">
```

#### Title Tag
The <span><</span>title<span>></span> tag specifies the title of the document, displayed in the browser tab.

```html
<title>Page Title</title>
```

#### Link Tag
The <span><</span>link<span>></span> tag is used to link external resources like stylesheets.

```html
<link rel="stylesheet" href="styles.css">
```

#### Script Tag
The <span><</span>script<span>></span> tag is used to include JavaScript files or inline scripts.

```html
<script src="script.js"></script>
```

---

### HTML Body
The <span><</span>body<span>></span> element contains the visible content of the webpage, such as text, images, and interactive elements.

```html
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>
```

---

## Common HTML Elements (Within Body)

### List of Common Elements

Here is a list of commonly used HTML elements:

```html
<p>
<textarea>
<h1>
<h2>
<h3>
<h4>
<h5>
<h6>
<input>
<label>
<header>
<img>
<ul>
<ol>
<li>
<a>
<hr>
```

### Purpose of Each Tag

- <span><</span>p<span>></span>: Defines a paragraph.
- <span><</span>textarea<span>></span>: Allows users to input multi-line text.
- <span><</span>h1<span>></span> to <span><</span>h6<span>></span>: Defines headings of various levels.
- <span><</span>input<span>></span>: Creates various types of user inputs.
- <span><</span>label<span>></span>: Labels an input field.
- <span><</span>header<span>></span>: Represents introductory content or navigational links.
- <span><</span>img<span>></span>: Displays an image.
- <span><</span>ul<span>></span>: Creates an unordered list.
- <span><</span>ol<span>></span>: Creates an ordered list.
- <span><</span>li<span>></span>: Represents an item in a list.
- <span><</span>a<span>></span>: Creates a hyperlink.
- <span><</span>hr<span>></span>: Defines a thematic break or horizontal line.
---

## Links

### Anchor Tag
The <span><</span>a<span>></span> element creates hyperlinks to other pages or resources. Use the href attribute to specify the link's destination.

```html
<a href="https://example.com">Visit Example</a>
```

---

## Lists

### Unordered List
The <span><</span>ul<span>></span> element creates an unordered list, where each item is marked with a bullet.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Ordered List
The <span><</span>ol<span>></span> element creates an ordered list, where each item is numbered.

```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
```

### Description List
The <span><</span>dl<span>></span> element creates a description list, which pairs terms and their descriptions.

```html
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>
```

---

## Images

### Image Tag
The <span><</span>img<span>></span> tag embeds an image in the webpage. Use the `src` attribute to specify the image file and the `alt` attribute to provide alternative text for accessibility.

```html
<img src="image.jpg" alt="Description of image">
```

---

## Tables

### Table Tag
The <span><</span>table<span>></span> element creates a table for displaying tabular data.

```html
<table>
  ...
</table>
```

### Table Header
The <span><</span>thead<span>></span> element groups the header content in a table, typically containing '<th>` elements.

```html
<thead>
  <tr>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
</thead>
```

### Table Body
The <span><</span>tbody<span>></span> element contains the main content of a table, typically <span><</span>td<span>></span> elements within <span><</span>tr<span>></span> rows.

```html
<tbody>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</tbody>
```

### Table Footer
The <span><</span>tfoot<span>></span> element contains footer content for a table.

```html
<tfoot>
  <tr>
    <td colspan="2">Footer</td>
  </tr>
</tfoot>
```

---

## Forms

### Form Tag
The <span><</span>form<span>></span> element creates a form for collecting user input. The `action` attribute specifies where to send the form data.

```html
<form>
  ...
</form>
```

### Label Tag
The <span><</span>label<span>></span> element provides a description for form inputs, improving accessibility.

```html
<label for="name">Name:</label>
```

### Input Tag
The <span><</span>input<span>></span> element creates various types of form fields, such as text fields, email inputs, and checkboxes.

```html
<input type="text" id="name" name="name">
```

### Textarea Tag
The <span><</span>textarea<span>></span> element allows users to input multi-line text.

```html
<textarea rows="4" cols="50">Enter your text here...</textarea>
```

### Button Tag
The <span><</span>button<span>></span> element creates a clickable button, often used to submit forms.

```html
<button type="submit">Submit</button>
```

---

## Semantic Elements

### Header Tag
The <span><</span>header<span>></span> element represents the introductory content or a group of navigational links.

```html
<header>
  <h1>Page Header</h1>
</header>
```

### Article Tag
The <span><</span>article<span>></span> element represents a self-contained piece of content that could stand alone or be reused.

```html
<article>
  <h2>Article Title</h2>
  <p>Article content goes here.</p>
</article>
```

### Footer Tag
The <span><</span>footer<span>></span> element represents the footer of a document or section, often containing copyright or contact information.

```html
<footer>
  <p>Footer content here.</p>
</footer>
```

---

## Text Formatting

### Italic Tag
The <span><</span>i<span>></span> element represents text that is styled differently for emphasis, such as foreign words or technical terms.

```html
<i>Italicized text</i>
```
---

## Special Characters

### Special Character Codes

To display special characters in HTML, use the following codes:

```html
&rsquo;
&lsquo;
&rdquo;
&ldquo;
&amp;
&gt;
&lt;
&copy;
&reg;
&trade;
```
### Output:

- &rsquo; : Right Single Quote  
- &lsquo; : Left Single Quote  
- &rdquo; : Right Double Quote  
- &ldquo; : Left Double Quote  
- &amp;: Ampersand  
- &gt; : Greater Than  
- &lt; : Less Than  
- &copy; : Copyright Symbol  
- &reg; : Registered Symbol  
- &trade; : Trademark Symbol
