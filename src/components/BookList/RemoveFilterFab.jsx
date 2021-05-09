//fab: floating action button

import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { libroFilterByCategory, libroFilterByPerson, libroStartLoadList } from '../../actions/libro';

export const RemoveFilterFab = () => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(libroFilterByCategory(null));
        dispatch(libroFilterByPerson(null));
        dispatch(libroStartLoadList());
    }

    return (
        <button
            className="btn btn-danger fab-remove-filter"
            onClick={handleOnClick}
        >
            <i className="fas fa-times-circle"></i> Remove Filter
        </button>
    )
}