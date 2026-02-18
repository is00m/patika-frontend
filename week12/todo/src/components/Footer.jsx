function Footer({ activeCount, completedCount, filter, onFilterChange, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>{' '}
        {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === 'all' ? 'selected' : ''}
            onClick={(e) => { e.preventDefault(); onFilterChange('all') }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'active' ? 'selected' : ''}
            onClick={(e) => { e.preventDefault(); onFilterChange('active') }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={filter === 'completed' ? 'selected' : ''}
            onClick={(e) => { e.preventDefault(); onFilterChange('completed') }}
          >
            Completed
          </a>
        </li>
      </ul>

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default Footer
