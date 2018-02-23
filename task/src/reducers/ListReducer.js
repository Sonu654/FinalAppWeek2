import { LIST } from "../utils/types";

//Initial State for List Data
const INITIAL_STATE = {
  list_data: null,
  isLoading: false,
  error: "",
  email: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGINUSER":
      //   alert(action.payload + "I am in reduceer");
      return {
        ...state,
        email: action.payload
      };
    case LIST.LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };

    case LIST.LIST_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        list_data: action.payload
      };

    case LIST.LIST_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: "Error",
        list_data: state.list_data
      };

    default:
      return state;
  }
};
