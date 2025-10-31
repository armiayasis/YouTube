const YOUR_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUR_API_KEY}`;

export const YOUTUBE_SEARCH = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_SEARCH_RESULTS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=iphone&regionCode=IN&key=${YOUR_API_KEY}`;