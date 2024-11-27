import "./TodoItem.css";
const TodoItem = ({ task, handleDelete, handleToggle }) => {
  return (
    <div className="item-container">
      {task.id}
      {task.content}
      <div className="close" onClick={handleDelete}>
        close
      </div>
      <div style={{ backgroundColor: task.completed ? "green" : "red" }}>
        <input
          type="checkbox"
          name=""
          id="toggle"
          onChange={() => handleToggle(task.id)}
          checked={task.completed}
        />
      </div>
    </div>
  );
};

export default TodoItem;
