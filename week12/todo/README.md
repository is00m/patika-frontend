# Todo App

A todo application built with React and Vite, inspired by the TodoMVC spec. Features a custom dark theme with a black, grey, and orange color palette.

## Features

- Add, delete, and edit todos (double-click to edit)
- Mark individual todos or all todos as complete
- Filter by All / Active / Completed
- Clear all completed todos at once
- Remaining item count displayed in the footer

## Tech Stack

- React
- Vite
- Plain CSS

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx     # Input form for new todos
│   ├── TodoList.jsx   # List container with toggle-all
│   ├── TodoItem.jsx   # Individual todo row with edit support
│   └── Footer.jsx     # Filter tabs and item count
├── App.jsx            # State management
└── index.css          # All styles
```
