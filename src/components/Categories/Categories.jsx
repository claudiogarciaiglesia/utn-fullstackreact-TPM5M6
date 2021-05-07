import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriaStartLoadList } from '../../actions/categoria';
import { CategoryCard } from './CategoryCard';

export const Categories = () => {

    const dispatch = useDispatch();
    // const showAddEditCategory = useSelector(state => state.ui.showAddEditCategory);

    const categorias = useSelector(state => state.categoria.list);

    useEffect(() => {

        dispatch(categoriaStartLoadList())

    }, [dispatch])

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
            {/* {showAddEditCategory && <AddEditCategory />} */}
        </div>
    )
}
