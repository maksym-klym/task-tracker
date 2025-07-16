import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useColumnsStore } from "../../store/useColumnsStore";
import type { Column } from "../../types/Column";

type CreateTaskModalProps = {
  modalId: string;
};

export default function CreateColumnModal({ modalId }: CreateTaskModalProps) {
  const [title, setTitle] = useState("");
  const { addColumn } = useColumnsStore();

  const handleAddColumn = () => {
    if (!title.trim()) {
      return;
    }

    const newColumn: Column = {
      id: uuidv4(),
      title
    }

    addColumn(newColumn);

    setTitle('');
  };

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      aria-labelledby="columnModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content color-bg">
          <div className="modal-header">
            <h5 className="modal-title" id="columnModalLabel">Add New Column</h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="columnTitle" className="form-label">Column Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="columnTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter column title"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleAddColumn} data-bs-dismiss="modal" disabled={!title.trim()}>Create Column</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}