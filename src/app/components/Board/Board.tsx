import { type DragEndEvent, type DragStartEvent, DndContext, DragOverlay } from "@dnd-kit/core";
import { Column } from "../Column/Column";
import { useTasksStore } from "../../store/useTasksStore";
import { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { useColumnsStore } from "../../store/useColumnsStore";
import CreateColumnModal from "../CreateColumnModal/CreateColumnModal";

export function Board() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const columns = useColumnsStore((state) => state.columns);

  const tasks = useTasksStore((state) => state.tasks);
  const updateTaskColumn = useTasksStore((state) => state.updateTaskColumn);

  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTaskId(event.active.id as string);
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newColumnId = over.id as string;

    updateTaskColumn(taskId, newColumnId);

    setActiveTaskId(null);
  }

  const activeTask = tasks.find((task) => task.id === activeTaskId);

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <button
        className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} position-absolute top-0 start-0 mt-5 ms-3`}
        onClick={() => setIsDarkMode(previousTheme => !previousTheme)}
      >
        <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </button>
      <div className="container-fluid my-4 ms-5">
        <div className="d-flex flex-nowrap gap-4">
          {columns.map(column => (
            <div key={column.id} className="column-item">
              <Column column={column} />
            </div>
          ))}
          <div className="pe-4">
            <button
              data-bs-toggle="modal"
              data-bs-target="#columnModal"
              className="btn btn-primary btn-add-column"
            >
              + Add Column
            </button>
          </div>
        </div>
      </div>

      <CreateColumnModal modalId="columnModal" />

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Board;
