import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { personaStartAdd, personaStartEdit } from '../../actions/persona';
import { uiShowAddEditPerson } from '../../actions/ui';
import { useForm } from '../../hooks/useForm/useForm';

const initFormValues = {
    nombre: '',
    apellido: '',
    alias: '',
    email: ''
}

export const AddEditPerson = () => {

    const activePerson = useSelector(state => state.persona.activePerson);

    const dispatch = useDispatch();

    const [{ nombre, apellido, alias, email }, setFormField, handleInputChange] = useForm(initFormValues);

    useEffect(() => {

        if (activePerson) {
            setFormField({
                nombre: activePerson.nombre,
                apellido: activePerson.apellido,
                alias: activePerson.alias,
                email: activePerson.email
            });
        } else {
            setFormField(initFormValues)
        }
    }, [activePerson, setFormField])

    const handleSubmit = (e) => {
        e.preventDefault();
        activePerson
            ? dispatch(personaStartEdit(activePerson.id, nombre, apellido, alias, email))
            : dispatch(personaStartAdd(nombre.toUpperCase(), apellido.toUpperCase(), alias.toUpperCase(), email.toUpperCase()))
        dispatch(uiShowAddEditPerson(false));
    }

    const handleCancel = () => {
        dispatch(uiShowAddEditPerson(false));
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
                            <tr>
                                <td>
                                    <label>Apellido </label>
                                </td>
                                <td>
                                    <input type="text" name="apellido" value={apellido} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Alias </label>
                                </td>
                                <td>
                                    <input type="text" name="alias" value={alias} onChange={handleInputChange}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email </label>
                                </td>
                                <td>
                                    <input disabled={!!activePerson ? true : false} type="text" name="email" value={email} onChange={handleInputChange}></input>
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
