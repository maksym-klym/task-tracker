import { useState } from "react";
import { useTasksStore } from "../../store/useTasksStore";
import { v4 as uuidv4 } from 'uuid';
import type { Task } from "../../types/Task";

type CreateTaskModalProps = {
  columnId: string;
  modalId: string;
};

export default function CreateTaskModal({ columnId, modalId }: CreateTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTasksStore();

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      columnId,
    }

    addTask(newTask);

    setTitle('');
    setDescription('');
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
            <h5 className="modal-title" id="taskModalLabel">Add New Task</h5>
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
            <button type="button" className="btn btn-primary" onClick={handleAddTask} data-bs-dismiss="modal" disabled={!title.trim() || !description.trim()}>Create Task</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}