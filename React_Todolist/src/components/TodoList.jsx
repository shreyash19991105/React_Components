import { useState } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";
const TodoList = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text, completed: false };
    setText("");
    setTasks([...tasks, newTask]);
  };

  const handleToggle = (id) => {
    console.log(tasks);
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };
  return (
    <div className="todolist-container">
      <form className="input-container" onSubmit={handleSubmit}>
        <input value={text} onChange={handleInputChange} />
        <button type="submit">Create Task</button>
      </form>
      {tasks.map((task) => {
        return (
          <TodoItem
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
