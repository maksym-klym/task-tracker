import type { Task } from "../../types/Task";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { red, amber } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTasksStore } from "../../store/useTasksStore";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import { useDraggable } from '@dnd-kit/core';

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task, isOverlay = false }: TaskCardProps & { isOverlay?: boolean }) {
  const { removeTask } = useTasksStore();

  const handleDeleteTask = () => {
    removeTask(task.id);
  };

  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: task.id,
  });

  const dragProps = isOverlay ? {} : { ref: setNodeRef, ...listeners, ...attributes };

  return (
    <>
      <div className="card mb-3 border-0 shadow-sm color-bg-card" {...dragProps} style={{ opacity: isDragging && !isOverlay ? 0 : 1 }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h4 className="card-title">{task.title}</h4>
            <div>
              <div className="dropdown">
                <button
                  className="btn p-0 border-0 bg-transparent dropdown-menu-btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertIcon />
                </button>
                <ul className="dropdown-menu dropdown-menu-color">
                  <li>
                    <button
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target={`#editTaskModal-${task.id}`}
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Edit Task
                      <EditIcon sx={{ color: amber[500] }} />
                    </button>
                  </li>
                  <li><hr /></li>
                  <li>
                    <button
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        handleDeleteTask();
                        e.stopPropagation();
                      }}
                    >
                      Delete Task
                      <DeleteForeverIcon sx={{ color: red[500] }} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <p className="card-text overflow-auto card-description">
            {task.description}
          </p>
        </div>
      </div>
      <EditTaskModal task={task} modalId={`editTaskModal-${task.id}`} />
    </>
  );
}

export default TaskCard;
