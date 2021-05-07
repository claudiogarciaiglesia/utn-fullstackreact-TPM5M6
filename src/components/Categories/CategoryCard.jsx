import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriaSetActive, categoriaStartDelete } from '../../actions/categoria';
// import { uiShowAddEditBook } from '../../actions/ui';

export const CategoryCard = ({ nombre, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(categoriaStartDelete(id));
        dispatch(categoriaSetActive(null));
    }

    const handleModify = () => {
        dispatch(categoriaSetActive(id));
        // dispatch(uiShowAddEditBook(true))
    }

    return (
        <div className="categorycard">
            <span className="cateogorycard-item">{nombre}</span>
            <div>
                <button className="btn btn-danger categorycard-button" onClick={handleDelete}>Borrar</button>
                <button className="btn btn-secondary categorycard-button" onClick={handleModify}>Modificar</button>
            </div>
            <hr />
        </div>
    )
}
