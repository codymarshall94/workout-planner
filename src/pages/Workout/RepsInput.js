import React from "react";

function RepsInput({ sets }) {
  return (
    <div className="row p-4">
      <div className="col">{sets} sets</div>
      <div className="col">
        <input type="number" className="form-control" placeholder="Reps" min="0" max="20" />
      </div>
      <div className="col">
        <input type="number" className="form-control" placeholder="Weight" min="0" max="1000" />
      </div>
    </div>
  );
}

export default RepsInput;