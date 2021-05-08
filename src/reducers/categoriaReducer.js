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

        case types.categoriaEdit:
            return {
                ...state,
                list: state.list.map(categoria => (categoria.id === action.payload.id)
                    ? { ...categoria, nombre: action.payload.nombre }
                    : categoria)
            }

        case types.categoriaAdd:
            return {
                ...state,
                list: [...state.list, { ...action.payload }]
            }

        default:
            return state;
    }
}