import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
};

export const EnrolledCourse = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses = [action.payload, ...state.courses];
        },
        removeCourse: (state, action) => {
            state.courses = state.courses.filter((item) => item?.id !== action.payload);
        },
        default: (state) => {
            return state;
        },
    },
});

export const { addCourse, removeCourse } = EnrolledCourse.actions;

export default EnrolledCourse.reducer;
