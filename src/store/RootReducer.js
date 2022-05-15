import { combineReducers } from "redux";
import { breakfastReducer } from "./Reducer";


 export const rootReducer = combineReducers({
    breakfast : breakfastReducer

});


 