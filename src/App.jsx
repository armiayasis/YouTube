import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import SearchResults from './components/SearchResults'
const App = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
      children: [
        {path: "/",
        element: <MainContainer/>
        },
        {path: "/watch",
        element: <WatchPage/>},
        {
          path: "/results",
          element: <SearchResults/>
        } ]
      }
  ])
  return (
    <div>    
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
