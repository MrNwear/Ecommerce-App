import AuthReducer from "./autReducer";
import { CLEAR_REDUX_DATA } from "../actions/actionTypes";
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import homeReducer from "./homeReducer";
import searchReducer from "./searchReducer";
const rootReducer = combineReducers({ auth: AuthReducer,home:homeReducer , cart:cartReducer , search : searchReducer});

const AppReducer=(state,action)=>{
    if(action.type===CLEAR_REDUX_DATA){
        return rootReducer(undefined,action);
    }
    return rootReducer(state,action);
}
export default AppReducer;
