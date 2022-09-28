import { configureStore } from '@reduxjs/toolkit'
import FakeSlice from './FakeSlice'




export default configureStore({
  reducer: {
    fake : FakeSlice
  },
})