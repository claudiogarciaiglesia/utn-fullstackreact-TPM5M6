import { types } from "../types/types";

const initialState = {
    list: [],
    activePerson: null,
}

export const personaReducer = (state = initialState, action) =>{
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

        default:
            return state;
    }
}