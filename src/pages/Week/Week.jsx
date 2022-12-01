import React, { useEffect, useState } from "react";
import "./week.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { changeDay } from "../../redux/reducers/daySlice";

function Week() {
  const [week, setWeek] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    function getDaysInWeek() {
      let days = [];
      const today = new Date();
      const day = today.getDay();
      const date = today.getDate();
      for (let i = 0; i < 7; i++) {
        const dayToAdd = new Date(today);
        dayToAdd.setDate(date - day + i);
        days.push(dayToAdd.toDateString());
      }
      setWeek(days);
    }
    getDaysInWeek();
  }, []);

  const handleDayClick = (day) => {
    dispatch(changeDay(day));
    navigate("/workout");
  };

  const changePreviousWeek = () => {
    const prevWeek = week.map((day) => {
      const newDay = new Date(day);
      newDay.setDate(newDay.getDate() - 7);
      return newDay.toDateString();
    });
    setWeek(prevWeek);
  };

  const changeNextWeek = () => {
    const nextWeek = week.map((day) => {
      const newDay = new Date(day);
      newDay.setDate(newDay.getDate() + 7);
      return newDay.toDateString();
    });
    setWeek(nextWeek);
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
          {week.map((day) => (
            <div
              onClick={() => handleDayClick(day)}
              key={day}
              className="col col-med-4 template-day-card"
            >
              <h5 className="template-day-pill">{day.substr(0, 3)}</h5>
              <span className="template-day-card-text">{day.substr(3)}</span>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() => changePreviousWeek()}
        >
          Previous
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => changeNextWeek()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Week;
