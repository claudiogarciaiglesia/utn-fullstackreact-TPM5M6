import React from 'react'
// import { useSelector } from 'react-redux'
import { NavListItem } from './NavListItem';

export const Navbar = () => {

    // const activePage = useSelector(state => state.ui.activePage);
    console.log("navbar loading");

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">My books</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavListItem
                                    // active={activePage === "booklist" && true}
                                    href={"booklist"}
                                    name={"Book List"}
                                />
                                {/* <a className={`nav-link ${activePage === "booklist" && "active"}`} aria-current="page" href="booklist">Book List</a> */}
                            </li>
                            <li className="nav-item">
                                <NavListItem
                                    // active={activePage === "categories" && true}
                                    href={"categories"}
                                    name={"Categories"}
                                />
                                {/* <a className={`nav-link ${activePage === "categories" && "active"}`} href="categories">Categories</a> */}
                            </li>
                            <li className="nav-item">
                                <NavListItem
                                    // active={activePage === "people" && true}
                                    href={"people"}
                                    name={"People"}
                                />
                                {/* <a className={`nav-link ${activePage === "people" && "active"}`} href="people">People</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
