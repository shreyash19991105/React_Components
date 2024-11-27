import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [newTask, setNewTask] = useState({
    id: 0,
    content: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(() => {
      return { id: tasks.length + 1, content: e.target.value };
    });
    console.log("newtask", newTask);
  };

  const handleSubmit = () => {
    if (newTask.content === "") return;
    setTasks([...tasks, newTask]);
    setNewTask(() => {
      return { ...newTask, content: "" };
    });
    console.log("tasks", tasks);
  };

  const handleDelete = (taskToBeDeleted) => {
    setTasks(() => {
      tasks.filter((task) => task.id != taskToBeDeleted.id);
    });
  };

  const handleToggle = (id) => {
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
  return (
    <div>
      <input value={newTask.content} onChange={handleChange} />
      <button onClick={handleSubmit}>Create new Task</button>
      {tasks?.map((task) => {
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
