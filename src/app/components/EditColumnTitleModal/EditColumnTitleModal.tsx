import { useEffect, useState } from "react";
import { useColumnsStore } from "../../store/useColumnsStore";
import type { Column } from "../../types/Column";

type EditTaskModalProps = {
  column: Column
  modalId: string;
};

export default function EditColumnModal({ column, modalId }: EditTaskModalProps) {
  const [title, setTitle] = useState("");
  const { editColumnTitle } = useColumnsStore();

  useEffect(() => {
    setTitle(column.title);
  }, [column]);

  const handleEditColumnTitle = () => {
    if (!title.trim()) {
      return;
    }

    const editedColumn: Column = {
      id: column.id,
      title: title
    }

    editColumnTitle(editedColumn);

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
            <h5 className="modal-title" id="columnModalLabel">Edit Column Title</h5>
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
                  placeholder="Enter new column title"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleEditColumnTitle} data-bs-dismiss="modal" disabled={!title.trim()}>Edit Column</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}