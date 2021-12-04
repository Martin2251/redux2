// always put this in a higher file
import { createStore, combineReducers } from "redux";
import homepage from "./containers/HomePage/reducers";

const reducers = combineReducers({ homepage });

export default createStore(reducers);
