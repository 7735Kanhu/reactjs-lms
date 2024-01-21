import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    // Add other reducers as needed
  },
});

export default store;