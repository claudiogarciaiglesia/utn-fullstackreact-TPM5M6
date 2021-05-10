import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriaSetActive, categoriaStartDelete } from '../../actions/categoria';
import { libroFilterByCategory } from '../../actions/libro';
import { uiSetActivePage, uiShowAddEditCategory } from '../../actions/ui';

export const CategoryCard = ({ nombre, id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(categoriaStartDelete(id));
        dispatch(categoriaSetActive(null));
    }

    const handleModify = () => {
        dispatch(categoriaSetActive(id));
        dispatch(uiShowAddEditCategory(true));
    }

    const handleFilter = () => {
        dispatch(libroFilterByCategory(id));
        dispatch(uiSetActivePage('booklist'));
    }

    return (
        <>
        <div className="containerImg row_devuelto">
            <div className="ct">
                <div className="ctxt">
                    <h2 className="titles">{nombre}</h2>
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