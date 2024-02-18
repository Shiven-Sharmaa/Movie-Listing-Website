import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MovieDetail from "./pages/MovieDetail"
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([{
  path: '/Shiven-Sharmaa.github.io/Movie-Listing-Website/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
},{
  path:'/Shiven-Sharmaa.github.io/Movie-Listing-Website/:movieId',
  element: <MovieDetail />,
}]);

const App = () => {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
