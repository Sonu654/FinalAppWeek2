import { combineReducers } from 'redux';
import { USER_LIST, VALID_USER, INVALID_USER } from '../Actions/index.js';
import { USER_DATA } from '../Actions/dashAction';

let userState = { user: [], loading: true, isLogin: false, data: [], msg: 'Please Login For Continue..!' };
const userReducer = (state = userState, action) => {
    console.log("Action Type: " + action.type);
    switch (action.type) {
        case USER_LIST:
            state = Object.assign({}, state, {}, { users: action.payload, loading: false })
            return state;
        case VALID_USER:
            state = Object.assign({}, state, {}, { isLogin: true, data: action.payload, loading: false })
            return state;
        case INVALID_USER:
            state = Object.assign({}, state, {}, { isLogin: false, msg: action.payload, loading: false })
            return state;
        default:
            return state;
    }
};

let dashState = { loading: true, data: [], isLogin: true };
const dashReducer = (state = dashState, action) => {
    console.log("inside dashredcer");
    console.log("Action Type: " + action.type);
    switch (action.type) {
        case USER_DATA:
            console.log(state);
            state = Object.assign({}, state, {}, { data: action.payload, loading: false });
            return state;
        default:
            return state; 
    }

}

const rootReducer = combineReducers({
    userReducer,
    dashReducer
})

export default rootReducer;