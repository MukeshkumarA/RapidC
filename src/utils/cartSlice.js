import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.card.info.id == data.card.info.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        const newItem = { ...data, quantity: 1 }; // Create a new object with quantity property added
        state.items.push(newItem); // Push the new object to the state array
      }
    },
    removeFromCart: (state, action) => {
      // if(items.name == action.payload.name){
      //     items
      // }
    },
    clearCart: (state) => {
      state.items = [];
    },
  }
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;