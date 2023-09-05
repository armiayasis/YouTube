import React from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchResultsCard from './SearchResultsCard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const SearchResults = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [videosArray, setVideosArray] = useState([]);
   const search = searchParams.get("search_query");
   const isMenuOpen = useSelector(state => state.app.isMenuOpen)
   let search_query = "";
   if (search.includes(" ")) {
     search_query = search.replace(/ /g, "%");
   } else {
     search_query = search;
   }
    
   const api = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_query}&regionCode=IN&key=AIzaSyDSO2i-iJiHZ9We7lBMu9hY8v5V68QdtZY`
   //console.log(api);

   useEffect(() => {
     fetchKeywordSearchData();
     console.log("useEffect")    
   }, [search])
   
   
    async function fetchKeywordSearchData() {
        console.log("Entered function call for fetch");
        const response = await fetch(api);
        const data = await response.json();
        console.log("Data after fetching is",data);
        setVideosArray(data.items); 
    }
  return (
    <div className={`flex-grow max-w-6xl ${isMenuOpen ? 'ml-[240px]' : 'mx-auto'}`}>
        <div className='  ml-6 flex flex-col gap-3 mt-6 border-black border-b'>    

            {videosArray.map((video) => (
                <SearchResultsCard key={video.id.videoId} info={video} />
            ))}

            </div>
    </div>
    
  )
}

export default SearchResults