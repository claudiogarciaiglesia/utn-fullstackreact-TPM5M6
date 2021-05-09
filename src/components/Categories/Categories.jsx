import React from 'react';
import { useSelector } from 'react-redux';
import { AddEditCategory } from './AddEditCategory';
import { CategoryCard } from './CategoryCard';

export const Categories = () => {

    const showAddEditCategory = useSelector(state => state.ui.showAddEditCategory);

    const categorias = useSelector(state => state.categoria.list);

    return (
        <div>
            {categorias.map(categoria => {
                return (
                    <CategoryCard
                        key={categoria.id}
                        {...categoria}
                    />
                )
            })}
            {showAddEditCategory && <AddEditCategory />}
        </div>
    )
}
