import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const cartState = {
  cartItems: [
    {
      itemId: 3,
      itemName: "chike",
      itemPrice: 34.99,
      itemImage:
        "https://www.cnet.com/a/img/resize/887997d313cda859afd73f96615c96a51338a5ca/hub/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg?auto=webp&fit=crop&height=900&width=1200",
      itemTotalAmount: 3,
      itemTotalPrice: 59.45,
    },
    {
      itemId: 2,
      itemName: "Chidi",
      itemPrice: 34.99,
      itemImage:
        "https://www.cnet.com/a/img/resize/887997d313cda859afd73f96615c96a51338a5ca/hub/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg?auto=webp&fit=crop&height=900&width=1200",
      itemTotalAmount: 4,
      itemTotalPrice: 109.45,
    },
  ],
};



const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addtoCart(state, action) {
      if (state.cartItems.length > 0) {
        const initialID = state.cartItems.findIndex(
          (el) => el.itemId === action.payload.itemId
        );
        if (initialID === -1) {
          state.cartItems.push(action.payload);
        } else {
          const addItemTotalPrice =
            state.cartItems[initialID].itemTotalPrice +
            action.payload.itemPrice;
          const finalItemTotalPrice = parseFloat(addItemTotalPrice.toFixed(2));

          state.cartItems[initialID].itemTotalAmount++;
          state.cartItems[initialID].itemTotalPrice = finalItemTotalPrice;
        }
      } else {
        state.cartItems.push(action.payload);
      }
    },
    deletefromCart: (state, action) => {
      const initialID = state.cartItems.findIndex(
        (el) => el.itemId === action.payload.itemId
      );
      if (action.payload.message === "delete") {
        state.cartItems.splice(initialID, 1);
        return;
      }
      const pickedItem = state.cartItems[initialID];
      if (pickedItem.itemTotalAmount === 1) {
        state.cartItems.splice(initialID, 1);
      } else {
        const subtractItemTotalPrice =
          state.cartItems[initialID].itemTotalPrice - action.payload.itemPrice;
        const finalItemTotalPrice = parseFloat(
          subtractItemTotalPrice.toFixed(2)
        );

        state.cartItems[initialID].itemTotalAmount--;
        state.cartItems[initialID].itemTotalPrice = finalItemTotalPrice;
      }
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
