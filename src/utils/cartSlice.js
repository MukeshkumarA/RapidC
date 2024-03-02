import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {  
        items: [],
    },
    reducers: {
      addToCart: (state, action) => { // state -> is the initial state
        state.items.push(action.payload);
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