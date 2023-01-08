//what to do
import axios from "axios";

export const getAllFood = () => async (dispatch) => {
  dispatch({ type: "GET_FOOD_REQUEST" });
  try {
    const res = await axios.get("/api/food/getAllfood");
    dispatch({ type: "GET_FOOD_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "All_FOOD_FAIL", payload: error });
  }
};

export const addFood = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_FOOD_REQUEST" });
  try {
    const r̥es = await axios.post("/api/food/addfood", { pizza });

    dispatch({ type: "ADD_FOOD_SUCCESS", payload: r̥es.data });
  } catch (error) {
    dispatch({ type: "ADD_FOOD_FAIL", payload: error });
  }
};

export const getFoodId = (food_id) => async (dispatch) => {
  dispatch({ type: "GET_FOODID_REQUEST" });
  try {
    const r̥es = await axios.post("/api/food/getfoodid", { food_id });

    dispatch({ type: "GET_FOODID_SUCCESS", payload: r̥es.data });
  } catch (error) {
    dispatch({ type: "GET_FOODID_FAIL", payload: error });
  }
};

export const updateFood = (updatedFood) => async (dispatch) => {
  dispatch({ type: "UPDATE_FOOD_REQUEST" });
  try {
    const r̥es = await axios.post("/api/food/updateFood", { updatedFood });
    dispatch({ type: "UPDATE_FOODID_SUCCESS", payload: r̥es.data });
    window.location.href = "/admin/AllPizzas";
  } catch (error) {
    dispatch({ type: "UPDATE_FOODID_FAIL", payload: error });
  }
};

export const deleteFood = (food_id) => async (dispatch) => {
  try {
    const res = await axios.post("/api/food/deleteFood", { food_id });
    window.location.reload();
    console.log(res);
  } catch (error) {
    console.log("error while deleting pizza");
  }
};

export const filterFood = (search, option) => async (dispatch) => {
  // console.log(search);
  let filterdPizza;
  dispatch({ type: "GET_FOOD_REQUEST" });
  try {
    const res = await axios.get("/api/food/getAllfood");
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(search)
    );
    // console.log(filterdPizza);
    if (option !== "all") {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === option
      );
    }
    dispatch({ type: "GET_FOOD_SUCCESS", payload: filterdPizza });
  } catch (error) {
    dispatch({ type: "GET_FOOD_FAIL", payload: error });
  }
};
