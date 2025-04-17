import { useState } from "react";

const Header = ({ addTodo }) => {
  // Local state to store the current value of the input field
  const [newTodo, setNewTodo] = useState("");

  // Handle form submission when user presses Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <header className="header">
      {/* Application title */}
      <h1>todos</h1>

      {/* Form for new todo input; submits on Enter key press */}
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
