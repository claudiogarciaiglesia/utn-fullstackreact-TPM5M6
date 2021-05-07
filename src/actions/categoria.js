import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const categoriaStartLoadList = () => {

    const url = `${baseUrl}categoria`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(categoriaListLoaded(response.data));
        } catch (error) {
            console.log(error);
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
            const response = await axios.delete(url);
            console.log(response);
            dispatch(categoriaDelete(id));
        } catch (error) {
            console.log(error);
        }
    }
}

const categoriaDelete = (id) => ({
    type: types.categoriaDelete,
    payload: {
        id: id,
    }
});

export const categoriaStartEdit = (id, descripcion) => {

    const url = `${baseUrl}categoria/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url, { descripcion: descripcion });
            console.log(response);
            dispatch(categoriaEdit(id, descripcion));
        } catch (error) {
            console.log(error);
        }
    }
}

const categoriaEdit = (id, descripcion) => ({
    type: types.categoriaEdit,
    payload: {
        id: id,
        descripcion: descripcion
    }
});


export const categoriaSetActive = (id) => ({
    type: types.categoriaSetActive,
    payload: {
        id: id
    }
})
