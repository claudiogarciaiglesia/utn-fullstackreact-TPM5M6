import { types } from "../types/types";


// const initialState = {
//     activePage: {},
// }

export const uiReducer = (state = {}, action) => {
    console.log("uiReducer");
    switch (action.type) {
        case types.uiSetActivePage:
            return {
                ...state,
                activePage: action.payload
            }
            
    
        default:
            return state;
    }
}