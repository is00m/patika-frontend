import { useState } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const INITIAL_TODOS = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Have a life!', completed: false },
]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [filter, setFilter] = useState('all')

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    ))
  }

  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed)
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })))
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length
  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed)

  return (
    <>
      <section className="todoapp">
        <Header onAdd={addTodo} />
        {todos.length > 0 && (
          <TodoList
            todos={filteredTodos}
            allCompleted={allCompleted}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onToggleAll={toggleAll}
            onEdit={editTodo}
          />
        )}
        {todos.length > 0 && (
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        )}
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  )
}

export default App
