import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { libroStartLoadList } from '../actions/libro';

export const BookList = () => {

    const dispatch = useDispatch();

    const libroLoaded = useSelector(state => state.libro.loaded);

    if (!libroLoaded) {
        dispatch(libroStartLoadList())
    }

    return (
        <div>
            booklist here
        </div>
    )
}
