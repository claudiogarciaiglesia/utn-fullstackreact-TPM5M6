//fab: floating action button

import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { libroSetActive } from '../actions/libro';
import { uiShowAddEditBook } from '../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();
    const activePage = useSelector(state => state.ui.activePage)

    const handleOnClick = () => {
        switch (activePage) {
            case "booklist":
                dispatch(libroSetActive(null));
                dispatch(uiShowAddEditBook(true));

                break;

            default:
                break;
        }

    }

    return (
        <button
            className="btn btn-dark fab"
            onClick={handleOnClick}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}