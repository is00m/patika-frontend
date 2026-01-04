const STORAGE_KEY = "patika-week6-todos";

const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const emptyState = document.querySelector("#emptyState");
const emptyStateText = document.querySelector("#emptyStateText");
const countTotal = document.querySelector("#countTotal");
const countRemaining = document.querySelector("#countRemaining");
const countDone = document.querySelector("#countDone");
const clearCompleted = document.querySelector("#clearCompleted");
const todayChip = document.querySelector("#todayChip");
const filterButtons = document.querySelectorAll("[data-filter]");
const progressFill = document.querySelector("#progressFill");
const progressValue = document.querySelector("#progressValue");
const toastSuccess = document.querySelector("#toastSuccess");
const toastError = document.querySelector("#toastError");
const toastSuccessBody = toastSuccess?.querySelector(".toast-body");
const toastErrorBody = toastError?.querySelector(".toast-body");

let todos = [];
let currentFilter = "all";
let toastSuccessInstance = null;
let toastErrorInstance = null;

const makeId = () =>
  `todo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

const formatToday = () => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return formatter.format(new Date());
};

const setTodayChip = () => {
  if (!todayChip) return;
  todayChip.textContent = formatToday();
};

const loadTodos = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    todos = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    todos = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    todos = [];
  }
};

const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const setupToasts = () => {
  if (typeof bootstrap === "undefined") return;
  if (toastSuccess) {
    toastSuccessInstance = bootstrap.Toast.getOrCreateInstance(toastSuccess, {
      delay: 2200,
    });
  }
  if (toastError) {
    toastErrorInstance = bootstrap.Toast.getOrCreateInstance(toastError, {
      delay: 2200,
    });
  }
};

const showToast = (type, message) => {
  if (type === "success" && toastSuccessInstance) {
    if (toastSuccessBody && message) toastSuccessBody.textContent = message;
    toastSuccessInstance.show();
    return;
  }
  if (type === "error" && toastErrorInstance) {
    if (toastErrorBody && message) toastErrorBody.textContent = message;
    toastErrorInstance.show();
  }
};

const updateProgress = (total, done) => {
  if (!progressFill || !progressValue) return;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  progressFill.style.width = `${percent}%`;
  progressValue.textContent = `${percent}%`;
};

const updateStats = () => {
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed).length;
  const remaining = total - done;

  countTotal.textContent = total;
  countRemaining.textContent = remaining;
  countDone.textContent = done;

  clearCompleted.disabled = done === 0;
  updateProgress(total, done);
};

const getFilteredTodos = () => {
  if (currentFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }
  if (currentFilter === "done") {
    return todos.filter((todo) => todo.completed);
  }
  return todos;
};

const updateEmptyState = (total, visible) => {
  if (!emptyStateText) return;
  if (total === 0) {
    emptyStateText.textContent = "No tasks yet. Add your first focus item.";
    return;
  }
  if (visible > 0) return;
  if (currentFilter === "active") {
    emptyStateText.textContent = "All tasks are done. Switch to Done to review.";
    return;
  }
  if (currentFilter === "done") {
    emptyStateText.textContent = "No completed tasks yet. Finish one to see it.";
    return;
  }
  emptyStateText.textContent = "No tasks in this view.";
};

const updateFilterButtons = () => {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === currentFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
};

const renderTodos = () => {
  list.replaceChildren();

  const filteredTodos = getFilteredTodos();

  if (filteredTodos.length === 0) {
    emptyState.classList.remove("is-hidden");
  } else {
    emptyState.classList.add("is-hidden");
  }

  updateEmptyState(todos.length, filteredTodos.length);

  filteredTodos.forEach((todo, index) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " is-done" : ""}`;
    item.dataset.id = todo.id;
    item.style.setProperty("--delay", `${index * 40}ms`);

    const label = document.createElement("label");
    label.className = "todo-main";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", "Mark task done");

    const check = document.createElement("span");
    check.className = "todo-check";

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "todo-delete";
    remove.textContent = "Delete";
    remove.setAttribute("aria-label", "Delete task");

    label.append(checkbox, check, text);
    item.append(label, remove);
    list.append(item);
  });
};

const addTodo = (text) => {
  todos.unshift({
    id: makeId(),
    text,
    completed: false,
    createdAt: Date.now(),
  });
  saveTodos();
  renderTodos();
  updateStats();
  showToast("success", "Task added.");
};

const toggleTodo = (id, completed) => {
  const todo = todos.find((item) => item.id === id);
  if (!todo) return;
  todo.completed = completed;
  saveTodos();
  renderTodos();
  updateStats();
};

const deleteTodo = (id) => {
  todos = todos.filter((item) => item.id !== id);
  saveTodos();
  renderTodos();
  updateStats();
};

const clearDoneTodos = () => {
  todos = todos.filter((item) => !item.completed);
  saveTodos();
  renderTodos();
  updateStats();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) {
    input.classList.add("is-error");
    setTimeout(() => input.classList.remove("is-error"), 450);
    input.focus();
    showToast("error", "Please enter a task.");
    return;
  }
  addTodo(value);
  form.reset();
  input.focus();
});

list.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  const item = event.target.closest(".todo-item");
  if (!item) return;
  toggleTodo(item.dataset.id, event.target.checked);
});

list.addEventListener("click", (event) => {
  if (!event.target.matches(".todo-delete")) return;
  const item = event.target.closest(".todo-item");
  if (!item) return;
  deleteTodo(item.dataset.id);
});

clearCompleted.addEventListener("click", () => {
  if (clearCompleted.disabled) return;
  clearDoneTodos();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    updateFilterButtons();
    renderTodos();
  });
});

setTodayChip();
loadTodos();
setupToasts();
updateFilterButtons();
renderTodos();
updateStats();
