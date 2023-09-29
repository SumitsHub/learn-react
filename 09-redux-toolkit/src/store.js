import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import modalSlice from './features/modalSlice';


const store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: modalSlice
    }
})

export default store;