import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItems from '../cartItems';
const initialState = {
  items: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const url = 'https://course-api.com/react-useReducer-cart-project';

// this function needs to return Promise
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    // 1st argument -> parameters passed while calling this function
    console.log(thunkAPI);
    return fetch(url)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.items.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.items.find(item => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: state => {
      let amount = 0;
      let total = 0;
      state.items.forEach(item => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        console.log({ action });
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

console.log({ cartSlice });

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
