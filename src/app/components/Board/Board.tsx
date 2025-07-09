import Column from "../Column/Column";

export function Board() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-4">
          <Column title="To Do" />
        </div>
        <div className="col-md-4">
          <Column title="In Progress" />
        </div>
        <div className="col-md-4">
          <Column title="Done" />
        </div>
      </div>
    </div>
  );
}

export default Board;
