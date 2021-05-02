import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const libroStartLoadList = () => {

    const url = `${baseUrl}listado`;

    console.log(url);

    return async (dispatch) => {

        try {

            const response = await axios.get(url);
console.log(response.data);
            dispatch(libroListLoaded(response.data));

        } catch (error) {
            console.log(error);
        }
    }
};

const libroListLoaded = (libros) => ({
    type: types.libroListLoaded,
    payload: libros
})