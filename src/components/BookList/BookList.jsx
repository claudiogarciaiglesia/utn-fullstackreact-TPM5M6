import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { libroStartLoadList } from '../../actions/libro';
import { AddEditBook } from './AddEditBook';
import { BookCard } from './BookCard';

export const BookList = () => {

    const dispatch = useDispatch();
    const showAddEditBook = useSelector(state => state.ui.showAddEditBook);

    const libros = useSelector(state => state.libro.list);

    useEffect(() => {

        dispatch(libroStartLoadList())

    }, [dispatch])

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
            {showAddEditBook && <AddEditBook />}
        </div>
    )
}
