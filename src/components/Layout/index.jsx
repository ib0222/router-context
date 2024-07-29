import React from 'react'
import Header from '../Header/index'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout