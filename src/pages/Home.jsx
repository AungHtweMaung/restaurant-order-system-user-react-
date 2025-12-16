import React, { useState } from 'react'

import CategoryList from '../components/CategoryList.jsx';
import MenuList from '../components/MenuList.jsx';

export default function Home() {
  return (
    <div className='container '>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <CategoryList />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <MenuList />
        </div>
      </div>
    </div>
  )
}
