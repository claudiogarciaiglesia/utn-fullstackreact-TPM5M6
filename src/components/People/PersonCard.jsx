import React from 'react';
import { useDispatch } from 'react-redux';
import { personaSetActive, personaStartDelete } from '../../actions/persona';
import { uiShowAddEditPerson } from '../../actions/ui';

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

    return (
        <div className="personcard">
            <span className="personcard-item">Nombre: {nombre}</span>
            <span className="personcard-item">Apellido: {apellido}</span>
            <span className="personcard-item">Alias: {alias}</span>
            <span className="personcard-item">Email: {email}</span>

            <div>
                <button className="btn btn-danger personcard-button" onClick={handleDelete}>Borrar</button>
                <button className="btn btn-secondary personcard-button" onClick={handleModify}>Modificar</button>
            </div>
            <hr />
        </div>
    )
}
