import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage"
import MovieDetail from "./pages/MovieDetail"
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
},{
  path:'/:movieId',
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
