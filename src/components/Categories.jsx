import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiSetActivePage } from '../actions/ui';

export const Categories = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(uiSetActivePage("categories"))

    }, [dispatch])

    return (
        <div>
            categories here
        </div>
    )
}
