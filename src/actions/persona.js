import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const personaStartLoadList = () => {

    const url = `${baseUrl}persona`;

    return async (dispatch) => {

        try {
            const response = await axios.get(url);
            dispatch(personaListLoaded(response.data));
        } catch (error) {
            console.log(error);
        }
    }
};

const personaListLoaded = (personas) => ({
    type: types.personaListLoaded,
    payload: personas
});

export const personaStartDelete = (id) => {

    const url = `${baseUrl}persona/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.delete(url);
            console.log(response);
            dispatch(personaDelete(id));
        } catch (error) {
            console.log(error);
        }
    }
}

const personaDelete = (id) => ({
    type: types.personaDelete,
    payload: {
        id: id,
    }
});

export const personaStartEdit = (id, descripcion) => {

    const url = `${baseUrl}persona/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url, { descripcion: descripcion });
            console.log(response);
            dispatch(personaEdit(id, descripcion));
        } catch (error) {
            console.log(error);
        }
    }
}

const personaEdit = (id, descripcion) => ({
    type: types.personaEdit,
    payload: {
        id: id,
        descripcion: descripcion
    }
});


export const personaSetActive = (id) => ({
    type: types.personaSetActive,
    payload: {
        id: id
    }
})
