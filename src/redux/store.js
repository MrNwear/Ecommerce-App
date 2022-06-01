import { createStore, combineReducers } from "redux";
import AuthReducer from "./reducers/autReducer";
const rootReducer = combineReducers({ auth: AuthReducer });
const store = createStore(rootReducer);
export default store;
