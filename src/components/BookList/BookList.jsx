import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { libroStartLoadList } from '../../actions/libro';
import { BookCard } from './BookCard';

export const BookList = () => {

    const dispatch = useDispatch();

    const dbUpdated = useSelector(state => state.libro.dbUpdated);
    const libros = useSelector(state => state.libro.list);

    useEffect(() => {

        if (dbUpdated) {
            dispatch(libroStartLoadList())
        }
    }, [dbUpdated, dispatch])

    return (
        <div>
            {libros.map(libro => {
                return (
                    <BookCard
                        key={libro.id}
                        {...libro}
                    />
                )
            })}
        </div>
    )
}
