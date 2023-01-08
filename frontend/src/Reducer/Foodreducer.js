//how to do
export const getAllFoodReducer = (
  state = { initialstate: "initialstate" },
  action
) => {
  switch (action.type) {
    case "GET_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_FOOD_SUCCESS":
      return {
        food: action.payload,
        loading: false,
      };
    case "All_FOOD_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FOOD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_FOOD_SUCCESS":
      return {
        succeess: true,
        loading: false,
      };
    case "ADD_FOOD_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getFoodIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FOODID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_FOODID_SUCCESS":
      return {
        food: action.payload,
        loading: false,
      };
    case "GET_FOODID_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const updateFoodByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_FOOD_REQUEST":
      return {
        ...state,
        updateloading: true,
      };
    case "UPDATE_FOODID_SUCCESS":
      return {
        updatesuccess: true,
        updateloading: false,
      };
    case "UPDATE_FOODID_FAIL":
      return {
        updateloading: false,
        updateerror: action.payload,
      };
    default:
      return state;
  }
};
