import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultsCard = ({info }) => {

    const {snippet ,id } = info; 
    const {videoId} = id;
    const {title, channelTitle, thumbnails, publishTime, description } = snippet;
    const datePart = publishTime.split("T")[0]; // Extract "2023-07-20"
    const formattedDate = new Date(datePart).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    });
  return (
    
    <Link to={"/watch?v="+ videoId}>
    <div className=' cursor-pointer flex gap-3 pb-3 border-b-2'>
       <img className="rounded-lg object-cover" src={thumbnails.medium.url}/>
       <div className='flex flex-col'>
        <div className='flex flex-col gap-1'>
            <p className=' text-lg font-semibold'>{title}</p>
            <p className=' text-sm font-normal'>Published on {formattedDate}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className=' text-base font-medium'>{channelTitle}</p>
            <p className=' text-sm font-normal'>{description}</p>
        </div>
       </div>
    </div>
    </Link>
  )
}

export default SearchResultsCard
