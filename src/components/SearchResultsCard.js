import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultsCard = ({info }) => {

    const {snippet ,id } = info; 
    const {videoId} = id;
    const {title, channelTitle, thumbnails, publishTime, description } = snippet;
    const datePart = publishTime.split("T")[0];
    const formattedDate = new Date(datePart).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    });
  return (
    
    <Link to={"/watch?v="+ videoId}>
    <div className='cursor-pointer flex gap-4 mb-4'>
       <div className="flex-shrink-0">
         <img className="rounded-xl object-cover w-[360px] aspect-video" src={thumbnails.medium.url} alt={title}/>
       </div>
       <div className='flex flex-col flex-1'>
            <h3 className='text-lg font-medium line-clamp-2 mb-1'>{title}</h3>
            <p className='text-xs text-gray-600 mb-3'>Published {formattedDate}</p>
            <div className='flex items-center gap-2 mb-2'>
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <p className='text-xs text-gray-600'>{channelTitle}</p>
            </div>
            <p className='text-xs text-gray-600 line-clamp-2'>{description}</p>
       </div>
    </div>
    </Link>
  )
}

export default SearchResultsCard
