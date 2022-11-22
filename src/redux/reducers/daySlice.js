import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    changeDay: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDay } = daySlice.actions

export default daySlice.reducer