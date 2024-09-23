import { combineReducers } from "redux";
import CartReducer from "./Cart";

const RootReducer = combineReducers({
  cart: CartReducer,
});

export default RootReducer;
