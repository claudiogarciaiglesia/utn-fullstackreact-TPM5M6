import React from 'react';
import { useDispatch } from 'react-redux';
import { libroFilterByPerson } from '../../actions/libro';
import { personaSetActive, personaStartDelete } from '../../actions/persona';
import { uiSetActivePage, uiShowAddEditPerson } from '../../actions/ui';

// import { uiShowAddEditBook } from '../../actions/ui';

export const PersonCard = ({ nombre, apellido, alias, email, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(personaStartDelete(id));
        dispatch(personaSetActive(null));
    }

    const handleModify = () => {
        dispatch(personaSetActive(id));
        dispatch(uiShowAddEditPerson(true))
    }

    const handleFilter = () => {
        dispatch(libroFilterByPerson(id));
        dispatch(uiSetActivePage('booklist'));
    }

    return (
        <div className="personcard">
            <span className="personcard-item">Nombre: {nombre}</span>
            <span className="personcard-item">Apellido: {apellido}</span>
            <span className="personcard-item">Alias: {alias}</span>
            <span className="personcard-item">Email: {email}</span>

            <div>
                <button className="btn btn-danger personcard-button" onClick={handleDelete}>Borrar</button>
                <button className="btn btn-secondary personcard-button" onClick={handleModify}>Modificar</button>
                <button className="btn btn-secondary categorycard-button" onClick={handleFilter}>Ver libros</button>
            </div>
            <hr />
        </div>
    )
}
