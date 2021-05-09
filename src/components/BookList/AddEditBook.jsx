import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { libroStartAdd, libroStartEdit } from '../../actions/libro';
import { uiShowAddEditBook } from '../../actions/ui';
import { useForm } from '../../hooks/useForm/useForm';

const initFormValues = {
    nombre: '',
    descripcion: '',
    categoria: {
        value: '',
        label: '',
    }
}

export const AddEditBook = () => {


    const activeBook = useSelector(state => state.libro.activeBook);
    const listaCategorias = useSelector(state => state.categoria.list);

    const dispatch = useDispatch();

    const options = listaCategorias.map(categoria => (
        { label: categoria.nombre, value: JSON.stringify({ id: categoria.id, nombre: categoria.nombre }) }
    ));

    const [{ nombre, descripcion, categoria }, setFormField, handleInputChange] = useForm(initFormValues);

    console.log(categoria);
    useEffect(() => {

        if (activeBook) {

            setFormField({
                nombre: activeBook.nombre,
                descripcion: activeBook.descripcion,
                categoria: JSON.stringify({ id: activeBook.categoria_id, nombre: activeBook.categoria })

            });
        } else {
            setFormField(initFormValues)
        }
    }, [activeBook, setFormField])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.parse(categoria));
        activeBook
            ? dispatch(libroStartEdit(activeBook.id, descripcion.toUpperCase()))
            : dispatch(libroStartAdd(nombre.toUpperCase(), descripcion.toUpperCase(), JSON.parse(categoria)))
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
                                    <input required disabled={!!activeBook ? true : false} type="text" name="nombre" value={nombre} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Descripcion </label>
                                </td>
                                <td>
                                    <textarea required style={{ width: 500, height: 100, resize: 'none' }} form="add-modify-form" name="descripcion" value={descripcion} onChange={handleInputChange}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="seleccion-categorias">Categoria </label>
                                </td>
                                <td>
                                    <select required value={categoria} onChange={handleInputChange} disabled={!!activeBook ? true : false} id="seleccion-categorias" name="categoria">
                                        <option></option>
                                        {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="submit">Aceptar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </form>
            </div>
        </div >
    )
}
