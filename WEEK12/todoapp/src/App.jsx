import { useEffect, useState } from "react";

// Fakers
import todoDataList from "./fakers/todoDataList";

// Components
import Footer from "./components/items/Footer";
import TodoList from "./components/items/TodoList";
import Header from "./components/global/header/Header";

const App = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState(todoDataList); // Initial list comes from props or local JSON

  // State to manage the current filter: "all", "active", or "completed"
  const [filter, setFilter] = useState("all");

  // Side effect to persist todos in localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adds a new todo item to the list
  const addTodo = (text) => {
    if (text.trim()) {
      // Only add non-empty trimmed text
      setTodos([...todos, { text, done: false }]); // New todo defaults to not done
    }
  };

  // Toggles the 'done' state of a todo at a specific index
  const toggleTodo = (index) => {
    const updated = [...todos]; // Make a shallow copy
    updated[index].done = !updated[index].done; // Flip the done state
    setTodos(updated); // Update state
  };

  // Deletes a todo at the given index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove item by index
  };

  // Toggles all todos to the same 'done' state (used for "Mark all as complete")
  const toggleAll = (done) => {
    setTodos(todos.map((todo) => ({ ...todo, done }))); // Set 'done' for each todo
  };

  // Clears all completed todos from the list
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done)); // Keep only unfinished todos
  };

  // Filters the list based on the selected filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done; // Show only unfinished
    if (filter === "completed") return todo.done; // Show only completed
    return true; // Show all
  });

  return (
    <div>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        {todos.length > 0 && (
          <section className="main">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={todos.every((t) => t.done)}
              onChange={(e) => toggleAll(e.target.checked)}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <TodoList
              todos={filteredTodos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </section>
        )}
        {todos.length > 0 && (
          <Footer
            todos={todos}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
            filter={filter}
          />
        )}
      </section>
    </div>
  );
};

export default App;
