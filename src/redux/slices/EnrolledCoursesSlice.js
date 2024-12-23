import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: []
}

export const EnrolledCourse = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action) => {
            console.log(action)
            let tempState = { ...state }
            tempState['courses'] =[ action?.payload,...tempState['courses']];
            return tempState;
        },
        removeCourse: (state, action) => {
            let tempState = { ...state }
            tempState['courses'] = tempState['courses'].filter((item) => item?.id !== action.payload)
            return tempState;
        },
        default: (state) => {
            return state;
        }
    },
})


export const { addCourse, removeCourse} = EnrolledCourse.actions

export default EnrolledCourse.reducer