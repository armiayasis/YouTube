import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/AppSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import { FiDownload } from 'react-icons/fi'

const WatchPage = () => {
    const[searchParams] = useSearchParams()
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const [offlineVideoUrl, setOfflineVideoUrl] = useState(null);

    useEffect(() => {
      dispatch(closeMenu());
      checkOfflineVideo();
    }, [videoId, dispatch])

    useEffect(() => {
      document.documentElement.style.overflow =  'auto';
    }, [isMenuOpen])

    const checkOfflineVideo = async () => {
      if ('indexedDB' in window) {
        const db = await openDB();
        const transaction = db.transaction(['videos'], 'readonly');
        const store = transaction.objectStore('videos');
        const request = store.get(videoId);
        
        request.onsuccess = () => {
          if (request.result) {
            setOfflineVideoUrl(request.result.url);
            setIsOffline(true);
          }
        };
      }
    };

    const openDB = () => {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open('YouTubeOfflineDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains('videos')) {
            db.createObjectStore('videos', { keyPath: 'id' });
          }
        };
      });
    };

    const downloadVideo = async () => {
      setIsDownloading(true);
      try {
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        const response = await fetch(videoUrl);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        
        const db = await openDB();
        const transaction = db.transaction(['videos'], 'readwrite');
        const store = transaction.objectStore('videos');
        
        store.put({
          id: videoId,
          url: objectUrl,
          timestamp: Date.now()
        });
        
        transaction.oncomplete = () => {
          setOfflineVideoUrl(objectUrl);
          setIsOffline(true);
          alert('Video successfully downloaded for offline viewing!');
        };
      } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again.');
      } finally {
        setIsDownloading(false);
      }
    };
 return (
    <div className= {`pt-5 flex flex-col w-full ${isMenuOpen ? ('-z-50') : ('') } `}>
    <div className="px-5 flex w-full  ">
      <div className="flex flex-col">
        {isOffline && offlineVideoUrl ? (
          <video width="1000" height="500" controls className="rounded-lg">
            <source src={offlineVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe width="1000" height="500" 
            src={"https://www.youtube.com/embed/"+videoId}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        )}
        
        <button 
          onClick={downloadVideo}
          disabled={isDownloading || isOffline}
          className={`mt-4 flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isOffline 
              ? 'bg-green-500 text-white cursor-default' 
              : isDownloading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
          }`}
        >
          <FiDownload className="text-xl" />
          {isOffline ? 'Downloaded (Offline Available)' : isDownloading ? 'Downloading...' : 'Download for Offline'}
        </button>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    

    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
