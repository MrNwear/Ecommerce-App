import { SET_TOKEN,SET_USER , SIGN_IN_START,SIGN_IN_SUCCESS,SIGN_IN_FAIL,ConfirmingCode_FAIL,ConfirmingCode_START,ConfirmingCode_SUCCESS,CLEAR_REDUX_DATA, Update_Name_SUCCESS, SELECT_DEFAULT_ADDRESS, SET_ORDERS, GET_ORDERS_FAIL, START_GET_USER_DATA, FINISH_GET_USER_DATA } from "./actionTypes";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEFAULT_ADDRESS_ID_KEY, TOKEN_KEY, USER_KEY } from "../../utils/constants";
import { UNEXPECTED_ERROR,WRONG_CODE } from "../../utils/errorCodes";
export const setToken = token => ({ type: SET_TOKEN, payload: { token } });
export const setUser = user => ({ type: SET_USER, payload: { user } });
export const setOrder = orders => ({ type: SET_ORDERS, payload: { orders } });
const signInStart=()=>({type:SIGN_IN_START});
const signInSucces=()=>({type:SIGN_IN_SUCCESS});
const signInFail=errorCode=>({type:SIGN_IN_FAIL,payload:{errorCode}});
const ConfirmingCodeStart=()=>({type:ConfirmingCode_START});
const ConfirmingCodeSucces=()=>({type:ConfirmingCode_SUCCESS});
const ConfirmingCodeFail=errorCode=>({type:ConfirmingCode_FAIL,payload:{errorCode}});
const getOrdersFail=errorCode=>({type:GET_ORDERS_FAIL,payload:{errorCode}});
const startGetUserData=()=>({type:START_GET_USER_DATA});
const finishGetUserData=()=>({type:FINISH_GET_USER_DATA});

export const selectDefaultAddress=addressID=>({type:SELECT_DEFAULT_ADDRESS,payload:{addressID}});
const clearReduxData=()=>({type:CLEAR_REDUX_DATA})
const updateNameSucces=()=>({type:Update_Name_SUCCESS});
export const SignIn =  phone =>{
  return(dispatch,getState)=>{
      dispatch(signInStart());
     axios.post('/verify', { phone })
        .then(response => {
            dispatch(signInSucces());
            console.log(response.data);
            
        })
        .catch(error => {
            dispatch(signInFail(UNEXPECTED_ERROR));
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
                    const errorCode=error.message.includes('401')? WRONG_CODE:UNEXPECTED_ERROR;
                    dispatch(ConfirmingCodeFail(errorCode));
                    console.log('error ' + error);
                })
                
}}

export const logout=()=>{
    return(dispatch,getState)=>{
        axios.defaults.headers.Authorization=undefined;
        AsyncStorage.clear();
        dispatch(clearReduxData());
                
}}

export const getUserData=()=>{
    return(dispatch,getState)=>{
        dispatch(startGetUserData());
        axios.get('/user/get-data')
        .then(response=>{
            dispatch(setUser(response.data.userData));
        })
        .catch(error=>{
        })
        .finally(()=>{
            dispatch(finishGetUserData());
        })
    }
}
export const updateUserData=name=>{
    return(dispatch,getState)=>{
        axios.put('/user/change-name',{name}).then(response=>{
            dispatch(getUserData());
            dispatch(updateNameSucces());
        })
    }
}

export const addAddressData=({name,phone,city,area,street,building})=>{
    return(dispatch,getState)=>{
        axios.post('/address',{name,phone,city,area,street,building})
        .then(response=>{
            dispatch(getUserData());
            dispatch(selectedAddress(response.data._id));
        })
    }
}

export const selectedAddress= addressID=>{
    return(dispatch,getState)=>{
        AsyncStorage.setItem(DEFAULT_ADDRESS_ID_KEY,addressID);
        dispatch(selectDefaultAddress(addressID));
    }
}

export const getOrders=()=>{
    return(dispatch,getState)=>{
        axios.get('/order').then(response=>{
             dispatch(setOrder(response.data.orders));

        }).catch(error=>{
            dispatch(getOrdersFail());
        });
    }
}
