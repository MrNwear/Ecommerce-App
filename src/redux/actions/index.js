import { SET_TOKEN,SET_USER , SIGN_IN_START,SIGN_IN_SUCCESS,SIGN_IN_FAIL } from "./actionTypes";
import axios from 'axios';
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });
export const setUser = user => ({ type: SET_USER, payload: { user } });

const signInStart=()=>({type:SIGN_IN_START});
const signInSucces=()=>({type:SIGN_IN_SUCCESS});
const signInFail=()=>({type:SIGN_IN_FAIL});

export const SignIn =  phone =>{
  return(dispatch,getState)=>{
      dispatch(signInStart());
     axios.post('/verify', { phone })
        .then(response => {
            dispatch(signInSucces());
            console.log(response.data)
            
        })
        .catch(error => {
            dispatch(signInFail());
            console.log('error ' + error);
        })
        
} }