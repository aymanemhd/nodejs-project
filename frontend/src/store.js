import {
  getAllFoodReducer,
  addFoodReducer,
  getFoodIdReducer,
  updateFoodByIdReducer,
} from "./Reducer/Foodreducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducer/cartReducer";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUserReducer,
} from "./Reducer/userReducer";
import {
  placeOrderReducer,
  getUserOrderReducer,
  getAllUserOrderReducer,
} from "./Reducer/orderreducer";

const rootReducer = combineReducers({
  getAllFoodReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  addFoodReducer,
  getFoodIdReducer,
  updateFoodByIdReducer,
  placeOrderReducer,
  getUserOrderReducer,
  getAllUserOrderReducer,
  getAllUserReducer,
});
// localStorage.clear();

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
// console.log(currentUser);

const cartItems = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

// console.log(cartItems);
const initialstate = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialstate,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
