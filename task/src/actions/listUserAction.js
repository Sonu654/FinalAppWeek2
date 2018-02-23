import { AsyncStorage } from "react-native";
import axios from "axios";
import { LIST, LIST_USERS } from "../utils/types";
import { Actions } from "react-native-router-flux";

//Configuration setting for Axios
let instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

//List User from Server
export function listUsers() {
  return dispatch => {
    dispatch({ type: LIST.LIST_REQUEST });
    instance
      .get(LIST_USERS)
      .then(function(response) {
        console.log("DATA--", response);
        list_user_success(dispatch, response.data);
      })
      .catch(function(error) {
        console.log("ERROR--", error);
        list_user_fail(dispatch);
      });
  };
}

//list_user_success
const list_user_success = (dispatch, data) => {
  dispatch({
    type: LIST.LIST_REQUEST_SUCCESS,
    payload: data
  });
};

//list_user_fail
const list_user_fail = dispatch => {
  dispatch({
    type: LIST.LIST_REQUEST_FAIL
  });
};

//List User from Server
export function login(email, password) {
  //   alert(email + "hi I am here in actions");
  console.log(email, password);
  return dispatch => {
    Actions.tabbar();
    dispatch({ type: "LOGINUSER", payload: email });
  };
}
