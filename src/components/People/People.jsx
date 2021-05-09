import React from 'react';
import { useSelector } from 'react-redux';
import { AddEditPerson } from './AddEditPerson';
import { PersonCard } from './PersonCard';

export const People = () => {

    const showAddEditPerson = useSelector(state => state.ui.showAddEditPerson);

    const persona = useSelector(state => state.persona.list);

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
