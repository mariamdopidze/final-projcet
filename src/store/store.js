import { configureStore } from '@reduxjs/toolkit'
import counter from './app/counter'
export const store = configureStore({
  reducer: {
    counter: counter
  },
})