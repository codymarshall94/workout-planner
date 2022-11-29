import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import RepsInput from "./RepsInput";

function Workout() {
  const [savedWorkout, setSavedWorkout] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/workout")
      .then((res) => {
        setSavedWorkout(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-100">
      <button className="btn btn-primary" onClick={() => navigate("/template")}>
        Edit
      </button>
      <div className="container">
        {savedWorkout.map((exercise) => (
          <div>
            {exercise.exercises.map((exercise) => (
              <div className="row border mb-5">
                <div className="col border-bottom bg-dark text-light p-3">
                  <h5>{exercise.exerciseName}</h5>
                </div>
                <div className="row p-2">
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
                <RepsInput sets={exercise.sets} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="btn btn-success">Complete</button>
    </div>
  );
}

export default Workout;