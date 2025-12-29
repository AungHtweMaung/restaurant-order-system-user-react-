
import React, { useState, useEffect } from 'react'
import CategoryList from '../components/CategoryList';
import MenuList from '../components/MenuList';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);




  return (
    <>
        <CategoryList onCategorySelect={setSelectedCategory} />
        <MenuList selectedCategory={selectedCategory} />
    </>
  )
}
