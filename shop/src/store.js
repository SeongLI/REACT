import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

// let user = createSlice({
//   name: "user",
//   initialState: { name: "kim", age: 20 },
//   reducers: {
//     changeName(state) {
//       //   return { name: "park", age: 20 };
//       state.name = "park"; // Immer.js 도움
//     },
//     increase(state, action) {
//       state.age += action.payload;
//     },
//   },
// });

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, a) {
      return (state.cart[a.payload].count += 1);
    },
  },
});

export let { changeCount } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
