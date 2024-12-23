import { configureStore } from '@reduxjs/toolkit'
import EnrolledCourseReducer from '../slices/EnrolledCoursesSlice'

export const store = configureStore({
  reducer: {
    EnrolledCourses:EnrolledCourseReducer
  },
})