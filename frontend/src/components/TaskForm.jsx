import { useEffect, useState } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return alert("Semua field wajib diisi!");
    }

    const task = {
      title,
      description,
    };

    if (editingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Deskripsi Task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">
        {editingTask ? "Update Task" : "Tambah Task"}
      </button>
    </form>
  );
}

export default TaskForm;