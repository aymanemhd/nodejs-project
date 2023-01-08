import React, { useEffect } from "react";
import "../../Styles/Order.css";
import { getAllUser } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Error from "../Error";

const AllUser = () => {
  const dispatch = useDispatch();
  const allUserData = useSelector((state) => state.getAllUserReducer);
  const { loading, currentUser, error } = allUserData;

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div className="admin-content">
      {loading && <Loader />}
      {error && <Error />}
      <h1 className="order_Header">All User</h1>
      <table className="orderd_table" style={{ width: "90%" }}>
        <thead className="table_header">
          <th>Id</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody className="table_body">
          {currentUser &&
            currentUser.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.pass}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
