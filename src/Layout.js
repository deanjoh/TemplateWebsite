import React from 'react'
import Nav from './Nav.js'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
        <Nav />
        <Outlet />
    </div>
  )
}

export default Layout