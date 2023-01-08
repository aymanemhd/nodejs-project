import React, { useState } from "react";
import "../../Styles/Addpizza.css";
import { addFood } from "../../action/foodaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Success from "../Success";
import Error from "../Error";

const AddPizzas = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [midumPrice, setMidumPrice] = useState("");
  const [image, setImage] = useState("");
  const [descreption, setDescreption] = useState("");
  const [catagary, setCatagary] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addFoodState = useSelector((state) => state.addFoodReducer);
  // const blankInput = () => {};

  const { loading, error, succeess } = addFoodState;
  const loginHandler = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      descreption,
      catagary,
      prices: {
        small: price,
        medium: midumPrice,
        large: largePrice,
      },
    };
    // console.log(pizza);
    dispatch(addFood(pizza));
  };
  return (
    <div className="Edit_control">
      {loading && <loading />}
      {error && <Error />}
      {succeess && <Success />}
      <h1 className="edit-title">Add Food</h1>
      <div>
        <form className="form-horizontal" onSubmit={loginHandler}>
          <div className="grom-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Enter the name of food"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="group-prices">
            <div className="grom-group">
              <label>Price:</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                style={{ width: "15rem" }}
                placeholder="Enter the price"
                className="input-box"
              />
            </div>

            <div className="grom-group">
              <label>medium Price:</label>
              <input
                type="text"
                style={{ width: "15rem" }}
                value={midumPrice}
                onChange={(e) => setMidumPrice(e.target.value)}
                required
                placeholder="Enter midum size of Price"
              />
            </div>

            <div className="grom-group">
              <label>Large Price:</label>
              <input
                style={{ width: "15rem" }}
                type="text"
                placeholder="Enter large size of Price"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grom-group">
            <label>Image</label>
            <input
              type="text"
              value={image}
              placeholder="Enter image URL "
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="grom-group">
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter the Description"
              value={descreption}
              onChange={(e) => setDescreption(e.target.value)}
              required
            />
          </div>

          <div className="grom-group">
            <label>Catagary</label>
            <input
              type="text"
              value={catagary}
              placeholder="Enter the catagary"
              onChange={(e) => setCatagary(e.target.value)}
              required
            />
          </div>
          <div className="btns">
            <input
              type="submit"
              className="button"
              value="Add food"
              style={{ margin: "2rem 1rem" }}
            />
            <input
              type="submit"
              className="button"
              value="All Food"
              onClick={() => navigate("/admin/AllPizzas")}
              style={{ margin: "2rem 1rem" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPizzas;
