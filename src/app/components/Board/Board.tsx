import Column from "../Column/Column";

export function Board() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-md-4">
          <Column title="To Do" columnId={1}/>
        </div>
        <div className="col-md-4">
          <Column title="In Progress" columnId={2}/>
        </div>
        <div className="col-md-4">
          <Column title="Done" columnId={3}/>
        </div>
      </div>
    </div>
  );
}

export default Board;
