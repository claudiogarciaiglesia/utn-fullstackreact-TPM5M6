import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personaStartLoadList } from '../../actions/persona';
import { PersonCard } from './PersonCard';

export const People = () => {

    const dispatch = useDispatch();
    // const showAddEditCategory = useSelector(state => state.ui.showAddEditCategory);

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
            {/* {showAddEditCategory && <AddEditCategory />} */}
        </div>
    )
}
