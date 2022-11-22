import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    saveWorkout: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveWorkout } = workoutSlice.actions

export default workoutSlice.reducer