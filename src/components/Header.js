import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className='searchBar'>
        <input type="text" placeholder="Search.." ></input>
      </div>
      <button type='button' className='searchButton'>
        Go
      </button>
    </div>
  )
}

export default Header
