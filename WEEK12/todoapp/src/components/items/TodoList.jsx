import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem
        key={index} // Unique key for each list item (index-based here; could be improved with a UUID)
        todo={todo} // The current todo item object
        toggle={() => toggleTodo(index)} // Function to toggle 'done' state
        deleteItem={() => deleteTodo(index)} // Function to delete this todo
      />
    ))}
  </ul>
);

export default TodoList;
