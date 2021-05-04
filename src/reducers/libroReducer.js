import { types } from "../types/types";


const initialState = {
    dbUpdated: true,
    list: []
}


export const libroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.libroListLoaded:
            return {
                ...state,
                list: [...action.payload]
            }

        case types.libroSetDBUpdated:
            return {
                ...state,
                dbUpdated: action.payload
            }

        // case types.libroDelete:



        default:
            return state;
    }
}

