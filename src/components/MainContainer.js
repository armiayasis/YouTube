import React, { useEffect } from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';


const MainContainer = () => {
  
  const isMenuOpen = useSelector(state => state.app.isMenuOpen)
  return (
    <div className={` flex-grow ${isMenuOpen ? 'ml-[240px]' : ''}`}>
        <div className={`flex flex-col justify-center items-center mx-auto `}>
      <ButtonsList/>
      <VideoContainer/>
    </div>
    </div>
    
  )
}

export default MainContainer
