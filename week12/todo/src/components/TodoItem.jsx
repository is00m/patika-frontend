import { useState, useRef, useEffect } from 'react'

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const handleDoubleClick = () => {
    setEditing(true)
    setEditValue(todo.text)
  }

  const handleEditSubmit = () => {
    const trimmed = editValue.trim()
    if (trimmed) {
      onEdit(todo.id, trimmed)
      setEditing(false)
    } else {
      onDelete(todo.id)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleEditSubmit()
    if (e.key === 'Escape') {
      setEditValue(todo.text)
      setEditing(false)
    }
  }

  return (
    <li className={[todo.completed ? 'completed' : '', editing ? 'editing' : ''].join(' ').trim()}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => onDelete(todo.id)} />
      </div>
      {editing && (
        <input
          ref={inputRef}
          className="edit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={handleKeyDown}
        />
      )}
    </li>
  )
}

export default TodoItem
