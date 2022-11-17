import React from 'react'
import '../assets/css/submitbutton.css'

function SubmitButton({handleNext}) {
  return (
    <button className='submit-btn' onClick={() => handleNext()}>Next</button>
  )
}

export default SubmitButton