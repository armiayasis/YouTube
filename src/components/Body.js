import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet, useLocation } from 'react-router-dom'
import Head from './Head'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Body = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  const location = useLocation();
  return (
    <>
      <Head/>
      <div className = {`flex   
      ${isMenuOpen && !location.pathname.includes('watch')  ? "justify-center" : ("justify-center ml-0") }`}>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Body
