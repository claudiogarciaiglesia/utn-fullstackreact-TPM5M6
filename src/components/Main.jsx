import React from 'react'
import { useSelector } from 'react-redux';
import { BookList } from './BookList/BookList';
import { Categories } from './Categories/Categories';
import  People  from './People/People';

export const Main = () => {

    const activePage = useSelector(state => state.ui.activePage);

    return (
        <div>
            {activePage === "booklist" && <BookList />}
            {activePage === "categories" && <Categories />}
            {activePage === "people" && <People />}
        </div>
    )
}

