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
        <>
            <div className="containerImg row_devuelto">
                <div className="ct">
                    <div className="ctxt">
                        <h2 className="titles">{`${nombre} ${apellido}`}</h2>
                        <p className="description">
                            {alias}
                        </p>
                        <p className="alias">
                            {email}
                        </p>
                    </div>
                    <div className="cb">
                        <div className="buttons editar">
                            <p className="text_buttons" onClick={handleDelete}>Borrar</p>
                        </div>
                        <div className="buttons eliminar" onClick={handleModify}>
                            <p className="text_buttons">Modificar</p>
                        </div>
                        <div className="buttons devuelto" onClick={handleFilter}>
                        <p className="text_buttons">Filtrar Libros</p>
                    </div>
                    </div>
                </div>
                <div className="borders"></div>
            </div>
        </>
    )
}