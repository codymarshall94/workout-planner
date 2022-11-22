import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from './reducers/workoutSlices'
import dayReducer from './reducers/daySlice'

export const store = configureStore({
  reducer: {
    workout: workoutReducer,
    day: dayReducer,
  },
})