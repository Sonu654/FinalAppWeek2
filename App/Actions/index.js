import { Actions } from 'react-native-router-flux';
const USER_LIST='GET_USER';
const VALID_USER='VALID_USER';
const INVALID_USER='INVALID_USER';
import data from '../Assets/JSON/users.json';


export function getUser(){
    return(dispatch)=>{
      setTimeout(()=>{
        //var data=data.users;
        console.log(data.users);
        dispatch({type:USER_LIST,users:data.users});
      },2000);
    }
  }

export function validUser(username,pass){
    return(dispatch)=>{
        console.log("Actions: userName :"+username+" & " +"Pass :"+pass);
        users=data.users;
        for(let user in users){
            //console.log(users[user].userName +"== "+username+" && "+ users[user].userPass+"=="+pass);
           // console.log(users[user].userName);
            if(users[user].userName==username && users[user].userPass==pass){
                userData={
                    "userName": username,
                    "FirstName":users[user].firstName,
                    "LastName":users[user].lastName     
                }; 
                dispatch({type:VALID_USER, payload:userData}); 
                Actions.home(); 
            }
        }
        msg='Invalid User';
        dispatch({type:INVALID_USER, payload:msg});
    }
}

