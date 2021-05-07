import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const libroStartLoadList = () => {

    const url = `${baseUrl}listado`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(libroListLoaded(response.data));
        } catch (error) {
            console.log(error);
        }
    }
};

const libroListLoaded = (libros) => ({
    type: types.libroListLoaded,
    payload: libros
});

export const libroStartDelete = (id) => {

    const url = `${baseUrl}libro/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.delete(url);
            console.log(response);
            dispatch(libroDelete(id));
        } catch (error) {
            console.log(error);
        }
    }
}

const libroDelete = (id) => ({
    type: types.libroDelete,
    payload: {
        id: id,
    }
});

export const libroStartEdit = (id, descripcion) => {

    const url = `${baseUrl}libro/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url, { descripcion: descripcion });
            console.log(response);
            dispatch(libroEdit(id, descripcion));
        } catch (error) {
            console.log(error);
        }
    }
}

const libroEdit = (id, descripcion) => ({
    type: types.libroEdit,
    payload: {
        id: id,
        descripcion: descripcion
    }
});

export const libroStartBorrow = (id, persona_id, alias) => {

    const url = `${baseUrl}libro/prestar/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url, { persona_id: persona_id });
            console.log(response);
            dispatch(libroBorrow(id, persona_id, alias));
        } catch (error) {
            console.log(error);
        }
    }
}

const libroBorrow = (id, persona_id, alias) => ({
    type: types.libroBorrow,
    payload: {
        id: id,
        persona_id: persona_id,
        alias: alias
    }
});

export const libroStartGetBack = (id) => {
    const url = `${baseUrl}libro/devolver/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url);
            console.log(response);
            dispatch(libroGetBack(id));
        } catch (error) {
            console.log(error);
        }
    }
}

const libroGetBack = (id) => ({
    type: types.libroGetBack,
    payload: {
        id: id
    }
});

export const libroSetActive = (id) => ({
    type: types.libroSetActive,
    payload: {
        id: id
    }
})
