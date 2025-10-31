import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics } = info; 
    const {title, channelTitle, thumbnails } = snippet;
    const {viewCount} = statistics;
  return (
    <div className="p-3 m-3 w-80 min-h-[320px] bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border border-purple-100">
        <div className="relative overflow-hidden rounded-xl group">
          <img className="rounded-xl object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300" src={thumbnails.medium.url} alt={title}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <p className="line-clamp-2 font-bold text-lg pt-3 overflow-hidden text-gray-800 leading-tight">{title}</p>
        <p className='text-purple-600 font-semibold mt-2'>{channelTitle}</p>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-600 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full">
            {parseInt(viewCount).toLocaleString()} views
          </span>
        </div>
    </div>
  )
}

export default VideoCard
