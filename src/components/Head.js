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
  }, [searchQuery])
  
  const handleKeyPress = (event) => {
    // Check if the key pressed is the "Enter" key (keyCode 13)
    if (event.key === "Enter") {
      // Perform your desired action here, e.g., submit the form, search, etc.
      navigate(`/results?search_query=${searchQuery}`)
    }
  }

  const fetchSearchData = async () => {
    console.log("Fetch data for - ", searchQuery);
    const encodedUrl = YOUTUBE_SEARCH + searchQuery ;
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
  }

  
  function handleMenuClick() {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 sticky top-0 z-10  bg-white">
    {/* {console.log("The search results are", searchResults)} */}
      <div className="flex col-span-1">
        <img
        onClick={handleMenuClick}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        
        
        <a href='/'>
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
        </a>
        
      </div>

      <div className="col-span-10 px-10">
        <div className='flex items-center'>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>  setShowSuggesstions(true)}
            onKeyDown={handleKeyPress}
            onBlur= {() => {setTimeout(()=>{setShowSuggesstions(false)},100)}}
          />
          <button className="border border-gray-400 px-5 py-[12px] rounded-r-full bg-gray-100">
            <BsSearch/>
          </button>
        </div>
        {/*  */}
        { showSuggesstions && searchQuery.length > 0 && (
          <div className="absolute z-[150] bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              { searchResults.map((s) => 
                 (<Link key={s} to={`/results?search_query=${s}`}>
                  <li key={s}  className="py-2 px-3 shadow-sm hover:bg-gray-100 flex items-center">
                  <BsSearch className=' mr-2'/> {s}
                  </li>
                </Link>)
              )}
            </ul>
          </div>)}

      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
      
    </div>
  )
}

export default Head
