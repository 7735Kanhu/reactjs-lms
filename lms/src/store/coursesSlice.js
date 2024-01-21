import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    setCourses: (state, action) => {
      return action.payload;
    },
    addCourse: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setCourses, addCourse } = coursesSlice.actions;
export default coursesSlice.reducer;