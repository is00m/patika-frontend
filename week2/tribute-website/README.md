# Alfred Adler Tribute Website

A single-page tribute website dedicated to **Alfred Adler**, built using clean and semantic **HTML** and **CSS**.  
The page presents Adler’s biography, core psychological ideas, visual introduction, and a curated list of his influential works.

---

## 🧭 Navigation

The header includes links that scroll smoothly to the sections within the page:

- **Home** – Hero section with portrait and quote  
- **Info** – Biography & major psychological ideas  
- **Books** – Selected works list  

Each link uses in-page anchors (`#home`, `#info`, `#books`).

---

## 🏠 Home Section (Hero)

The **Home** section includes:

- A portrait image of Alfred Adler  
- A quote attributed to him  
- A short introductory text describing who he is and why he is influential  

Example quote used:

> “The only normal people are the ones you don't know very well.”

This section serves as the visual and thematic introduction to his philosophy and humanistic psychology.

---

## 📚 Info Section (Biography & Ideas)

This section contains detailed biography cards explaining:

### ✔ Early Life & Career  
Transition from medicine to psychology and separation from Freud.

### ✔ Individual Psychology  
Holistic approach focusing on purpose, belonging, and goal-oriented behavior.

### ✔ Inferiority Complex & Social Interest  
Key concepts Adler introduced and their impact on modern psychology.

### ✔ Legacy  
Adler’s influence on counseling, family therapy, and positive mental health.

All text is written in English and focuses on Adler’s career, contributions, and long-term impact.

---

## 📖 Books Section (Selected Works)

This section lists important works by Alfred Adler.  
Each entry contains:

- **Book Title**  
- **Publication Year**  
- **Short Description**

Example works included:

- *The Neurotic Constitution* (1917)  
- *The Practice and Theory of Individual Psychology* (1920s)  
- *Understanding Human Nature* (1927)  
- *What Life Should Mean to You* (1931)  
- *Superiority and Social Interest* (1964, posthumous)

---

## 🎨 Visual & Design Details

All styles are defined in **styles.css**. The design focuses on readability, structure, and aesthetic consistency.

### Color Palette

- **Dark navy** backgrounds for hero and footer (`#020617`, `#111827`)  
- **Soft white/gray** for content sections (`#f9fafb`, `#ffffff`)  
- **Warm yellow** highlights for important text (`#facc15`, `#fbbf24`)

### Typography

- **Arial, sans-serif** font family
- Clear hierarchy for headings, section titles, and paragraph text  

### Layout Components

- Hero section uses **CSS Grid** (image + text layout)  
- Info and Books use **card-style `<article>` elements** with:
  - Rounded corners (`border-radius`)
  - Shadow effects (`box-shadow`)
  - Responsive spacing  

The result is modern, clean, and appropriate for an academic tribute page.