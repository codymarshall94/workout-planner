import React from 'react'
import "../assets/css/backbutton.css";

function BackButton({handleBack}) {
  return (
    <button className='back-btn' onClick={() => handleBack()}>Back</button>
  )
}

export default BackButton