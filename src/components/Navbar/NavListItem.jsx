import React from 'react';

export const NavListItem = ({ active, text, onClick }) => {

    return (
        <div>
            <span style={{ 'cursor': 'pointer' }} className={`nav-link ${active && "active"} unselectable`} onClick={onClick} aria-current="page">{text}</span>
        </div>
    )
}
