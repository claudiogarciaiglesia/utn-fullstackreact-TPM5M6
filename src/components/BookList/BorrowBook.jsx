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
            dispatch(libroStartBorrow(activeBook.id, personaSeleccionada.id, personaSeleccionada.alias));
        }
        dispatch(uiShowBorrowBook(false));
    }


    const handleCancel = () => {
        dispatch(uiShowBorrowBook(false));
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
                <label htmlFor="seleccion-persona">Personas </label>
                        <select className="form-control" required value={persona} onChange={handleInputChange} id="seleccion-persona" name="persona">
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
