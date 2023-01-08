export const addToCart =
  (pizza, quentity, varients) => (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      varients: varients,
      quentity: parseInt(quentity),
      prices: pizza.prices,
      price: pizza.prices[0][varients] * quentity,
    };
    if (cartItem.quentity > 10) {
      alert("quentity less than 10");
    } else if (cartItem.quentity < 1) {
      alert("quentity not less than 1");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItem",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  };

export const deleteToCart = (pizza) => (dispatch, getState) => {
  // console.log(pizza);
  dispatch({ type: "DELETE_FROM_ITEM", payload: pizza });
  localStorage.setItem(
    "cartItem",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
