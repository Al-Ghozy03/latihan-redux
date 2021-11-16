import { combineReducers } from "redux";
import { authProcess } from "./authReducer";

export const allReducer = combineReducers({
    auth:authProcess
})