import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/CoursesSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;