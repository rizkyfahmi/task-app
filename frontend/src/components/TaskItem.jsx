function TaskItem({
  task,
  deleteTask,
  editTask,
  toggleComplete,
}) {
  return (
    <div className="task-card">

      <div className="task-info">

        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleComplete(task)}
        />

        <div>

          <h3
            style={{
              textDecoration: task.isCompleted
                ? "line-through"
                : "none",
            }}
          >
            {task.title}
          </h3>

          <p>{task.description}</p>

        </div>

      </div>

      <div className="actions">

        <button
          className="edit-btn"
          onClick={() => editTask(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Hapus
        </button>

      </div>

    </div>
  );
}

export default TaskItem;