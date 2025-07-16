import { useTasksStore } from "../../store/useTasksStore";
import TaskCard from "../TaskCard/TaskCard";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { red, amber } from '@mui/material/colors';
import EditColumnModal from "../EditColumnTitleModal/EditColumnTitleModal";
import type { Column } from "../../types/Column";
import { useColumnsStore } from "../../store/useColumnsStore";
import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
  column: Column
};

export function Column({ column }: ColumnProps) {
  const tasks = useTasksStore((state) => state.tasks);
  const { removeTask } = useTasksStore();
  const { removeColumn } = useColumnsStore();

  const handleDeleteColumn = () => {
    tasks.filter(task => task.columnId === column.id).forEach(task => removeTask(task.id));
    removeColumn(column.id);
  }

  const { setNodeRef: setDroppableRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="card shadow color-bg">
      <div className="card-body d-flex flex-column" ref={setDroppableRef}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="card-title text-center mb-3 ms-3">{column.title}</h2>
          <div className="dropdown">
            <button
              className="btn p-0 border-0 bg-transparent dropdown-menu-btn"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MoreVertIcon />
            </button>
            <ul className="dropdown-menu dropdown-menu-color">
              <li>
                <button
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target={`#editColumnModal-${column.id}`}
                >
                  Edit Title
                  <EditIcon sx={{ color: amber[500] }} />
                </button>
              </li>
              <li><hr /></li>
              <li>
                <button
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  onClick={handleDeleteColumn}
                >
                  Delete Column
                  <DeleteForeverIcon sx={{ color: red[500] }} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-grow-1 mb-3 task-list overflow-auto ms-2">
          {tasks.filter(task => task.columnId === column.id).map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <button
          data-bs-toggle="modal"
          data-bs-target={`#taskModal-${column.id}`}
          className="btn btn-primary mx-2"
        >
          + Add Task
        </button>

        <CreateTaskModal columnId={column.id} modalId={`taskModal-${column.id}`} />
        <EditColumnModal column={column} modalId={`editColumnModal-${column.id}`} />
      </div>
    </div>
  );
}

export default Column;