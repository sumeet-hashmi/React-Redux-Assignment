import { combineReducers } from "redux";
import postReducer from "./Reducer";

const rootReducer = combineReducers({
  data: postReducer,
});

export default rootReducer;