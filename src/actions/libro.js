import axios from "axios";
import { types } from "../types/types";
import Swal from 'sweetalert2';

const baseUrl = process.env.REACT_APP_API_URL;

export const libroStartLoadList = () => {

    const url = `${baseUrl}listado`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(libroListLoaded(response.data));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
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
            /* eslint-disable */
            const response = await axios.delete(url);
            /* eslint-enable */
            dispatch(libroDelete(id));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
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
            /* eslint-disable */
            const response = await axios.put(url, { descripcion: descripcion });
             /* eslint-enable */
            dispatch(libroEdit(id, descripcion));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
}

export const libroStartAdd = (nombre, descripcion, categoria) => {
    const url = `${baseUrl}libro`;

    return async (dispatch) => {
        try {
            const response = await axios.post(url, {
                nombre: nombre,
                descripcion: descripcion,
                categoria_id: parseInt(categoria.id)
            });
            dispatch(libroAdd(response.data.id, nombre, descripcion, categoria));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
}

const libroAdd = (id, nombre, descripcion, categoria) => ({
    type: types.libroAdd,
    payload: {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        categoria_id: categoria.id,
        categoria: categoria.nombre

    }
});


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
            /* eslint-disable */
            const response = await axios.put(url, { persona_id: persona_id });
            /* eslint-enable */
            dispatch(libroBorrow(id, persona_id, alias));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
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
            /* eslint-disable */
            const response = await axios.put(url);
            /* eslint-enable */
            dispatch(libroGetBack(id));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
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
});

export const libroFilterByCategory = (id) => ({
    type: types.libroFilterByCategory,
    payload: {
        id: id
    }
});

export const libroFilterByPerson = (id) => ({
    type: types.libroFilterByPerson,
    payload: {
        id: id
    }
});