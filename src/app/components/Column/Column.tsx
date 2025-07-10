import { useTasksStore } from "../../store/useTasksStore";
import TaskCard from "../TaskCard/TaskCard";
import TaskModal from "../TaskModal/TaskModal";

type ColumnProps = {
  title: string;
  columnId: number;
};

export function Column({ title, columnId }: ColumnProps) {
  const tasks = useTasksStore((state) => state.tasks);
  return (
    <div className="card text-white h-100 shadow dark-color-bg">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title text-center mb-3">{title}</h2>

        <div className="flex-grow-1 overflow-auto mb-3 scrollbar" style={{ maxHeight: '60vh' }}>
          {tasks.filter(task => task.columnId === columnId).map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <button
          data-bs-toggle="modal"
          data-bs-target={`#taskModal-${columnId}`}
          className="btn btn-primary mt-auto"
        >
          + Add Task
        </button>

        <TaskModal columnId={columnId} modalId={`taskModal-${columnId}`} />
      </div>
    </div>
  );
}

export default Column;
