import { SET_TOKEN , SET_USER , SIGN_IN_START , SIGN_IN_SUCCESS ,Update_Name_SUCCESS, SIGN_IN_FAIL,ConfirmingCode_FAIL,ConfirmingCode_START,ConfirmingCode_SUCCESS, SELECT_DEFAULT_ADDRESS, SET_ORDERS, GET_ORDERS_FAIL, START_GET_USER_DATA, FINISH_GET_USER_DATA } from "../actions/actionTypes"
const initialState = {
    token: '',
    user: null,
    orders:[],
    DefaultAddressID:null,
    isSigningIn:false,
    LoadingUserData:false,
    successSigning:null,
    failSigning:null,
    isConfirmingCode:false,
    successConfirming:null,
    failConfirming:null,
    getOrdersFail:null,
    upadtingSuccess:null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload.token
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case SIGN_IN_START:
            return {
                ...state,
                isSigningIn:true
                
            }
            case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSigningIn:false,
                successSigning:{},
                
            }
            case SIGN_IN_FAIL:
            return {
                ...state,
                isSigningIn:false,
                failSigning:{errorCode:action.payload.errorCode}
                
            }
            case ConfirmingCode_START:
            return {
                ...state,
                isConfirmingCode:true
                
            }
            case ConfirmingCode_SUCCESS:
            return {
                ...state,
                isConfirmingCode:false,
                successConfirming:{},
                
            }
            case ConfirmingCode_FAIL:
            return {
                ...state,
                isConfirmingCode:false,
                failConfirming:{errorCode:action.payload.errorCode}
                
            }
            case START_GET_USER_DATA:
                return{
                    ...state,
                    LoadingUserData:true
                }
                case FINISH_GET_USER_DATA:
                    return{
                        ...state,
                        LoadingUserData:false,
                    }
            case GET_ORDERS_FAIL:
            return {
                ...state,
                getOrdersFail:{errorCode:action.payload.errorCode}
                
            }
            case Update_Name_SUCCESS:
            return {
                ...state,
                upadtingSuccess:{}
                
            }
            case SELECT_DEFAULT_ADDRESS:
            return {
                ...state,
                DefaultAddressID: action.payload.addressID
                
            }
            case SET_ORDERS:
                return{
                    ...state,
                    orders:action.payload.orders
                }
        default:
            return state;
    }
}
export default AuthReducer;