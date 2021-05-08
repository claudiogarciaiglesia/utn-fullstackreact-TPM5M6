import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personaStartLoadList } from '../../actions/persona';
import { AddEditPerson } from './AddEditPerson';
import { PersonCard } from './PersonCard';

export const People = () => {

    const dispatch = useDispatch();
    const showAddEditPerson = useSelector(state => state.ui.showAddEditPerson);

    const persona = useSelector(state => state.persona.list);

    useEffect(() => {

        dispatch(personaStartLoadList())

    }, [dispatch])

    return (
        <div>
            {persona.map(persona => {
                return (
                    <PersonCard
                        key={persona.id}
                        {...persona}
                    />
                )
            })}
            {showAddEditPerson && <AddEditPerson />}
        </div>
    )
}
