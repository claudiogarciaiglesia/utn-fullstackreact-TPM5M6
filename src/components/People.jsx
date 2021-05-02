import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiSetActivePage } from '../actions/ui';

export const People = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(uiSetActivePage("people"))

    }, [dispatch])

    return (
        <div>
            people here
        </div>
    )
}
