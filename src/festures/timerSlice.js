import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
  nameTraining: '',
  prepareMinutes: '00',
  prepareSeconds: '00',
  workMinutes: '00',
  workSeconds: '00',
  restMinutes: '00',
  restSeconds: '00',
  cycles: '0',
  training: '0',
  },
]

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.push(action.payload);
    },
  }
})  

export const { addTimer } = timerSlice.actions;
export default timerSlice.reducer;