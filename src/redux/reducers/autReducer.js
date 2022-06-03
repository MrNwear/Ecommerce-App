import { SET_TOKEN , SET_USER , SIGN_IN_START , SIGN_IN_SUCCESS , SIGN_IN_FAIL } from "../actions/actionTypes"
const initialState = {
    token: '',
    user: null,
    isSigningIn:false,
    successSigning:null,
    failSigning:null
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
                failSigning:{}
                
            }
        default:
            return state;
    }
}
export default AuthReducer;