import type { Task } from "../../types/Task";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { red, amber } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTasksStore } from "../../store/useTasksStore";
import EditTaskModal from "../EditTaskModal/EditTaskModal";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  const { removeTask } = useTasksStore();

  const handleDeleteTask = () => {
    removeTask(task.id);
  };

  return (
    <>
      <div className="card mb-3 border-0 shadow-sm dark-color-bg-card text-white">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h4 className="card-title">{task.title}</h4>
            <div>
              <div className="dropdown">
                <button
                  className="btn p-0 border-0 bg-transparent text-white"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MoreVertIcon />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <button className="dropdown-item d-flex justify-content-between align-items-center" data-bs-toggle="modal" data-bs-target={`#editTaskModal-${task.id}`}>
                      Edit Task
                      <EditIcon sx={{ color: amber[500] }} />
                    </button>
                  </li>
                  <li><hr /></li>
                  <li>
                    <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={handleDeleteTask}>
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
