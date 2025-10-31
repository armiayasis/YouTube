import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics } = info; 
    const {title, channelTitle, thumbnails } = snippet;
    const {viewCount} = statistics;
  return (
    <div className="w-full max-w-[360px] cursor-pointer">
        <div className="relative w-full">
          <img className="w-full aspect-video rounded-xl object-cover" src={thumbnails.medium.url} alt={title}/>
        </div>
        <div className="flex gap-3 pt-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-300"></div>
          <div className="flex-1">
            <h3 className="font-medium text-sm line-clamp-2 leading-5 mb-1">{title}</h3>
            <p className='text-xs text-gray-600'>{channelTitle}</p>
            <p className="text-xs text-gray-600">{parseInt(viewCount).toLocaleString()} views</p>
          </div>
        </div>
    </div>
  )
}

export default VideoCard
