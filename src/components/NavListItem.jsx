import React from 'react';
import { useSelector } from 'react-redux';

export const NavListItem = ({href, name}) => {

    const activePage = useSelector(state => state.ui.activePage);

    return (
        <div>
            <a className={`nav-link ${activePage === href && "active"}`} aria-current="page" href={href}>{name}</a>
        </div>
    )
}
