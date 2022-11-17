import React from 'react'

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Template() {
  return (
    <div>
        <h1>Week 1</h1>
        {days.map((day) => (
            <div className='d-flex flex-direction-row inline-block'>
                <h2 className='template-day-pill'>{day}</h2>
             </div>
        ))} 
    </div>
  )
}

export default Template