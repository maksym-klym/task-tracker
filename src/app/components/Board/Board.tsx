import Column from "../Column/Column";

export function Board() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Column title="To Do" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  )
}

export default Board;