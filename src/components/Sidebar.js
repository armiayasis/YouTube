import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="py-2 px-3 fixed left-0 bg-white h-[100vh] w-60 overflow-y-auto z-10">
      <ul className='flex flex-col text-sm'>
        <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer">  
          <a href='/' className="flex items-center gap-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className="font-medium">Home</span>
          </a> 
        </li>
        <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer flex items-center gap-6">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"/>
          </svg>
          <span className="font-medium">Shorts</span>
        </li> 
        <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer flex items-center gap-6">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.7 8.7H5.3V7h13.4v1.7zm0 3.5H5.3v-1.7h13.4v1.7zm-4.1 3.5H5.3V14h9.3v1.7z"/>
          </svg>
          <span className="font-medium">Subscriptions</span>
        </li>
      </ul>
      <hr className="my-2 border-gray-200"/>
      <ul className='flex flex-col text-sm'>
        <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer flex items-center gap-6">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 7l-6 3.5L11 14V7zm1 0v7l6-3.5L12 7z"/>
          </svg>
          <span className="font-medium">Library</span>
        </li>
        <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer flex items-center gap-6">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-2c6.08 0 11 4.92 11 11s-4.92 11-11 11S1 18.08 1 12 5.92 1 12 1z"/>
          </svg>
          <span className="font-medium">History</span>
        </li>
      </ul>
      <hr className="my-2 border-gray-200"/>
      <div className='px-3 py-2'>
        <h3 className="text-sm font-semibold mb-2 text-gray-800">Subscriptions</h3>
        <ul className='flex flex-col text-sm'>
          <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer font-normal">Music</li>
          <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer font-normal">Sports</li>
          <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer font-normal">Gaming</li>
          <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer font-normal">Movies</li>
        </ul>
      </div>
      </div>
  )
}

export default Sidebar
