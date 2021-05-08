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

export const personaStartEdit = (id, nombre, apellido, alias, email) => {

    const url = `${baseUrl}persona/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.put(url, {
                nombre: nombre,
                apellido: apellido,
                alias: alias,
                email: email
            });
            console.log(response);
            dispatch(personaEdit(id, nombre, apellido, alias, email));
        } catch (error) {
            console.log(error);
        }
    }
}

const personaEdit = (id, nombre, apellido, alias, email) => ({
    type: types.personaEdit,
    payload: {
        id: id,
        nombre: nombre,
        apellido: apellido,
        alias: alias,
        email: email
    }
});

export const personaStartAdd = (nombre, apellido, alias, email) => {
    const url = `${baseUrl}persona`;

    return async (dispatch) => {
        try {
            const response = await axios.post(url, {
                nombre: nombre,
                apellido: apellido,
                alias: alias,
                email: email

            });
            console.log(response);
            dispatch(personaAdd(response.data.id, nombre, apellido, alias, email));
        } catch (error) {
            console.log(error);
        }
    }
}

const personaAdd = (id, nombre, apellido, alias, email) => ({
    type: types.personaAdd,
    payload: {
        id: id,
        nombre: nombre,
        apellido: apellido,
        alias: alias,
        email: email
    }
});


export const personaSetActive = (id) => ({
    type: types.personaSetActive,
    payload: {
        id: id
    }
})
