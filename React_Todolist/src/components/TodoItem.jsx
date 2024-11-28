import "../styles/TodoItem.css";
const TodoItem = ({ task, handleDelete, handleToggle }) => {
  return (
    <div
      className="todoItem-container"
      style={{ backgroundColor: task.completed ? "green" : "red" }}
    >
      <div className="text">{task.text}</div>
      <div className="button-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggle(task.id)}
        />
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
