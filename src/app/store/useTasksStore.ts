import { create } from "zustand";
import type { Task } from "../types/Task";

type State = {
  tasks: Task[],
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  removeTask: (id: string) => void;
};

export const useTasksStore = create<State>((set) => ({
  tasks: [],
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
}));
