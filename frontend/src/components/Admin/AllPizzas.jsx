import React from "react";
import { useEffect } from "react";
// import pizzas from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood, deleteFood } from "../../action/foodaction";
import "../../Styles/Allpizzas.css";
import { Link } from "react-router-dom";
import Loding from "../../components/Loader";
import Error from "../../components/Error";

const AllPizzas = () => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodReducer);

  const { loading, food, error } = foodState;

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loding />
      ) : error ? (
        <Error />
      ) : (
        <>
          <table className="table-pizzaData">
            <thead className="head-pizzaData">
              <tr>
                <th>Images</th>
                <th>Pizza Name</th>
                <th>Price</th>
                <th>Catagary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {food &&
                food.map((food, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={food.image}
                        height="100%"
                        width="100%"
                        alt="logo"
                      />
                    </td>
                    <td>{food.name}</td>
                    <td>
                      Small : {food.prices[0]["small"]}
                      <br />
                      Medium : {food.prices[0]["medium"]}
                      <br />
                      Large : {food.prices[0]["large"]}
                    </td>
                    <td>{food.category}</td>
                    <td>
                      <Link to={`/admin/Editpizza/${food._id}`}>
                        <i
                          style={{
                            margin: "0.5rem",
                            cursor: "pointer",
                          }}
                          className="fa-solid fa-pen-to-square"
                        ></i>
                      </Link>
                      <i
                        style={{ margin: "0.5rem", cursor: "pointer" }}
                        className="fa-solid fa-trash"
                        onClick={() => dispatch(deleteFood(food._id))}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default AllPizzas;
