import React, { useState } from "react";
import axios from "axios";
import TemplateForm from "../../components/TemplateForm";
import { useSelector } from "react-redux";
import "./template.css";

function Template() {
  const [workout, setWorkout] = useState([]);
  const [workoutName, setWorkoutName] = useState("Leg Day");
  const [showForm, setShowForm] = useState(false);
  const day = useSelector((state) => state.day.value);

  const removeExercise = (index) => {
    const newWorkout = [...workout];
    newWorkout.splice(index, 1);
    setWorkout(newWorkout);
  };

  const handleSaveWorkout = (workout) => {
    const workoutToSave = {
      dayOfWeek: day,
      exercises: workout,
    };

    axios
      .post("http://localhost:4000/workout", workoutToSave)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="w-100">
      <h1>{workoutName}</h1>
      {workout.length >= 1 || showForm ? (
        <div className="container mb-5 mt-5 border">
          <div className="row table-header">
            <div className="col-2">
              <h5>Exercise</h5>
            </div>
            <div className="col-2">
              <h5>Sets</h5>
            </div>
            <div className="col-2">
              <h5>Reps</h5>
            </div>
            <div className="col-2">
              <h5>Weight</h5>
            </div>
            <div className="col-2">
              <h5>Rest</h5>
            </div>
            <div className="col-1">
              <h5>RIR</h5>
            </div>
            <div className="col-1">
              <h5>Edit</h5>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            {workout.map((exercise, index) => (
              <div
                key={exercise.exerciseName}
                className="col-12 workout-item-container border-bottom d-flex justify-content-evenly p-3"
                id="workout-item-container"
              >
                <span className="col-2 workout-item">
                  {exercise.exerciseName}
                </span>
                <span className="col-2 workout-item">{exercise.sets}</span>
                <span className="col-2 workout-item">{exercise.reps}</span>
                <span className="col-2 workout-item">{exercise.weight} lb</span>
                <span className="col-2 workout-item">{exercise.rest}</span>
                <span className="col-1 workout-item">{exercise.rir}</span>
                <div className="col-1">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeExercise(exercise, index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Add your first exercise</h2>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Add Exercise
          </button>
        </div>
      )}
      {showForm && <TemplateForm setWorkout={setWorkout} />}
      {showForm && (
        <button
          className="btn btn-success mt-5"
          onClick={() => handleSaveWorkout(workout)}
        >
          Save Workout
        </button>
      )}
    </div>
  );
}

export default Template;
