# 🌐 Simple Blog Website  
A basic blog website project built using **HTML** and **CSS**.  
This assignment demonstrates page structure, navigation, article layout, and card-style blog previews.

---

## 📁 Project Structure
    project-folder/
    │
    ├── index.html # Home page
    ├── post.html # Blog post detail page
    └── styles.css # Styling file

---

## 🖥️ Pages

### ⭐ Home Page (`index.html`)
- Displays a large site title at the top  
- Includes a navigation menu linking to both pages  
- Shows at least two blog post summaries (`<article>`)  
- Each summary includes:
  - Image  
  - Title  
  - Short description  
  - Link to the full post  
- Contains a footer with copyright information  

### 📝 Blog Post Page (`post.html`)
- Shows the blog post title  
- Includes the same navigation structure as the home page  
- Displays full article content (`<article>`, `<p>`)  
- Footer with copyright details  

---

## 🎨 Styling

All styles are defined in **styles.css** and follow the requirements:

### 🎨 Color Palette
| Element        | Color     |
|----------------|-----------|
| Background     | `#f4f4f4` |
| Header/Footer  | `#333`    |
| Headings       | `#333`    |
| Paragraphs     | `#666`    |

### 🖋️ Typography
- Font family: **Arial, sans-serif**

### 🧱 Layout & Components
- Blog posts are displayed inside **card-style** `<article>` elements  
- Each card includes:
  - White background  
  - Rounded corners (`border-radius`)  
  - Shadow effect (`box-shadow`)  
- Navigation links do **not** change color after visiting  

### 📌 Footer
- Always displayed at the bottom of the page  
- Styled with a dark background matching the header  
