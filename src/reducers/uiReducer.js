import { types } from "../types/types";

const initialState = {
    activePage: {},
}

export const uiReducer = (state = initialState, action) => {
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