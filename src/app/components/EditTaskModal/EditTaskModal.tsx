import { useEffect, useState } from "react";
import { useTasksStore } from "../../store/useTasksStore";
import type { Task } from "../../types/Task";

type EditTaskModalProps = {
  task: Task;
  modalId: string;
};

export default function EditTaskModal({ task, modalId }: EditTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { editTask, removeTask } = useTasksStore();

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  const handleDeleteTask = () => {
    removeTask(task.id);
  };

  const handleEditTask = () => {
    if (!title.trim() || !description.trim()) {
      return;
    }

    const editedTask: Task = {
      id: task.id,
      title: title,
      description: description,
      columnId: task.columnId,
    };

    editTask(editedTask);
  };

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      aria-labelledby="taskModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content dark-color-bg text-white">
          <div className="modal-header">
            <h5 className="modal-title" id="taskModalLabel">Edit Task</h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="taskTitle" className="form-label">Task Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="taskTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter task title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">Task Description</label>
                <textarea
                  className="form-control"
                  id="taskDescription"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter task description"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" onClick={handleEditTask} data-bs-dismiss="modal" disabled={!title.trim() || !description.trim()}>Edit Task</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteTask} data-bs-dismiss="modal">Remove task</button>
          </div>
        </div>
      </div>
    </div>
  );
}
