const TodoItem = ({ todo, toggle, deleteItem }) => (
  // Apply the "completed" CSS class if the todo is marked as done
  <li className={todo.done ? "completed" : ""}>
    <div className="view">
      {/* 
        Checkbox to toggle the completion state of the todo.
        When clicked, it triggers the 'toggle' function passed from the parent.
      */}
      <input
        className="toggle"
        type="checkbox"
        checked={todo.done} // Bind checkbox state to the todo's 'done' property
        onChange={toggle} // Toggle done state on change
      />

      {/* 
        Display the todo text.
        (Could be enhanced to allow editing on double click, if desired.)
      */}
      <label>{todo.text}</label>

      {/* 
        Delete button (the 'X' icon).
        Calls the 'deleteItem' function when clicked.
      */}
      <button className="destroy" onClick={deleteItem}></button>
    </div>
  </li>
);

export default TodoItem;
