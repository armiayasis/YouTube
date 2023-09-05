import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
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
        <div className={`p-5 fixed left-0  bg-white h-[100vh] shadow-lg w-60 ${ watchPage ? 'absolute z-50 left-0 bg-white h-full' : '' }`}>
      <ul className='flex flex-col gap-2 text-xl'>
        <li>  
        <a href='/'>Home</a> 
        </li>
        <li>Demo</li> 
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="text-xl font-bold pt-5">Subscriptions</h1>
      <ul className='flex flex-col gap-2 text-xl'>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className=" text-xl font-bold pt-5">Watch Later</h1>
      <ul className='flex flex-col gap-2 text-xl'>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
       </ul>
      </div>
      {watchPage && (
        <div onClick={() => handleMenuClick() }   className=' w-full h-full z-0 absolute bg-black opacity-40'>

        </div>
      )}
    </>
    
  )
}

export default Sidebar
