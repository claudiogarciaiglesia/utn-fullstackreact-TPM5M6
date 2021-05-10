import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { uiSetActivePage } from '../../actions/ui';
import { NavListItem } from './NavListItem';

export const Navbar = () => {

    const dispatch = useDispatch();

    const activePage = useSelector(state => state.ui.activePage);

    const handleClick = (value) => {
        dispatch(uiSetActivePage(value))
    }

    return (
        <div className="sticky">
            <nav className="navbar navbar-dark bg-dark p-3">
                <div className="col" >
                    <button className="navbar-toggler btn-outline-ligh" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon outline-light"></span>
                    </button>
                    {/* <span className="navbar-brand h1 unselectable mx-3">My books</span> */}
                    <img className="logo" src="logo6.png" alt='logo'></img>
                    {/* NO PUDE METER EL BUSCADOR NO SE PORQUE SE ME PASABA PARA ABAJO/}
                    {/* <div className="row">
                        <input class="form-control bgColorB" type="search" placeholder="Search" aria-label="Search"></input>
                    </div>
                        <button className="btn btn-outline-light" type="submit">Search</button> */}

                </div>

                <div className="collapse navbar-collapse mt-3" id="navbarNav">
                    <ul className="nav navbar-nav">
                        <li className="pt-2">
                            <NavListItem
                                active={activePage === "booklist" && true}
                                text={"Book List"}
                                onClick={() => {
                                    handleClick("booklist")
                                }}
                            />
                        </li>
                        <li className="nav-item pt-2">
                            <NavListItem
                                active={activePage === "categories" && true}
                                text={"Categories"}
                                onClick={() => {
                                    handleClick("categories")
                                }} />
                        </li>
                        <li className="nav-item pt-2">
                            <NavListItem
                                active={activePage === "people" && true}
                                text={"People"}
                                onClick={() => {
                                    handleClick("people")
                                }} />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}