import { types } from "../types/types";

export const uiSetActivePage = (payload) => ({
    type: types.uiSetActivePage,
    payload: payload
});

export const uiShowAddEditBook = (payload) => ({
    type: types.uiShowAddEditBook,
    payload: payload
})