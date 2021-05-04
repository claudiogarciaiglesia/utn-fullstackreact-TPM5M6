import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const libroStartLoadList = () => {

    const url = `${baseUrl}listado`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(libroListLoaded(response.data));
            dispatch(libroSetDBUpdated(false));
        } catch (error) {
            console.log(error);
        }
    }
};

const libroSetDBUpdated = (value) => ({
    type: types.libroSetDBUpdated,
    payload: value
});

const libroListLoaded = (libros) => ({
    type: types.libroListLoaded,
    payload: libros
});

export const libroStartDelete = (id) => {

    const url = `${baseUrl}libro/${id}`;
    console.log(url);

    return async (dispatch) => {
        try {
            const response = await axios.delete(url);
            console.log(response);
            dispatch(libroDelete(id));
            dispatch(libroSetDBUpdated(true));
        } catch (error) {
            console.log(error);
        }
    }
}

const libroDelete = (id) => ({
    type: types.libroDelete,
    payload: id
});

export const libroStartEdit = () => {
    return async (dispatch) => {

    }
}

const libroEdit = (id) => ({
    type: types.libroEdit,
    payload: id
});

export const libroStartBorrow = () => {
    return async (dispatch) => {

    }
}

const libroBorrow = (id, user_id) => ({
    type: types.libroBorrow,
    payload: {
        id: id,
        user_id: user_id
    }
});

export const libroStartGetBack = () => {
    return async (dispatch) => {

    }
}

const libroGetBack = (id) => ({
    type: types.libroGetBack,
    payload: id
});


