import { configureStore } from "@reduxjs/toolkit";
import timerReduser from "../festures/timerSlice"

export const store = configureStore({
  reducer: {
    timer: timerReduser,
  }
})
