import { types } from "../types/types";


const initialState = {
    list: []
}


export const libroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.libroListLoaded:
            return {
                ...state,
                list: [...action.payload]
            }

        case types.libroDelete:
            return {
                ...state,
                list: state.list.filter(
                    book => (book.id !== action.payload.id)
                )
            }

        case types.libroBorrow:
            return {
                ...state,
                list: state.list.map(
                    book => (book.id === action.payload.id)
                        ? { ...book, persona_id: action.payload.persona_id, alias: action.payload.alias }
                        : book
                )
            }



        default:
            return state;
    }
}

