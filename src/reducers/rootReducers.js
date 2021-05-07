import { combineReducers } from "redux";
import { uiReducer } from './uiReducer';
import { libroReducer } from './libroReducer';
import { categoriaReducer } from "./categoriaReducer";
import { personaReducer } from "./personaReducer";




export const rootReducer = combineReducers({
    ui: uiReducer,
    libro: libroReducer,
    categoria: categoriaReducer,
    persona: personaReducer
})