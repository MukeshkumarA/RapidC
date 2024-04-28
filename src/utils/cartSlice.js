import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id == data.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        const newItem = { ...data, quantity: 1 }; // Create a new object with quantity property added
        state.items.push(newItem); // Push the new object to the state array
      }
    },
    removeFromCart: (state, action) => {
      const itemName = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === itemName);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        // if (state.items[itemIndex].quantity > 1) {
        //   state.items[itemIndex].quantity -= 1;
        // } else {
        //   state.items.splice(itemIndex, 1);
        // }
      }
    },
    handleQuantity: (state, action) => {
      const { itemName, itemAction } = action.payload;
      const itemIndex = state.items.findIndex(item => item.name === itemName);
      if (itemIndex !== -1) {
        if (itemAction == "add") {
          if (state.items[itemIndex].quantity > 0) {
            state.items[itemIndex].quantity ++;
          }
        }
        else{
          if (state.items[itemIndex].quantity > 0) {
            state.items[itemIndex].quantity --;
          }
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  }
})


export const { addToCart, removeFromCart, clearCart, handleQuantity } = cartSlice.actions;

export default cartSlice.reducer;