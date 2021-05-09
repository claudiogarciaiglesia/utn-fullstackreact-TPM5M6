import { types } from "../types/types";


const initialState = {
    list: [],
    activeBook: null,
    filterByCategory: null,
    filterByPerson: null
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

        case types.libroGetBack:
            return {
                ...state,
                list: state.list.map(
                    book => (book.id === action.payload.id)
                        ? { ...book, persona_id: null, alias: '' }
                        : book
                )
            }

        case types.libroSetActive:
            return {
                ...state,
                activeBook: state.list.filter(book => (book.id === action.payload.id))[0]
            }

        case types.libroEdit:
            return {
                ...state,
                list: state.list.map(book => (book.id === action.payload.id)
                    ? { ...book, descripcion: action.payload.descripcion }
                    : book)
            }

        case types.libroAdd:
            return {
                ...state,
                list: [...state.list, { ...action.payload, persona_id: null, alias: null }]
            }

        case types.libroFilterByCategory:
            return {
                ...state,
                filterByCategory: action.payload.id,
                list: state.list.filter(book => (book.categoria_id === action.payload.id))
            }

        case types.libroFilterByPerson:
            return {
                ...state,
                filterByPerson: action.payload.id,
                list: state.list.filter(book => (book.persona_id === action.payload.id))
            }

        default:
            return state;
    }
}

