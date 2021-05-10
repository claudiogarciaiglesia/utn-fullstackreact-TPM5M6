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
        activeBook
            ? dispatch(libroStartEdit(activeBook.id, descripcion.toUpperCase()))
            : dispatch(libroStartAdd(nombre.toUpperCase(), descripcion.toUpperCase(), JSON.parse(categoria)))
        dispatch(uiShowAddEditBook(false));
    }

    const handleCancel = (e) => {
        dispatch(uiShowAddEditBook(false));
    }

    const handleClose = (e) => {
        if (e.target.className === 'floating-window') {
            handleCancel();
        }
    }

    return (

        <div onMouseDown={handleClose} className="floating-window">
            <div className="floating-window-content">
                <form id="add-modify-form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Nombre</label>
                        <input required disabled={!!activeBook ? true : false} type="text" className="form-control" name="nombre" value={nombre} onChange={handleInputChange}></input>
                    </div>

                    <div className="form-group mb-3">
                        <label>Descripcion</label>
                        <textarea required style={{ width: 500, height: 100, resize: 'none' }} className="form-control" name="descripcion" value={descripcion} onChange={handleInputChange}></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="seleccion-categorias">Categoria </label>
                        <select size="1" className="form-select" required value={categoria} onChange={handleInputChange} disabled={!!activeBook ? true : false} id="seleccion-categorias" name="categoria">
                            <option></option>
                            {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success">Aceptar</button>
                        <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </form>
            </div>
        </div >
    )
}
