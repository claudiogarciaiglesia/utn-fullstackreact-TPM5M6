import axios from "axios";
import { types } from "../types/types";
import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_API_URL;

export const categoriaStartLoadList = () => {

    const url = `${baseUrl}categoria`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(categoriaListLoaded(response.data));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
};

const categoriaListLoaded = (categorias) => ({
    type: types.categoriaListLoaded,
    payload: categorias
});

export const categoriaStartDelete = (id) => {

    const url = `${baseUrl}categoria/${id}`;

    return async (dispatch) => {
        try {
            /* eslint-disable */
            const response = await axios.delete(url);
            /* eslint-enable */
            dispatch(categoriaDelete(id));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
}

const categoriaDelete = (id) => ({
    type: types.categoriaDelete,
    payload: {
        id: id,
    }
});

export const categoriaStartEdit = (id, nombre) => {

    const url = `${baseUrl}categoria/${id}`;

    return async (dispatch) => {
        try {
            /* eslint-disable */
            const response = await axios.put(url, { nombre: nombre });
            /* eslint-enable */
            dispatch(categoriaEdit(id, nombre));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
}

export const categoriaStartAdd = (nombre) => {
    const url = `${baseUrl}categoria`;

    return async (dispatch) => {
        try {
            /* eslint-disable */
            const response = await axios.post(url, { nombre: nombre });
            /* eslint-enable */
            dispatch(categoriaAdd(response.data.id, nombre));
        } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.mensaje, 'error')
        }
    }
}

const categoriaAdd = (id, nombre) => ({
    type: types.categoriaAdd,
    payload: {
        id: id,
        nombre: nombre,
    }
});

const categoriaEdit = (id, nombre) => ({
    type: types.categoriaEdit,
    payload: {
        id: id,
        nombre: nombre
    }
});


export const categoriaSetActive = (id) => ({
    type: types.categoriaSetActive,
    payload: {
        id: id
    }
})
