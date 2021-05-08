import { types } from "../types/types";

const initialState = {
    list: [],
    activePerson: null,
}

export const personaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.personaListLoaded:
            return {
                ...state,
                list: [...action.payload]
            }

        case types.personaDelete:
            return {
                ...state,
                list: state.list.filter(
                    person => (person.id !== action.payload.id)
                )
            }

        case types.personaSetActive:
            return {
                ...state,
                activePerson: state.list.filter(person => (person.id === action.payload.id))[0]
            }

        case types.personaEdit:
            return {
                ...state,
                list: state.list.map(person => (person.id === action.payload.id)
                    ? {
                        ...person,
                        nombre: action.payload.nombre,
                        apellido: action.payload.apellido,
                        alias: action.payload.alias
                    }
                    : person)
            }

        case types.personaAdd:
            return {
                ...state,
                list: [...state.list, { ...action.payload }]
            }

        default:
            return state;
    }
}