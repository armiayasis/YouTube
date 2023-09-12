# My YT Videos App

## Table of Contents
- [Overview](#overview)
- [Project Goals](#project-goals)
- [Features](#features)
  - [Homepage](#homepage)
  - [Sidebar](#sidebar)
  - [Header](#header)
  - [Search Results Page](#search-results-page)
  - [Watch Page](#watch-page)
- [Preview](#preview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)

## Overview
My YT Videos App is a highly scalable and fast-loading video streaming platform inspired by YouTube. It provides essential features like a homepage showcasing YouTube videos using the YouTube API, a responsive sidebar for navigation, a search bar for querying videos, and video playback with a live chat section and nested comments. The app is built using modern web technologies and frameworks like React and Redux Toolkit.

## Project Goals
- Create a scalable and performant video streaming web application.
- Implement features commonly found in video-sharing platforms like YouTube.
- Provide an intuitive user interface for searching, browsing, and watching videos.
- Showcase best practices in React development, including state management with Redux.
- Optimize API requests for a smoother user experience.

## Features

### Homepage
- Displays a feed of YouTube videos fetched from the YouTube API.
- Supports seamless infinite scrolling for loading more videos as the user scrolls down.

### Sidebar
- Provides a user-friendly navigation sidebar.
- Toggles visibility on button click, replicating YouTube's UI functionality.

### Header
- Features a search bar for querying videos.
- Utilizes debouncing (200ms) for efficient API calls to avoid unnecessary requests.
- Implements caching to store search results, reducing duplicate API calls.

### Search Results Page
- Displays relevant videos based on the search query.
- Mimics YouTube's sidebar visibility functionality.
- Clicking on a video card redirects to the Watch Page for video playback.

### Watch Page
- Allows users to watch videos in a player container.
- Provides a live chat section that continuously updates without freezing the UI.
- Users can type chat messages, which appear alongside other chat messages, replicating real YouTube live chat functionality.
- Includes a comments section supporting N-level nested comments, a feature not found on YouTube.

## Preview


![image](https://github.com/yashsarode45/YouTube/assets/65209607/98dc2c4d-44c8-4eb8-b81b-bd2d58bef2b4)
![image](https://github.com/yashsarode45/YouTube/assets/65209607/6a100a03-dc70-4d36-979e-17fae4a6845f)
![image](https://github.com/yashsarode45/YouTube/assets/65209607/a34f2f82-6d7d-4493-9007-2dbf41859d55)
![image](https://github.com/yashsarode45/YouTube/assets/65209607/4e9e1376-3d35-4986-9677-43467560b503)
![image](https://github.com/yashsarode45/YouTube/assets/65209607/94abce5d-e112-4d7e-a720-506fdc434e5d)

[View Live Demo](https://youtube-yash.vercel.app/)

## Technologies Used

- React: Front-end framework for building user interfaces.
- Redux Toolkit: State management library for handling application-level state.
- React Router: Routing library for managing page navigation.
- YouTube API: For fetching video data.
- Tailwind CSS: Utility-first CSS framework for styling.
- Debouncing: Implemented for optimizing search bar performance.
- Caching: Cached search results to reduce API requests and enhance user experience.
- 
## Project Structure

The project follows a modular structure to enhance maintainability:

- `components`: Contains reusable UI components.
- `utils`: Holds utility functions, Redux slices, and constants.
- `App.js`: The main application component.
- `Head.js`: The header component with the search bar.
- `Body.js`: The main content component with the homepage, sidebar, and routing.
- `MainContainer.js`: The container for displaying videos on the homepage.
- `WatchPage.js`: The component for video playback, live chat, and comments.
- `SearchResults.js`: The component for displaying search results.
- Redux Toolkit is used for state management, including toggling the sidebar and caching search results.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd shopping-cart`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`


## Usage

1. Open the app in your browser.
2. Explore the homepage to discover videos.
3. Use the sidebar for navigation.
4. Search for videos using the search bar.
5. Click on video cards to watch videos.
6. Interact with live chat and comment on videos.



Enjoy exploring and watching videos on My YT Videos App!
