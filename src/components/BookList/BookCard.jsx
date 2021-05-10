import React from 'react';
import { useDispatch } from 'react-redux';
import { libroSetActive, libroStartDelete, libroStartGetBack } from '../../actions/libro';
import { uiShowAddEditBook, uiShowBorrowBook } from '../../actions/ui';
import "./BookCard.css";


export const BookCard = ({ nombre, descripcion, categoria, alias, id, persona_id, categoria_id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(libroStartDelete(id));
        dispatch(libroSetActive(null));
    }

    const handleBorrow = () => {
        // Esto se debe completar con un MODAL para seleccionar a la persona
        dispatch(libroSetActive(id));
        // dispatch(libroStartBorrow(id, 1, 'NMANSILLA'));
        dispatch(uiShowBorrowBook(true))
    }

    const handleGetBack = () => {
        dispatch(libroStartGetBack(id))
    }

    const handleModify = () => {
        dispatch(libroSetActive(id));
        dispatch(uiShowAddEditBook(true))
    }

    return (
        <div>
            <div className="containerImg row_devuelto">
                <div className="ct">
                    <div className="ctxt">
                        <h2 className="titles">{nombre.slice(0, 55) + '...'}</h2>
                        <p className="description">
                            {descripcion.slice(0, 160) + '...'}
                        </p>
                        <p className="alias">
                            {!!alias && 'Prestado a'} {alias}
                        </p>
                    </div>
                    <div className="cb">
                        <div className="buttons editar">
                            <p className="text_buttons" onClick={handleDelete}>Borrar</p>
                        </div>
                        <div className="buttons eliminar" onClick={handleModify}>
                            <p className="text_buttons">Modificar</p>
                        </div>
                        {!persona_id
                            ? <div className="buttons devuelto" onClick={handleBorrow}>
                                <p className="text_buttons">Prestar</p>
                            </div>
                            : <div className="buttons devuelto" onClick={handleGetBack}>
                                <p className="text_buttons">Devolver</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="borders"></div>
            </div>
        </div>
    )
}