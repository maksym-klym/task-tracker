import { useTasksStore } from "../../store/useTasksStore";
import TaskCard from "../TaskCard/TaskCard";
import CreatedTaskModal from "../CreateTaskModal/CreateTaskModal";

type ColumnProps = {
  title: string;
  columnId: number;
};

export function Column({ title, columnId }: ColumnProps) {
  const tasks = useTasksStore((state) => state.tasks);
  
  return (
    <div className="card text-white shadow dark-color-bg">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title text-center mb-3">{title}</h2>

        <div className="flex-grow-1 mb-3 task-list overflow-auto ms-2">
          {tasks.filter(task => task.columnId === columnId).map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <button
          data-bs-toggle="modal"
          data-bs-target={`#taskModal-${columnId}`}
          className="btn btn-primary mx-2"
        >
          + Add Task
        </button>

        <CreatedTaskModal columnId={columnId} modalId={`taskModal-${columnId}`} />
      </div>
    </div>
  );
}

export default Column;