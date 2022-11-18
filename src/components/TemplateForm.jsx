import React, { useState } from "react";

function TemplateForm({ setWorkout }) {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [rest, setRest] = useState("");
  const [rir, setRir] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      exerciseName,
      sets,
      reps,
      weight,
      rest,
      rir,
    };
    setWorkout((prevWorkout) => [...prevWorkout, newExercise]);
    setExerciseName("");
    setSets("");
    setReps("");
    setWeight("");
    setRest("");
    setRir("");
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <div className="col col-med-6">
          <input
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="Exercise Name"
          ></input>
          <input
            type="text"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="Sets"
          ></input>
          <input
            type="text"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="Reps"
          ></input>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          ></input>
          <select
            value={rest}
            onChange={(e) => setRest(e.target.value)}
            placeholder="Rest"
          >
            <option value="10sec">10sec</option>
            <option value="20sec">30sec</option>
            <option value="30sec">60sec</option>
            <option value="40sec">90sec</option>
            <option value="50sec">120sec</option>
            <option value="60sec">180sec</option>
          </select>
          <select value={rir} onChange={(e) => setRir(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TemplateForm;
