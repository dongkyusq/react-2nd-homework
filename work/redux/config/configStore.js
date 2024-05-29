import { combineReducers, createStore } from "redux";
import buys from "../modules/buys";

const rootReducer = combineReducers({
  buys,
});

const store = createStore(rootReducer);
export default store;
