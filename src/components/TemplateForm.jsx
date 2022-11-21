import React, { useState } from "react";
import "../assets/css/templateform.css";

function TemplateForm({ setWorkout }) {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [rest, setRest] = useState("");
  const [rir, setRir] = useState("");
  const [formDescription, setFormDescription] = useState("");

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

  //when a form field is focused, the form description changes
  const handleFocus = (e) => {
    switch (e.target.name) {
      case "exerciseName":
        setFormDescription("Enter the name of the exercise");
        break;
      case "sets":
        setFormDescription("Enter the number of sets");
        break;
      case "reps":
        setFormDescription("Enter the number of reps per set");
        break;
      case "weight":
        setFormDescription("Enter the weight");
        break;
      case "rest":
        setFormDescription("Rest between sets in seconds");
        break;
      case "rir":
        setFormDescription("Reps in reserve (RIR) is the number of reps you could have done after the last set"); 
        break;
      default:
        setFormDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-2 border">
      <div className="form-description">{formDescription}</div>
      <div className="row mt-5 w-75 m-auto">
        <div className="col d-flex">
          <input
            type="text"
            value={exerciseName}
            className="form-control"
            name="exerciseName"
            onClick={handleFocus}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="Exercise Name"
            required
          ></input>
          <select
            className="form-control"
            value={sets}
            name="sets"
            onClick={handleFocus}
            onChange={(e) => setSets(e.target.value)}
            required
          >
            <option value="" disabled defaultValue>
              Sets
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="form-control"
            value={reps}
            name="reps"
            onClick={handleFocus}
            onChange={(e) => setReps(e.target.value)}
            required
          >
            <option value="" disabled defaultValue>
              Reps
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="1-3">1-3</option>
            <option value="3-5">3-5</option>
            <option value="5-8">5-8</option>
            <option value="8-12">8-12</option>
            <option value="12-15">12-15</option>
          </select>
          <input
            type="text"
            className="form-control"
            value={weight}
            name="weight"
            onClick={handleFocus}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight(lb)"
            required
          ></input>
          <select
            className="form-control"
            value={rest}
            name="rest"
            onClick={handleFocus}
            onChange={(e) => setRest(e.target.value)}
            required
          >
            <option value="" disabled defaultValue>
              Rest
            </option>
            <option value="10sec">10sec</option>
            <option value="20sec">30sec</option>
            <option value="30sec">60sec</option>
            <option value="40sec">90sec</option>
            <option value="50sec">120sec</option>
            <option value="60sec">180sec</option>
          </select>
          <select
            className="form-control"
            value={rir}
            name="rir"
            onClick={handleFocus}
            onChange={(e) => setRir(e.target.value)}
            required
          >
            <option value="" disabled defaultValue>
              RIR
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add
      </button>
    </form>
  );
}

export default TemplateForm;
