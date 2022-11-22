import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Workout() {
  const savedWorkout = useSelector((state) => state.workout.value);
  const navigate = useNavigate();

  return (
    <>
      <button className="btn btn-primary" onClick={() => navigate("/template")}>
        Edit
      </button>
      <div className="container">
        {savedWorkout.exercises.map((exercise) => (
          <div className="row border mb-5">
            <div className="col border-bottom bg-dark text-light p-3">
              <h5>{exercise.exerciseName}</h5>
            </div>
            <div className="row">
              <div className="col">
                <h5>
                  {exercise.sets}x{exercise.reps}
                </h5>
              </div>
              <div className="col">
                <h5>{exercise.weight}lbs</h5>
              </div>
              <div className="col">
                <h5>{exercise.rest}</h5>
              </div>
              <div className="col">
                <h5>{exercise.rir}rir</h5>
              </div>
            </div>
            {/* render rows here based on amount of exercise.sets*/}
          </div>
        ))}
      </div>
    </>
  );
}

export default Workout;
