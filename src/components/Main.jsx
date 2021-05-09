import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriaStartLoadList } from '../actions/categoria';
import { libroStartLoadList } from '../actions/libro';
import { personaStartLoadList } from '../actions/persona';
import { AddNewFab } from './AddNewFab';
import { BookList } from './BookList/BookList';
import { Categories } from './Categories/Categories';
import { People } from './People/People';

export const Main = () => {

    const dispatch = useDispatch();
    const activePage = useSelector(state => state.ui.activePage);


    useEffect(() => {

        dispatch(libroStartLoadList());
        dispatch(categoriaStartLoadList());
        dispatch(personaStartLoadList());

    }, [dispatch])


    return (
        <div>
            {activePage === "booklist" && <BookList />}
            {activePage === "categories" && <Categories />}
            {activePage === "people" && <People />}
            {!!activePage && <AddNewFab />}
        </div>
    )
}

