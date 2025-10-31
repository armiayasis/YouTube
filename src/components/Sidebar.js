import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { setWatchPageFalse, setWatchPageTrue } from '../utils/AppSlice';
import { useEffect } from 'react';
import { toggleMenu } from '../utils/AppSlice';
const Sidebar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  const watchPage = useSelector(state => state.app.watchPage)
  const dispatch = useDispatch(); 
  const location = useLocation();
  
  
  useEffect(() => {
    
    if (isMenuOpen && location.pathname.includes('watch')) {
      dispatch(setWatchPageTrue())
      document.documentElement.style.overflow =  'hidden';
      document.body.style.overflow = 'hidden';
    }
  
    return () => {
      dispatch(setWatchPageFalse())
      
    }
  })
  
  function handleMenuClick() {
    dispatch(toggleMenu());
  }

  // absolute left-0 bg-white h-full
  if(!isMenuOpen) return true;

  return (
    <>
        <div className={`p-6 fixed left-0 bg-gradient-to-b from-purple-50 to-pink-50 h-[100vh] shadow-2xl w-64 backdrop-blur-sm border-r border-purple-200 ${ watchPage ? 'absolute z-50 left-0 h-full' : '' }`}>
      <ul className='flex flex-col gap-3 text-lg'>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">  
          <a href='/' className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </a> 
        </li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Demo</li> 
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Shorts</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Videos</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Live</li>
      </ul>
      <h1 className="text-xl font-bold pt-6 pb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscriptions</h1>
      <ul className='flex flex-col gap-3 text-lg'>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Music</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Sports</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Gaming</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Movies</li>
      </ul>
      <h1 className="text-xl font-bold pt-6 pb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Watch Later</h1>
      <ul className='flex flex-col gap-3 text-lg'>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Music</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Sports</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Gaming</li>
        <li className="hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 p-3 rounded-xl transition-all duration-200 cursor-pointer font-semibold text-gray-700">Movies</li>
       </ul>
      </div>
      {watchPage && (
        <div onClick={() => handleMenuClick() }   className=' w-full h-full z-0 absolute bg-black opacity-50'>

        </div>
      )}
    </>
    
  )
}

export default Sidebar
