import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const productsState = {
    products: []
}

const productsSlice = createSlice({
    name: 'product',
    initialState: productsState,
    reducers: {
        addProducts(state, action){
            state.products = action.payload
        }
    }
})
const store = configureStore({
    reducer: productsSlice.reducer
})

export default store;