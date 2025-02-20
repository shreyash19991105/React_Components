import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      description: taskInput,
      completed: false,
    };
    setTaskInput("");
    setTodos((prevTodos) => [...prevTodos, newTask]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button
        onClick={handleAddTask}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Add
      </button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.description}</div>
      ))}
    </div>
  );
};

export default TodoList;
