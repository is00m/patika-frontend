import TodoItem from './TodoItem'

function TodoList({ todos, allCompleted, onToggle, onDelete, onToggleAll, onEdit }) {
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        id="toggle-all"
        checked={allCompleted}
        onChange={onToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
