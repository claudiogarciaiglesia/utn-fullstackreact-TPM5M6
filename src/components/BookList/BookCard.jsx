import React from 'react';
import { useDispatch } from 'react-redux';
import { libroStartDelete } from '../../actions/libro';

export const BookCard = ({ nombre, descripcion, categoria, alias, id, persona_id, categoria_id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(libroStartDelete(id));
    }

    return (
        <div className="bookcard">
            <span className="bookcard-item">Nombre: {nombre}</span>
            <span title={descripcion} className="bookcard-item">Descripcion: {descripcion.slice(0, 60) + '...'}</span>
            <span className="bookcard-item">Categoria: {categoria}</span>
            <span className="bookcard-item">Alias: {alias}</span>
            <button className="btn btn-danger bookcard-button" onClick={handleDelete}>Borrar</button>
            <button className="btn btn-secondary bookcard-button">Modificar</button>
            <button className="btn btn-secondary bookcard-button">Prestar</button>
            <button className="btn btn-secondary bookcard-button">Devolver</button>
            <hr />
        </div>
    )
}
