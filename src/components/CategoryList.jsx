import React from 'react'
import { BACKEND_URL } from '../services/config';
import useFetch from '../hooks/useFetch';

export default function CategoryList({ onCategorySelect }) {
    let { data: categories, loading, error } = useFetch(`${BACKEND_URL}/categories`);

    return (
        <div>
            <h1 className='text-danger mt-3'>Categories</h1>
            <div className='overflow-auto d-flex gap-3 py-2'>
                {loading && <p>Loading...</p>}
                {error && <p className='text-danger'>Error: {error}</p>}
                {categories && categories.data.map((category) => (
                    <button className='category-item btn btn-danger text-white text-nowrap' key={category.id} onClick={() => onCategorySelect(category.id)}>{category.mm_name}</button>
                ))}
            </div>
        </div>
    )
}
