export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTRATION_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUIEST":
      return {
        loding: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAllUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_REQUIEST":
      return {
        loding: true,
      };
    case "GET_USER_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "GET_USER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
