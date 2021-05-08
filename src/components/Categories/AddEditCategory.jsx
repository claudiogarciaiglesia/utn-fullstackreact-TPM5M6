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
                                    <input type="text" name="nombre" value={nombre} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* </div> */}
                    <button type="submit">Aceptar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}
