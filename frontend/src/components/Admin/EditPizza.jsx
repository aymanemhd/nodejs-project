import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFoodId } from "../../action/foodaction";
import "../../Styles/Addpizza.css";
import { updateFood } from "../../action/foodaction";
import Success from "../../components/Success";
import Loader from "../Loader";

const EditPizza = () => {
  const dispatch = useDispatch();
  const parms = useParams();
  const addFoodState = useSelector((state) => state.getFoodIdReducer);
  const { loading, error, food } = addFoodState;

  const updatePizzaState = useSelector((state) => state.updateFoodByIdReducer);
  const { updateloading } = updatePizzaState;
  // console.log(food);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [midumPrice, setMidumPrice] = useState("");
  const [image, setImage] = useState("");
  const [descreption, setDescreption] = useState("");
  const [catagary, setCatagary] = useState("");

  // console.log(food);

  const loginHandler = (e) => {
    e.preventDefault();
    const updatedFood = {
      _id: parms.id,
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
    // console.log(updatedFood);
    dispatch(updateFood(updatedFood));
  };
  useEffect(() => {
    if (food) {
      // console.log(food);
      if (food._id === parms.id) {
        // console.log("name" + name);
        // console.log(food.name);
        setName(food.name);
        // setDescreption(food.);
        setImage(food.image);
        setCatagary(food.category);
        setPrice(food.prices[0].small);
        setMidumPrice(food.prices[0].medium);
        setLargePrice(food.prices[0].large);
      } else {
        dispatch(getFoodId(parms.id));
      }
    } else {
      dispatch(getFoodId(parms.id));
    }
  }, [food, dispatch]);

  return (
    <div className="Edit_control">
      {loading && <Loader />}
      {updateloading && <Success />}
      {error && <h1>Error</h1>}
      <h1 className="edit-title">Edit Food</h1>
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
              value="Edit Food"
              style={{ margin: "2rem 1rem" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPizza;
