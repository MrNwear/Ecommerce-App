import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/autReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reactotron from "../../ReactotronConfig";
const rootReducer = combineReducers({ auth: AuthReducer });
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk,logger),reactotron.createEnhancer()));
export default store;
