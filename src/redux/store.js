import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reactotron from "../../ReactotronConfig";
import AppReducer from "./reducers";
const store = createStore(AppReducer,composeWithDevTools(applyMiddleware(thunk,logger),reactotron.createEnhancer()));
export default store;
