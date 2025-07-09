import TaskCard from "../TaskCard/TaskCard";
import TaskModal from "../TaskModal/TaskModal";

type ColumnProps = {
  title: string;
};

export function Column({ title }: ColumnProps) {
  return (
    <div className="card text-white h-100 shadow dark-color-bg">
      <div className="card-body d-flex flex-column">
        <h2 className="card-title text-center mb-3">{title}</h2>

        <div className="flex-grow-1 overflow-auto mb-3 scrollbar" style={{ maxHeight: '60vh' }}>
          <TaskCard />
        </div>

        <button
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
          className="btn btn-primary mt-auto"
        >
          + Add Task
        </button>

        <TaskModal />
      </div>
    </div>
  );
}

export default Column;
