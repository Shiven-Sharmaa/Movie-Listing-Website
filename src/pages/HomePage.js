import React from 'react'
import Header from '../components/Header'
import MovieList from  '../components/MovieList'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homeBody'>
      <MovieList/>
    </div>
  )
}

export default HomePage
