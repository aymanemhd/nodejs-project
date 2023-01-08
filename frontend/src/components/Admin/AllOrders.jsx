import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deliverdSuccess, getAllUsersOrders } from "../../action/orderaction";
import Loader from "../Loader";
import Error from "../Error";
import "../../Styles/Order.css";

const AllOrders = () => {
  const allOrdersUser = useSelector((state) => state.getAllUserOrderReducer);
  const { loading, orders, error } = allOrdersUser;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersOrders());
  }, [dispatch]);
  return (
    <div className="userOrder_container ">
      <h1 className="order_Header">All user Order</h1>
      {loading && <Loader />}
      {error && <Error />}
      <table className="orderd_table" style={{ width: "90%" }}>
        <thead className="table_header">
          <th>Order ID</th>
          <th>Email</th>
          <th>User Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </thead>
        <tbody className="table_body">
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>Rs {order.orderAmount}/-</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDeliverd ? (
                    <h6 style={{ color: "green", fontSize: "1.5rem" }}>
                      {" "}
                      Delivered
                    </h6>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(deliverdSuccess(order._id));
                      }}
                      className="deliverd"
                    >
                      Deliver
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
