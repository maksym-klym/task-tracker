import { useState } from "react";
export default function TaskModal() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div
        className="modal fade"
        id="taskModal"
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
              <button type="button" className="btn btn-primary">Create Task</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  