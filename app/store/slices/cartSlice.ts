import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  count: number;
};

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1;
    },
    resetCart: (state) => {
      state.count = 0;
    },
  },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
