import Filters from "./Filters";

const Footer = ({ todos, clearCompleted, filter, setFilter }) => {
  // Count how many todos are not yet done
  const todoLeft = todos.filter((todo) => !todo.done).length;

  // Count how many todos are completed
  const todoDone = todos.filter((todo) => todo.done).length;

  return (
    <footer className="footer">
      {/* Display how many items are left */}
      <span className="todo-count">
        {todoLeft} {todoLeft === 1 ? "item" : "items"} left
      </span>

      {/* Render filter buttons (All, Active, Completed) */}
      <Filters current={filter} setFilter={setFilter} />

      {/* Show "Clear completed" button only if there are completed items */}
      {todoDone > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
