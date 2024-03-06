import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {  
        items: new Map(),
    },
    reducers: {
      addToCart: (state, action) => { // state -> is the initial state
        const item = action.payload;
        const itemId = item?.card?.info?.id;
        if (itemId) {
          const existingItem = state.items.get(itemId);
          if (existingItem) {
            // If item already exists in the cart, increment its quantity.
            existingItem.quantity += 1;
          } else {
            // If item doesn't exist, add it to the cart with quantity 1.
            state.items.set(itemId, { ...item, quantity: 1 });
          }
        }
      }, 
      removeFromCart: (state, action) => {
        // if(items.name == action.payload.name){
        //     items
        // }
      },
      clearCart: (state) => {
        state.items = new Map();
      },
    }
})


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;