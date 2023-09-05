import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/AppSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
const WatchPage = () => {
    const[searchParams, setSearchParams] = useSearchParams()
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    const watchPage = useSelector(state => state.app.watchPage)
    useEffect(() => {
      dispatch(closeMenu());
      // dispatch(setWatchPageTrue());
    }, [])

    useEffect(() => {
      document.documentElement.style.overflow =  'auto';
    }, [isMenuOpen])
 return (
    <div className= {`pt-5 flex flex-col w-full ${isMenuOpen ? ('-z-50') : ('') } `}>
    <div className="px-5 flex w-full  ">
      <div>
      <iframe width="1000" height="500" 
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    

    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
