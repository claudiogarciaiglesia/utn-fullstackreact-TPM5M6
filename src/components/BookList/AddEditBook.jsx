import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { libroStartEdit } from '../../actions/libro';
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
        dispatch(libroStartEdit(activeBook.id, descripcion));
        dispatch(uiShowAddEditBook(false));
    }

    return (
        <div>
            <form id="add-modify-book-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre </label>
                    <input disabled={!!activeBook ? true : false} type="text" name="nombre" value={nombre} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label>Descripcion </label>
                    <textarea style={{ width: 500, height: 100, resize: 'none' }} form="add-modify-book-form" name="descripcion" value={descripcion} onChange={handleInputChange}></textarea>
                </div>
                <div>
                    <label>Categoria </label>
                    <input disabled={!!activeBook ? true : false} type="number" name="categoria_id" value={categoria_id} onChange={handleInputChange}></input>
                </div>
                <button type="submit">Aceptar</button>
            </form>

            {/* <FormFields
                    fields={formField}
                    handleInputChange={handleInputChange}
                    submit={handleSubmit}
                /> */}
        </div>
    )
}
