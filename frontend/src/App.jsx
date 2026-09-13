import { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const getTasks = async () => {
    try {
      const res = await api.get("/task");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (task) => {
    await api.post("/task", task);
    getTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/task/${id}`);
    getTasks();
  };

  const updateTask = async (task) => {
    await api.patch(`/task/${editingTask.id}`, task);
    setEditingTask(null);
    getTasks();
  };

  const toggleComplete = async (task) => {
    await api.patch(`/task/${task.id}`, {
      isCompleted: !task.isCompleted,
    });

    getTasks();
  };

  return (
    <div className="container">

      <h1>Task App</h1>

      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={setEditingTask}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default App;