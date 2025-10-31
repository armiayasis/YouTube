import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toggleMenu} from '../utils/AppSlice'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { YOUTUBE_SEARCH } from '../utils/Constants';
import { cacheResults } from '../utils/searchSlice';
import { BsSearch } from 'react-icons/bs';

const Head = () => {
  
  const cachedResults = useSelector((store) => store.search )
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setsearchResults] = useState([])
  const [showSuggesstions, setShowSuggesstions] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchSearchData = React.useCallback(async () => {
    console.log("Fetch data for - ", searchQuery);
    let fetchedDataArray = [];
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`)}`)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    }).then(data => { 
      fetchedDataArray = JSON.parse(data.contents)
      setsearchResults(fetchedDataArray[1]);
      dispatch(cacheResults( { [searchQuery]:fetchedDataArray[1] } ))
    });
  }, [searchQuery, dispatch])

  useEffect(() => {
    setShowSuggesstions(false);
  }, [])
  
  useEffect(() => {
    const timer =  setTimeout(() => {

      if(searchQuery in cachedResults)
      {
        setsearchResults(cachedResults[searchQuery]);
      }
      else{
        fetchSearchData();
      }
    }, 200);
  
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery, cachedResults, fetchSearchData])
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/results?search_query=${searchQuery}`)
    }
  }

  
  function handleMenuClick() {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 sticky top-0 z-10 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-xl backdrop-blur-sm">
      <div className="flex col-span-1 items-center">
        <div 
          onClick={handleMenuClick}
          className="h-10 w-10 cursor-pointer bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        
        <a href='/' className="ml-3 flex items-center">
          <div className="bg-white px-3 py-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">YouTube</span>
          </div>
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div className='flex items-center justify-center'>
          <input
            className="px-5 w-1/2 border-2 border-white/30 p-3 rounded-l-full bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-500 text-gray-800 font-medium"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>  setShowSuggesstions(true)}
            onKeyDown={handleKeyPress}
            onBlur= {() => {setTimeout(()=>{setShowSuggesstions(false)},100)}}
          />
          <button className="border-2 border-white/30 px-6 py-[14px] rounded-r-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg">
            <BsSearch className="text-purple-600"/>
          </button>
        </div>
        { showSuggesstions && searchQuery.length > 0 && (
          <div className="absolute z-[150] bg-white/95 backdrop-blur-md py-2 px-2 w-[37rem] shadow-2xl rounded-xl border border-purple-200 mt-2">
            <ul>
              { searchResults.map((s) => 
                 (<Link key={s} to={`/results?search_query=${s}`}>
                  <li key={s}  className="py-3 px-4 shadow-sm hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 rounded-lg flex items-center transition-all duration-200">
                  <BsSearch className='mr-3 text-purple-600'/> <span className="text-gray-700 font-medium">{s}</span>
                  </li>
                </Link>)
              )}
            </ul>
          </div>)}

      </div>
      <div className="col-span-1 flex items-center justify-end">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
            <span className="text-purple-600 font-bold text-lg">U</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Head
