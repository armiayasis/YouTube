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
    <div className='cursor-pointer flex gap-4 p-4 mb-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-100'>
       <div className="relative overflow-hidden rounded-xl">
         <img className="rounded-xl object-cover w-80 h-48" src={thumbnails.medium.url} alt={title}/>
       </div>
       <div className='flex flex-col flex-1'>
        <div className='flex flex-col gap-2'>
            <p className='text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors'>{title}</p>
            <p className='text-sm font-medium text-gray-500 bg-purple-50 px-3 py-1 rounded-full inline-block w-fit'>Published on {formattedDate}</p>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
            <p className='text-lg font-semibold text-purple-600'>{channelTitle}</p>
            <p className='text-sm font-normal text-gray-600 line-clamp-2'>{description}</p>
        </div>
       </div>
    </div>
    </Link>
  )
}

export default SearchResultsCard
