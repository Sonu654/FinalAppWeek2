import { combineReducers } from 'redux';
import { USER_LIST,VALID_USER,INVALID_USER } from '../Actions/';

let userState={user:[],loading:true,isLogin:false,data:[]};
const userReducer=(state=userState,action)=>{
    switch(action.type){
        case USER_LIST:
            state=Object.assign({},state,{},{users:action.user,loading:false})
            return state;
        case VALID_USER:
            console.log(VALID_USER);
            state=Object.assign({},state,{},{isLogin:true,data:action.userData,loading:false})
            return state;
        case INVALID_USER:
            console.log(INVALID_USER);
            state=Object.assign({},state,{},{isLogin:false,data:action.msg,loading:false})
            return state;
        default: 
            return state;
    }
};

const rootReducer=combineReducers({
    userReducer
})

export default rootReducer;