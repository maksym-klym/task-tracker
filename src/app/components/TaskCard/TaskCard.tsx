export function TaskCard() {
    return (
      <div className="card mb-3 border-0 shadow-sm dark-color-bg-card text-white">
        <div className="card-body">
          <h4 className="card-title">Task title</h4>
          <p className="card-text overflow-auto" style={{ maxHeight: '100px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt eligendi eum.
          </p>
        </div>
      </div>
    );
  }
  
  export default TaskCard;
  