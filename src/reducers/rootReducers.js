import { combineReducers } from "redux";
import { uiReducer } from './uiReducer';
import { libroReducer } from './libroReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    libro: libroReducer,
})