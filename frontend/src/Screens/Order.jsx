import React, { useEffect } from "react";
import { getUsersOrders } from "../action/orderaction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "../Styles/Order.css";

const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrderReducer);
  const { loading, error, orders } = orderState;
  // console.log(orders);
  useEffect(() => {
    dispatch(getUsersOrders());
  }, [dispatch]);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {/* {(orders.length = 0 && "<h3>Order Item 0</h3>")} */}
      <h1 className="order_Header">your orders</h1>
      <table className="orderd_table">
        <thead className="table_header">
          <th> orderd food </th>
          <th> Shipping Address </th>
          <th>Total Amount</th>
        </thead>
        <tbody className="table_body">
          {orders &&
            orders.map((order) => {
              return (
                <>
                  <tr>
                    <td>
                      {order &&
                        order.orderItems.map((item) => {
                          return (
                            <>
                              {item.name}[{item.varients}] * {item.quentity} =
                              {item.price}
                              <br></br>
                            </>
                          );
                        })}
                    </td>
                    <td>
                      Address : {order.shippingAddress.address}
                      <br />
                      City : {order.shippingAddress.city}
                      <br />
                      Pincode : {order.shippingAddress.pincode}
                    </td>
                    <td>
                      <h5 className="order_header">Order Amount </h5>RS :
                      {order.orderAmount}/- <br />
                      <br />
                      <h5>type:</h5>cash on delivery
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Order;
