import { types } from "../types/types";

export const uiSetActivePage = (payload) => ({
    type: types.uiSetActivePage,
    payload: payload
});

export const uiShowAddEditBook = (payload) => ({
    type: types.uiShowAddEditBook,
    payload: payload
})

export const uiShowBorrowBook = (payload) => ({
    type: types.uiShowBorrowBook,
    payload: payload
})

export const uiShowAddEditCategory = (payload) => ({
    type: types.uiShowAddEditCategory,
    payload: payload
})

export const uiShowAddEditPerson = (payload) => ({
    type: types.uiShowAddEditPerson,
    payload: payload
})