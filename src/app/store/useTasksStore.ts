import { create } from "zustand";
import type { Task } from "../types/Task";

type State = {
  tasks: Task[],
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTaskColumn: (activeTaskId: string, columnId: number) => void;
};

export const useTasksStore = create<State>((set) => ({
  tasks: JSON.parse(localStorage.getItem('tasks') ?? '[]'),
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  editTask: (editedTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      ),
    }));
  },
  removeTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  updateTaskColumn: (activeTaskId, columnId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === activeTaskId ? { ...task, columnId } : task
      ),
    }))
  }
}));

let prevTasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

useTasksStore.subscribe((state) => {
  if (state.tasks !== prevTasks) {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    prevTasks = state.tasks;
  }
});