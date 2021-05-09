import { types } from "../types/types";

const initialState = {
    activePage: 'booklist',
    showAddEditBook: false,
    showAddEditCategory: false,
    showAddEditPerson: false,
    showBorrowBook: false,
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

        case types.uiShowBorrowBook:
            return {
                ...state,
                showBorrowBook: action.payload
            }

        case types.uiShowAddEditCategory:
            return {
                ...state,
                showAddEditCategory: action.payload
            }


        case types.uiShowAddEditPerson:
            return {
                ...state,
                showAddEditPerson: action.payload
            }

        default:
            return state;
    }
}