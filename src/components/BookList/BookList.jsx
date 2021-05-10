import React from 'react';
import { useSelector } from 'react-redux';
import { AddEditBook } from './AddEditBook';
import { BookCard } from './BookCard';
import { BorrowBook } from './BorrowBook';
import { RemoveFilterFab } from './RemoveFilterFab';

export const BookList = () => {

    const showAddEditBook = useSelector(state => state.ui.showAddEditBook);
    const showBorrowBook = useSelector(state => state.ui.showBorrowBook)
    const filterByCategory = useSelector(state => state.libro.filterByCategory);
    const filterByPerson = useSelector(state => state.libro.filterByPerson);

    const libros = useSelector(state => state.libro.list);



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
            {showBorrowBook && <BorrowBook />}
            {(filterByCategory || filterByPerson) && <RemoveFilterFab />}
        </div>
    )
}

