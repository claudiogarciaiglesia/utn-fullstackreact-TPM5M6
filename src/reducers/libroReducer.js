import { types } from "../types/types";


const initialState = {
    loaded: false,
    list: []
}


export const libroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.libroListLoaded:
            return {
                ...state,
                list: [...state.list,
                action.payload
                ]
            }



        default:
            return state;
    }
}

