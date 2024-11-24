import { createSlice } from '@reduxjs/toolkit';

export const CoursesSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { language, price ,img,amount  } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.language === language);
     
        state.items.push({ language, price ,img , amount});
     
    },
    removeFromCart: (state, action) => {
      const { language, amount } = action.payload;
      state.items = state.items.filter(item => !(item.language === language && item.amount === amount));
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CoursesSlice.actions;

export default CoursesSlice.reducer;
