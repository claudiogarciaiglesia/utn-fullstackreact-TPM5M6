import { types } from "../types/types";

const initialState = {
    activePage: null,
    showAddEditBook: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetActivePage:
            return {
                ...state,
                activePage: action.payload
            }

        case types.uiShowAddEditBook:
            return {
                ...state,
                showAddEditBook: action.payload
            }


        default:
            return state;
    }
}