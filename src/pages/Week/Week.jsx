import React from "react";
import "./week.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeDay } from "../../redux/reducers/daySlice";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Week() {
  const workoutSaved = useSelector((state) => state.workout.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDayClick = (day) => {
    dispatch(changeDay(day));
    if (workoutSaved.length > 0 || workoutSaved !== undefined) {
      navigate("/workout");
    } else {
      navigate("/template");
    }
  };

  return (
    <div>
      <h1>Workout Plan Schedule</h1>
      <p>
        Here you may view your schedule at a glance. Click on a day to view the
        workout for that day.
      </p>
      <h2 className="bg-dark text-light p-2">Week 1</h2>
      <div className="container">
        <div className="row">
          {days.map((day) => (
            <div
              onClick={() => handleDayClick(day)}
              key={day}
              className="col col-med-4 template-day-card"
            >
              <h5 className="template-day-pill">{day}</h5>
              <p className="template-day-card-text">Training</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Week;
