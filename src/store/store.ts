import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit'
import splitBill from './SplitBillSlice'

const rootReducer = combineReducers({
  splitBill,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
