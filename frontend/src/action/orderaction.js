import axios from "axios";

export const placeOrder =
  (subTotal, add, pin, city) => async (dispatch, getState) => {
    dispatch({ type: "PLACE_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    //   console.log(currentUser);
    //   console.log(cartItems);

    try {
      const res = await axios.post("/api/orders/placeorders", {
        subTotal,
        currentUser,
        cartItems,
        pin,
        add,
        city,
      });
      console.log(res);
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
    } catch (error) {
      dispatch({ type: "PLACE_ORDER_FAIL" });
      console.log("Error in place Order " + error);
    }
  };

export const getUsersOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  console.log(currentUser);
  try {
    const res = await axios.post("api/orders/getUserOrder", {
      userId: currentUser._id,
    });
    dispatch({ type: "USER_ORDER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "USER_ORDER_FAIL", payload: err });
    console.log("Error read order " + err);
  }
};

export const getAllUsersOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "AllUSER_ORDER_REQUEST" });
  // console.log(currentUser);
  try {
    const orders = await axios.get("/api/orders/getAllUserOrder");
    // console.log(orders);
    dispatch({ type: "AllUSER_ORDER_SUCCESS", payload: orders.data });
  } catch (err) {
    dispatch({ type: "AllUSER_ORDER_FAIL", payload: err });
    console.log("Error read all customer order " + err);
  }
};

export const deliverdSuccess = (orderid) => async (dispatch, getState) => {
  dispatch({ type: "GET_AllUSER_ORDER_REQUEST" });
  try {
    const orders = await axios.post("/api/orders/dileveredOrder", { orderid });
    const deliveredData = await axios.get("/api/orders/getAllUserOrder");
    dispatch({
      type: "GET_AllUSER_ORDER_SUCCESS",
      payload: deliveredData.data,
    });
    console.log(orders);
    window.location.reload(true);
  } catch (err) {
    dispatch({ type: "GET_AllUSER_ORDER_FAIL", payload: err });
    console.log("Error read all customer order " + err);
  }
};
