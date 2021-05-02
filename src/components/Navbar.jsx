import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { uiSetActivePage } from '../actions/ui';
import { NavListItem } from './NavListItem';

export const Navbar = () => {

    const dispatch = useDispatch();

    const activePage = useSelector(state => state.ui.activePage);

    const handleClick = (value) => {
        dispatch(uiSetActivePage(value))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand unselectable">My books</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavListItem
                                    active={activePage === "booklist" && true}
                                    text={"Book List"}
                                    onClick={() => {
                                        handleClick("booklist")
                                    }}
                                />
                            </li>
                            <li className="nav-item">
                                <NavListItem
                                    active={activePage === "categories" && true}
                                    text={"Categories"}
                                    onClick={() => {
                                        handleClick("categories")
                                    }} />
                            </li>
                            <li className="nav-item">
                                <NavListItem
                                    active={activePage === "people" && true}
                                    text={"People"}
                                    onClick={() => {
                                        handleClick("people")
                                    }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
