import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import Head from './Head'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Body = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  const location = useLocation();
  return (
    <>
      <Head/>
      <div className={`flex min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100
      ${isMenuOpen && !location.pathname.includes('watch')  ? "justify-center" : ("justify-center ml-0") }`}>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default Body
