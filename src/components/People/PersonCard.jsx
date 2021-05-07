import React from 'react';
import { useDispatch } from 'react-redux';
import { personaSetActive, personaStartDelete } from '../../actions/persona';

// import { uiShowAddEditBook } from '../../actions/ui';

export const PersonCard = ({ nombre, apellido, alias, email, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(personaStartDelete(id));
        dispatch(personaSetActive(null));
    }

    const handleModify = () => {
        dispatch(personaSetActive(id));
        // dispatch(uiShowAddEditBook(true))
    }

    return (
        <div className="personacard">
            <span className="personacard-item">Nombre: {nombre}</span>
            <span className="personacard-item">Apellido: {apellido}</span>
            <span className="personacard-item">Alias: {alias}</span>
            <span className="personacard-item">Email: {email}</span>

            <div>
                <button className="btn btn-danger personacard-button" onClick={handleDelete}>Borrar</button>
                <button className="btn btn-secondary personacard-button" onClick={handleModify}>Modificar</button>
            </div>
            <hr />
        </div>
    )
}
