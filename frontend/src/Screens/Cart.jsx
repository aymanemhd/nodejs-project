import React, { useState } from "react";
import "../Styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart } from "../action/cartAction";
import { placeOrder } from "../action/orderaction";
import Success from "../components/Success";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [add, setAdd] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.loginUserReducer);
  // const { currentUser } = userState;

  const orderStatus = useSelector((state) => state.placeOrderReducer);
  const { loading, success, error } = orderStatus;
  const createState = useSelector((state) => state.cartReducer);
  const cartItems = createState.cartItems;

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const validator = () => {
    if (add === "" || pin === "" || city === "") {
      alert("Every field is required !!");
    } else {
      dispatch(placeOrder(subtotal, add, pin, city));
      setAdd("");
      setPin("");
      setCity("");
      localStorage.removeItem("cartItem");
      navigate("/order");
      window.location.reload(true);
    }
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <h5 className="cart-header">My Cart</h5>
          <div className="cart_content">
            {cartItems.map((value, key) => {
              return (
                <>
                  <div className="order-item" key={key}>
                    <div className="order-details">
                      <h4 className="food-name">
                        {value.name} [{value.varients}]
                      </h4>
                      <h6 className="food-price">
                        price:{value.quentity} X
                        {value.prices[0][value.varients]} = {value.price}
                        <br />
                        Quantity:
                        <i
                          className="fa-solid fa-circle-minus minus-circle"
                          onClick={() => {
                            dispatch(
                              addToCart(
                                value,
                                value.quentity - 1,
                                value.varients
                              )
                            );
                          }}
                        ></i>
                        {value.quentity}
                        <i
                          className="fa-solid fa-circle-plus plus-circle"
                          onClick={() =>
                            dispatch(
                              addToCart(
                                value,
                                value.quentity + 1,
                                value.varients
                              )
                            )
                          }
                        ></i>
                        <i
                          className="fa-solid fa-trash-can Trash"
                          onClick={() => dispatch(deleteToCart(value))}
                        ></i>
                      </h6>
                    </div>
                    <div className="orderfood-img">
                      <img
                        className="food-image"
                        src={value.image}
                        alt={value.name}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
        <div className="cart-right">
          {error && <Error />}
          {success && <Success />}
          {loading && <Loader />}
          <h5 className="cart-header">payment order</h5>
          <h6 className="payment-header">Sub total</h6>
          <h6 className="payment-total">Total Payment : {subtotal} /-</h6>
          <form style={{ marginTop: "1rem" }}>
            <label htmlFor="address">Enter your address</label>
            <input
              type="text"
              value={add}
              id="address"
              placeholder="Enter your address"
              onChange={(e) => setAdd(e.target.value)}
            />
            <label htmlFor="pin">Enter your pincode</label>
            <input
              type="text"
              value={pin}
              id="pincode"
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter your Pincode"
            />
            <label htmlFor="city">Enter your City</label>
            <input
              type="text"
              value={city}
              id="city"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your City"
            />
          </form>
          <button className="button" onClick={validator}>
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
