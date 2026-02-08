import { useMemo, useState } from 'react'
import './App.css'

const COLORS = [
  { id: 'pink', hex: '#f472b6' },
  { id: 'purple', hex: '#c084fc' },
  { id: 'yellow', hex: '#fde047' },
  { id: 'blue', hex: '#7dd3fc' },
  { id: 'green', hex: '#86efac' },
]

function App() {
  const [notes, setNotes] = useState([])
  const [text, setText] = useState('')
  const [selectedColor, setSelectedColor] = useState(COLORS[0].hex)
  const [query, setQuery] = useState('')

  const filteredNotes = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return notes
    return notes.filter((note) => note.text.toLowerCase().includes(needle))
  }, [notes, query])

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    setNotes((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text: trimmed,
        color: selectedColor,
      },
      ...prev,
    ])
    setText('')
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>NotesApp</h1>
          <div className="search">
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search notes"
            />
          </div>
        </header>

        <section className="composer">
          <textarea
            rows="5"
            placeholder="Enter your note here..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="composer-actions">
            <div className="color-picker" role="radiogroup" aria-label="Pick color">
              {COLORS.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  className={`color-dot ${
                    selectedColor === color.hex ? 'is-active' : ''
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-pressed={selectedColor === color.hex}
                  onClick={() => setSelectedColor(color.hex)}
                >
                  <span className="sr-only">{color.id}</span>
                </button>
              ))}
            </div>
            <button className="add-btn" onClick={handleAdd}>
              ADD
            </button>
          </div>
        </section>

        <section className="notes-grid">
          {filteredNotes.length === 0 ? (
            <p className="empty-state">No notes found.</p>
          ) : (
            filteredNotes.map((note) => (
              <article
                key={note.id}
                className="note-card"
                style={{ backgroundColor: note.color }}
              >
                {note.text}
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  )
}

export default App
