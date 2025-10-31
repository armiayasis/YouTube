import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    }, 50);
  
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery, cachedResults, fetchSearchData])
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/results?search_query=${searchQuery}`)
    }
  }

  return (
    <div className="grid grid-flow-col px-4 py-2 sticky top-0 z-10 bg-white">
      <div className="flex col-span-1 items-center gap-4">
        <a href='/' className="flex items-center">
          <img
            className="h-5"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 flex items-center">
        <div className='flex items-center w-full max-w-2xl mx-auto'>
          <input
            className="px-4 w-full border border-gray-300 py-2 rounded-l-full focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>  setShowSuggesstions(true)}
            onKeyDown={handleKeyPress}
            onBlur= {() => {setTimeout(()=>{setShowSuggesstions(false)},100)}}
          />
          <button className="border border-l-0 border-gray-300 px-6 py-2 rounded-r-full bg-gray-50 hover:bg-gray-100">
            <BsSearch className="text-gray-600"/>
          </button>
        </div>
        { showSuggesstions && searchQuery.length > 0 && (
          <div className="absolute z-[150] bg-white py-2 w-[37rem] shadow-2xl rounded-xl border border-gray-200 mt-2 top-12">
            <ul>
              { searchResults.map((s) => 
                 (<Link key={s} to={`/results?search_query=${s}`}>
                  <li className="py-2 px-4 hover:bg-gray-100 flex items-center text-sm">
                  <BsSearch className='mr-3 text-gray-600'/> {s}
                  </li>
                </Link>)
              )}
            </ul>
          </div>)}

      </div>
      <div className="col-span-1 flex items-center justify-end gap-3">
        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
          <span className="text-white font-medium text-sm">U</span>
        </div>
      </div>
      
    </div>
  )
}

export default Head
