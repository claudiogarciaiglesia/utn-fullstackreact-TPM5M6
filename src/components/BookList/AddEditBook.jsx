import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { libroStartAdd, libroStartEdit } from '../../actions/libro';
import { uiShowAddEditBook } from '../../actions/ui';
import { useForm } from '../../hooks/useForm/useForm';

const initFormValues = {
    nombre: '',
    descripcion: '',
    categoria_id: 1,
}

export const AddEditBook = () => {

    const activeBook = useSelector(state => state.libro.activeBook);

    const dispatch = useDispatch();

    const [{ nombre, descripcion, categoria_id }, setFormField, handleInputChange] = useForm(initFormValues);

    useEffect(() => {

        if (activeBook) {
            setFormField({
                nombre: activeBook.nombre,
                descripcion: activeBook.descripcion,
                categoria_id: activeBook.categoria_id,
            });
        } else {
            setFormField(initFormValues)
        }
    }, [activeBook, setFormField])

    const handleSubmit = (e) => {
        e.preventDefault();
        activeBook
            ? dispatch(libroStartEdit(activeBook.id, descripcion.toUpperCase()))
            : dispatch(libroStartAdd(nombre.toUpperCase(), descripcion.toUpperCase(), categoria_id))
        dispatch(uiShowAddEditBook(false));
    }

    const handleCancel = () => {
        dispatch(uiShowAddEditBook(false));
    }

    return (
        <div className="floating-window">
            <div className="floating-window-content">
                <form id="add-modify-form" onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Nombre </label>
                                </td>
                                <td>
                                    <input disabled={!!activeBook ? true : false} type="text" name="nombre" value={nombre} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Descripcion </label>
                                </td>
                                <td>
                                    <textarea style={{ width: 500, height: 100, resize: 'none' }} form="add-modify-form" name="descripcion" value={descripcion} onChange={handleInputChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Categoria </label>
                                </td>
                                <td>
                                    <input disabled={!!activeBook ? true : false} type="number" name="categoria_id" value={categoria_id} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit">Aceptar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}
