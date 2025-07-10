import type { Task } from "../../types/Task";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="card mb-3 border-0 shadow-sm dark-color-bg-card text-white">
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="card-text overflow-auto" style={{ maxHeight: '100px' }}>
          {task.description}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
