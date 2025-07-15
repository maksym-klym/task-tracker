import { type DragEndEvent, type DragStartEvent, DndContext, DragOverlay } from "@dnd-kit/core";
import Column from "../Column/Column";
import { useTasksStore } from "../../store/useTasksStore";
import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";

export function Board() {
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
    const newColumnId = over.id as number;

    updateTaskColumn(taskId, newColumnId);

    setActiveTaskId(null);
  }

  const activeTask = tasks.find((task) => task.id === activeTaskId);

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-4">
            <Column title="To Do" columnId={1} />
          </div>
          <div className="col-md-4">
            <Column title="In Progress" columnId={2} />
          </div>
          <div className="col-md-4">
            <Column title="Done" columnId={3} />
          </div>
        </div>
      </div>

      <DragOverlay>
        {activeTask ? <TaskCard task={activeTask} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Board;
