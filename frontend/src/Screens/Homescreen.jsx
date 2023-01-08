import React from "react";
import { useEffect } from "react";
// import pizzas from "../pizza-data";
import Card from "../components/Card";
import "../Styles/Homescreen.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllFood } from "../action/foodaction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

const Homescreen = () => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodReducer);

  const { loading, food, error } = foodState;

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Filter />
          <main className="home_container">
            {food &&
              food.map((pizza, i) => {
                return <Card pizza={pizza} key={pizza._id} />;
              })}
          </main>
        </>
      )}
    </>
  );
};
export default Homescreen;
