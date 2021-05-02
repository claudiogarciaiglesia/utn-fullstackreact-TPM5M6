import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiSetActivePage } from '../actions/ui';


export const BookList = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(uiSetActivePage("booklist"))

    }, [dispatch])

    return (
        <div>
            booklist here
        </div>
    )
}
