import React from 'react'
import { useEffect, useState } from 'react'
import { API } from '../utils/Constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMenu } from '../utils/AppSlice'
const VideoContainer = () => {
 
  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetchVideosData();    
    dispatch(setMenu());
  }, [])
  
  async function fetchVideosData() {
    const response = await fetch(API);
    const result = await response.json();
    setVideos(result.items);
    //console.log("Result array is", result.items)
  }

  return (
    <div className='flex flex-wrap gap-x-9 gap-y-7 max-w-6xl justify-center mt-3'>

      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+ video.id}>
        <VideoCard key={video.id} info={video}/>
        </Link>
      ))}

      
    </div>
  )
}

export default VideoContainer
