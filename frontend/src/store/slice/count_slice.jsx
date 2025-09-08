import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        cartItems: []
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },

        addToCart: (state, action) => {
            const newItem = {
                ...action.payload,
                grams: Number(action.payload.grams),
                quantity: Number(action.payload.quantity),
            };

            const existingItem = state.cartItems.find(
                item => item.id === newItem.id && item.grams === newItem.grams
            );

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },


    removeFromCart: (state, action) => {
            const { id, grams } = action.payload;
            state.cartItems = state.cartItems.filter(
                item => !(item.id === id && item.grams === grams)
            );
        },

        increaseQuantity: (state, action) => {
            const { id, grams } = action.payload;
            const item = state.cartItems.find(
                item => item.id === id && item.grams === grams
            );
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const { id, grams } = action.payload;
            const item = state.cartItems.find(
                item => item.id === id && item.grams === grams
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

export const {
    increment,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
