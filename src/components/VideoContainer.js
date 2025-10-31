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
  }, [dispatch])
  
  async function fetchVideosData() {
    try {
      const response = await fetch(API);
      const result = await response.json();
      if (result && result.items) {
        setVideos(result.items);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mt-6'>

      {videos && videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v="+ video.id}>
            <VideoCard key={video.id} info={video}/>
          </Link>
        ))
      ) : (
        <div className="text-center py-10 col-span-full">
          <p className="text-xl text-gray-600 font-semibold">Loading videos...</p>
        </div>
      )}

      
    </div>
  )
}

export default VideoContainer
