import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics } = info; 
    const {title, channelTitle, thumbnails } = snippet;
    const {viewCount} = statistics;
    const twoLineStyles = {
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
  return (
    <div className=" p-2 m-2 w-80 min-h-[298px] shadow-lg rounded-md scale-110">
        <img className="rounded-lg object-cover" src={thumbnails.medium.url}/>
        <p className=" line-clamp-2 font-bold text-lg pt-2 overflow-hidden">{title}</p>
        <p className='' >{channelTitle}</p>
        <p>{viewCount} views</p>
    </div>
  )
}

export default VideoCard
