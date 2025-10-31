# YouTube Clone - My YT Videos App

## Overview
Isang highly scalable at fast-loading video streaming platform na inspired sa YouTube. Ginawa gamit ang React, Redux Toolkit, at Tailwind CSS na may beautiful gradient design.

## Recent Changes (October 31, 2025)
- ✅ **Fixed Critical Errors**: Na-resolve ang "Cannot read properties of undefined (reading 'map')" error
- ✅ **Improved Error Handling**: Nag-add ng try-catch blocks sa lahat ng API calls
- ✅ **Enhanced Design**: Nag-implement ng magagandang gradient backgrounds at buttons
  - Purple-pink-red gradient header
  - Beautiful gradient buttons (purple to pink)
  - Improved video cards with hover effects
  - Modern sidebar design
- ✅ **Environment Setup**: Na-configure para sa Replit environment
- ✅ **Deployment Ready**: Na-setup ang production deployment configuration

## Project Architecture

### Frontend Stack
- **React 18.2.0** - Main UI framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Poppins Font** - Typography

### Key Features
1. **Homepage** - Displays YouTube videos using YouTube API
2. **Search** - With debouncing (200ms) at caching
3. **Sidebar Navigation** - Toggleable sidebar
4. **Video Playback** - Watch page with live chat
5. **Search Results** - Filtered video results
6. **Nested Comments** - N-level comment support

### API Integration
- **YouTube Data API v3** - Para sa video data
- **API Key**: Naka-store sa environment variables (`REACT_APP_YOUTUBE_API_KEY`)

## File Structure
```
src/
├── components/
│   ├── Head.js - Header with search
│   ├── Body.js - Main container
│   ├── Sidebar.js - Navigation sidebar
│   ├── VideoCard.js - Video thumbnail cards
│   ├── VideoContainer.js - Video grid
│   ├── Button.js - Category buttons
│   ├── ButtonsList.js - Button container
│   ├── SearchResults.js - Search results page
│   ├── SearchResultsCard.js - Search result item
│   ├── WatchPage.js - Video player page
│   ├── LiveChat.js - Live chat component
│   └── CommentsContainer.js - Comments section
├── utils/
│   ├── Store.js - Redux store
│   ├── AppSlice.js - App state slice
│   ├── ChatSlice.js - Chat state slice
│   ├── searchSlice.js - Search cache slice
│   ├── Constants.js - API constants
│   └── Helper.js - Helper functions
├── App.jsx - Main app component
├── index.js - Entry point
└── index.css - Global styles
```

## Environment Variables
- `PORT=5000` - Development port
- `HOST=0.0.0.0` - Host binding
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Para sa Replit proxy
- `WDS_SOCKET_PORT=0` - WebSocket configuration
- `REACT_APP_YOUTUBE_API_KEY` - YouTube API key

## Development Workflow

### Running Locally
```bash
npm install
npm start
```
App will run on http://localhost:5000

### Building for Production
```bash
npm run build
npx serve -s build -l 5000
```

### Deployment
- Configured for **Replit Autoscale** deployment
- Build command: `npm run build`
- Run command: `npx serve -s build -l 5000`

## Design System

### Colors
- Primary Gradient: Purple (#667eea) to Pink (#764ba2)
- Header Gradient: Purple (#9333ea) to Pink (#ec4899) to Red (#ef4444)
- Background: Soft purple-pink-blue gradient
- Buttons: Purple-pink gradient with hover effects

### Typography
- Font Family: Poppins
- Weights: 400 (regular), 600 (semibold), 700 (bold)

### Components Styling
- Rounded corners: 8px (md) to 24px (2xl)
- Shadows: Layered shadows for depth
- Hover effects: Transform and shadow transitions
- Animations: 300ms ease transitions

## Known Issues & Solutions

### Fixed Issues
1. ✅ **Map Error**: Added null checks before .map() calls
2. ✅ **Function Hoisting**: Moved fetchSearchData before useEffect
3. ✅ **API Error Handling**: Added try-catch blocks

### Performance Optimizations
- Debounced search (200ms delay)
- Search results caching
- React.useCallback for memoization
- Conditional rendering for loading states

## User Preferences
- **Design Style**: Prefers modern, gradient-based designs with smooth animations
- **Language**: Tagalog/Filipino for communication

## Future Enhancements (Proposed)
- [ ] PWA support - "Add to Home Screen" functionality
- [ ] Offline support with service workers
- [ ] YouTube-like authentic design option
- [ ] Dark mode toggle
- [ ] Video player controls
- [ ] Comment system backend

## Dependencies
See `package.json` for full list of dependencies.

### Main Dependencies
- react, react-dom: ^18.2.0
- @reduxjs/toolkit: ^1.9.3
- react-router-dom: ^6.9.0
- tailwindcss: ^3.2.7
- react-icons: ^4.8.0

## Deployment Status
✅ Ready for deployment
✅ Environment variables configured
✅ Build process tested
✅ Production serving configured

---

**Last Updated**: October 31, 2025
**Status**: Active Development
