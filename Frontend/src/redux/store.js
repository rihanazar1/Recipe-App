import { configureStore } from '@reduxjs/toolkit'
import useReducer  from "./features/user/user.feature.js"

export const store = configureStore({
  reducer: {
    user : useReducer,
  },
})