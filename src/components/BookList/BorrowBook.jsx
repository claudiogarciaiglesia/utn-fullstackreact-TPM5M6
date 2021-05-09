import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { libroStartBorrow } from '../../actions/libro';
import { uiShowBorrowBook } from '../../actions/ui';
import { useForm } from '../../hooks/useForm/useForm';

const initFormValues = {
    value: '',
    label: '',
}

export const BorrowBook = () => {


    const activeBook = useSelector(state => state.libro.activeBook);
    const listaPersonas = useSelector(state => state.persona.list);

    const dispatch = useDispatch();

    const options = listaPersonas.map(p => (
        { label: `${p.alias} (${p.nombre} ${p.apellido})`, value: JSON.stringify({ id: p.id, alias: p.alias }) }
    ));

    const [{ persona }, , handleInputChange] = useForm(initFormValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!persona) {
            const personaSeleccionada = JSON.parse(persona);
            console.log(personaSeleccionada);
            dispatch(libroStartBorrow(activeBook.id, personaSeleccionada.id, personaSeleccionada.alias));
        }
        dispatch(uiShowBorrowBook(false));
    }


    const handleCancel = () => {
        dispatch(uiShowBorrowBook(false));
    }

    return (
        <div className="floating-window">
            <div className="floating-window-content">
                <form id="add-modify-form" onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="seleccion-persona">Personas </label>
                                </td>
                                <td>
                                    <select required value={persona} onChange={handleInputChange} id="seleccion-persona" name="persona">
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
