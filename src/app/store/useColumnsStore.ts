import { create } from "zustand";
import type { Column } from "../types/Column"

type State = {
  columns: Column[];
  addColumn: (column: Column) => void;
  editColumnTitle: (editedColumn: Column) => void;
  removeColumn: (id: string) => void;
}

export const useColumnsStore = create<State>((set) => ({
  columns: JSON.parse(localStorage.getItem('columns') ?? '[]'),
  addColumn: (column) => {
    set((state) => ({
      columns: [...state.columns, column],
    }));
  },
  editColumnTitle: (editedColumn) => {
    set((state) => ({
      columns: state.columns.map((column) =>
        column.id === editedColumn.id ? { ...column, ...editedColumn } : column
      ),
    }));
  },
  removeColumn: (id) => {
    set((state) => ({
      columns: state.columns.filter((column) => column.id !== id),
    }));
  }
}));

let prevColumns = JSON.parse(localStorage.getItem('columns') ?? '[]');

useColumnsStore.subscribe((state) => {
  if (state.columns !== prevColumns) {
    localStorage.setItem('columns', JSON.stringify(state.columns));
    prevColumns = state.columns;
  }
})