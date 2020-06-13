import {combineReducers} from "redux";
import UsersReducer from "./UserReducer";

export default combineReducers({
    users: UsersReducer,
});