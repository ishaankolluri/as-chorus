import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import individual reducers
import fetches from "./fetches";

const rootReducer = combineReducers({
  fetches,
  routing: routerReducer
});

export default rootReducer;
