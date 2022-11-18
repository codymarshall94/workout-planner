import React, { useState } from "react";
import TemplateForm from "../../components/TemplateForm";
import "./template.css";

function Template() {
  const [workout, setWorkout] = useState([
    {
      exerciseName: "name",
      sets: "sets",
      reps: "reps",
      weight: "weight",
      rest: "rest",
      rir: "RIR",
    },
  ]);
  const [workoutName, setWorkoutName] = useState("Leg Day");
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>{workoutName}</h1>
      {workout.length > 1 ? (
        <div className="container mb-5 mt-5 border">
          <div className="row d-flex align-items-center">
            {workout.map((exercise) => (
              <div
                className="col-12 workout-item-container border-bottom d-flex justify-content-evenly p-3"
                id="workout-item-container"
              >
                <span className="col-2 workout-item">{exercise.exerciseName}</span>
                <span className="col-2 workout-item">{exercise.sets}</span>
                <span className="col-2 workout-item">{exercise.reps}</span>
                <span className="col-2 workout-item">{exercise.weight}</span>
                <span className="col-2 workout-item">{exercise.rest}</span>
                <span className="col-2 workout-item">{exercise.rir}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Add your first exercise</h2>
          <button onClick={() => setShowForm(true)}>Add Exercise</button>
        </div>
      )}
      {showForm && <TemplateForm setWorkout={setWorkout} />}
    </div>
  );
}

export default Template;
