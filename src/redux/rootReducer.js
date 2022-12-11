import { combineReducers } from "redux";
import {reducer} from "./action-reducers";

export const rootReducer = combineReducers({ ourState : reducer });