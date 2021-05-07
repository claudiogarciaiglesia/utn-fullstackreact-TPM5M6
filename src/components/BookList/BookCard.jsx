import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriaSetActive } from '../../actions/categoria';
import { libroSetActive, libroStartBorrow, libroStartDelete, libroStartGetBack } from '../../actions/libro';
import { uiShowAddEditBook } from '../../actions/ui';

export const BookCard = ({ nombre, descripcion, categoria, alias, id, persona_id, categoria_id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(libroStartDelete(id));
        dispatch(libroSetActive(null));
    }

    const handleBorrow = () => {
        // Esto se debe completar con un MODAL para seleccionar a la persona
        dispatch(libroStartBorrow(id, 1, 'NMANSILLA'));
    }

    const handleGetBack = () => {
        dispatch(libroStartGetBack(id))
    }

    const handleModify = () => {
        dispatch(libroSetActive(id));
        dispatch(uiShowAddEditBook(true))
    }

    return (
        <div className="bookcard">
            <span className="bookcard-item">Nombre: {nombre}</span>
            <span title={descripcion} className="bookcard-item">Descripcion: {descripcion.slice(0, 60) + '...'}</span>
            <span className="bookcard-item">Categoria: {categoria}</span>
            <span className="bookcard-item">Alias: {alias}</span>
            <button className="btn btn-danger bookcard-button" onClick={handleDelete}>Borrar</button>
            <button className="btn btn-secondary bookcard-button" onClick={handleModify}>Modificar</button>
            {!persona_id
                ? <button className="btn btn-secondary bookcard-button" onClick={handleBorrow}>Prestar</button>
                : <button className="btn btn-secondary bookcard-button" onClick={handleGetBack}>Devolver</button>
            }
            <hr />
        </div>
    )
}
