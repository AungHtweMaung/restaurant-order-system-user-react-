
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export default function Layout() {
  return (
    <div className='container '>
        <div className="row">
            <div className="col-12 p-0">
                <Navbar />
            </div>
        </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div>
            <Outlet />
          </div>
          {/* <CategoryList />
          <MenuList /> */}
        </div>
      </div>
    </div>
  )
}