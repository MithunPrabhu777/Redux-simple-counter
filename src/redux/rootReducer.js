import { combineReducers } from "redux";
import {reducer} from "./action-reducers";

console.log("going combineReducer");
export const rootReducer = combineReducers({ ourState : reducer });