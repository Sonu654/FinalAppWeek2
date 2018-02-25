import { Actions } from 'react-native-router-flux';
export const USER_DATA='GET_USER';
import data from '../Assets/JSON/users.json';


export function getDash(){
    console.log("Inside Dash Actions");
    return(dispatch)=>{
      setTimeout(()=>{
        //var data=data.users;
        console.log(data.users);
        dispatch({type:USER_DATA,payload:data.users});
      },2000);
    }
}

