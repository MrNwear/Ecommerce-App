import { SET_TOKEN,SET_USER , SIGN_IN_START,SIGN_IN_SUCCESS,SIGN_IN_FAIL,ConfirmingCode_FAIL,ConfirmingCode_START,ConfirmingCode_SUCCESS } from "./actionTypes";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY, USER_KEY } from "../../utils/constants";

export const setToken = token => ({ type: SET_TOKEN, payload: { token } });
export const setUser = user => ({ type: SET_USER, payload: { user } });

const signInStart=()=>({type:SIGN_IN_START});
const signInSucces=()=>({type:SIGN_IN_SUCCESS});
const signInFail=()=>({type:SIGN_IN_FAIL});
const ConfirmingCodeStart=()=>({type:ConfirmingCode_START});
const ConfirmingCodeSucces=()=>({type:ConfirmingCode_SUCCESS});
const ConfirmingCodeFail=()=>({type:ConfirmingCode_FAIL});

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

export const ConfirmCode=(phone,code)=>{
    return(dispatch,getState)=>{
        dispatch(ConfirmingCodeStart());
            axios.post('/verify/validate', { phone, code })
                .then(response => {
                    dispatch(ConfirmingCodeSucces());
                    const { token, userData } = response.data;
                    dispatch(setToken(token));
                    dispatch(setUser(userData));
                    axios.defaults.headers.Authorization = 'Bearer ' + token;
                    AsyncStorage.setItem(TOKEN_KEY, token);
                    AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));

                })
                .catch(error => {
                    dispatch(ConfirmingCodeFail());
                    console.log('error ' + error);
                })
                
}}