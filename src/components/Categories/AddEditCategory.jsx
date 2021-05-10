import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { categoriaStartAdd, categoriaStartEdit } from '../../actions/categoria';
import { uiShowAddEditCategory } from '../../actions/ui';
import { useForm } from '../../hooks/useForm/useForm';

const initFormValues = {
    nombre: '',
    descripcion: '',
    categoria_id: 1,
}

export const AddEditCategory = () => {

    const activeCategory = useSelector(state => state.categoria.activeCategory);

    const dispatch = useDispatch();

    const [{ nombre }, setFormField, handleInputChange] = useForm(initFormValues);

    useEffect(() => {

        if (activeCategory) {
            setFormField({
                nombre: activeCategory.nombre,
            });
        } else {
            setFormField(initFormValues)
        }
    }, [activeCategory, setFormField])

    const handleSubmit = (e) => {
        e.preventDefault();
        activeCategory
            ? dispatch(categoriaStartEdit(activeCategory.id, nombre.toUpperCase()))
            : dispatch(categoriaStartAdd(nombre.toUpperCase()))
        dispatch(uiShowAddEditCategory(false));
    }

    const handleCancel = () => {
        dispatch(uiShowAddEditCategory(false));
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
                        <input type="text" className="form-control" name="nombre" value={nombre} onChange={handleInputChange}></input>
                    </div>

                    <button type="submit" className="btn btn-success">Aceptar</button>
                    <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}
