import { types } from "../types/types";

const initialState = {
    list: [],
    activeCategory: null,
}

export const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.categoriaListLoaded:
            return {
                ...state,
                list: [...action.payload]
            }

        case types.categoriaDelete:
            return {
                ...state,
                list: state.list.filter(
                    category => (category.id !== action.payload.id)
                )
            }

        case types.categoriaSetActive:
            return {
                ...state,
                activeCategory: state.list.filter(category => (category.id === action.payload.id))[0]
            }

        default:
            return state;
    }
}