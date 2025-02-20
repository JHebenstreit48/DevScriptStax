## Bootstrap Utilities

---

### Finding Bootstrap Utilities & Class Names

Bootstrap provides built-in utility classes that control spacing, colors, typography, and more.

#### How to Find Bootstrap Utilities

📌 Go to Bootstrap's Docs → Click on the "Utilities" dropdown.  
🔹 Examples:

- Colors → Lists available text/background colors.
- Spacing → Predefined padding/margin classes.
- Typography → Controls font styles and sizes.

---

## Bootstrap Spacing Utilities

Bootstrap provides predefined classes for padding and margins.

### Spacing Class Structure

{property}{sides}-{size}

- p → Padding
- m → Margin
- x → Left & Right
- y → Top & Bottom
- t → Top
- b → Bottom
- l → Left
- r → Right
- size → A number from 0 to 5 that determines spacing

---

## Bootstrap Spacing Scale

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Size</th>
            <th class="tableCellHeader">Pixels</th>
            <th class="tableCellHeader">rem</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>0</strong></td>
            <td class="tableCell">0px</td>
            <td class="tableCell">0rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>1</strong></td>
            <td class="tableCell">4px</td>
            <td class="tableCell">0.25rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>2</strong></td>
            <td class="tableCell">8px</td>
            <td class="tableCell">0.5rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>3</strong></td>
            <td class="tableCell">16px</td>
            <td class="tableCell">1rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>4</strong></td>
            <td class="tableCell">24px</td>
            <td class="tableCell">1.5rem</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>5</strong></td>
            <td class="tableCell">48px</td>
            <td class="tableCell">3rem</td>
        </tr>
    </tbody>
</table>

---

### Examples of Bootstrap Spacing Classes

#### 1. Padding on All Sides

html

<div class="p-5">This div has 48px (3rem) padding on all sides.</div>

#### 2. Padding on the Y-Axis (Top & Bottom)

html

<div class="py-5">This div has 48px padding on the top and bottom.</div>

#### 3. Padding on the X-Axis (Left & Right)

html

<div class="px-5">This div has 48px padding on the left and right.</div>

#### 4. Margin on All Sides

html

<div class="m-3">This div has 16px margin on all sides.</div>

---

## Summary of Bootstrap Spacing Classes

<table class="notesTable">
    <thead>
        <tr class="tableHeader">
            <th class="tableCellHeader">Class</th>
            <th class="tableCellHeader">Meaning</th>
            <th class="tableCellHeader">Example</th>
        </tr>
    </thead>
    <tbody>
        <tr class="tableRow">
            <td class="tableCell"><strong>p-5</strong></td>
            <td class="tableCell">Padding on all sides (48px)</td>
            <td class="tableCell">&lt;div class="p-5"&gt;...&lt;/div&gt;</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>py-5</strong></td>
            <td class="tableCell">Padding on top & bottom (48px)</td>
            <td class="tableCell">&lt;div class="py-5"&gt;...&lt;/div&gt;</td>
        </tr>
        <tr class="tableRow">
            <td class="tableCell"><strong>px-5</strong></td>
            <td class="tableCell">Padding on left & right (48px)</td>
            <td class="tableCell">&lt;div class="px-5"&gt;...&lt;/div&gt;</td>
        </tr>
    </tbody>
</table>
