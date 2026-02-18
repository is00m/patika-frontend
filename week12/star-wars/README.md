# Star Wars Starship Database

A React application that lists Star Wars starships using the [SWAPI](https://swapi.dev/) public API. Features a custom dark theme inspired by the Star Wars universe.

## Features

- Browse all starships fetched from the Star Wars API
- Search starships by name or model (debounced — waits 400ms after typing before calling the API)
- Load more starships with a pagination button
- Click any starship to view its full details on a separate page
- Navigate back to the list from the detail page

## Tech Stack

- React
- Vite
- React Router DOM
- Plain CSS
- [SWAPI](https://swapi.dev/) — Star Wars public REST API

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── api/
│   └── swapi.js           # All API calls (list, search, detail, load more)
├── components/
│   ├── SearchBar.jsx      # Controlled search input
│   └── StarshipCard.jsx   # Clickable card shown in the grid
├── pages/
│   ├── HomePage.jsx       # Starship grid with search and load more
│   └── DetailPage.jsx     # Full detail view for a single starship
├── App.jsx                # Router setup (/ and /starship/:id)
└── index.css              # Dark theme styles
```

## Pages

**Home (`/`)** — Displays a grid of starship cards. Each card shows the name, model, max speed, and class. Users can search or load more results.

**Detail (`/starship/:id`)** — Shows full specs for the selected starship: manufacturer, class, crew, passengers, max speed, cargo capacity, hyperdrive rating, and length.
