import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import './MovieList.css'
import "./Header.css"

const MovieList = () => {
    const [movieList, setMovieList]=useState([]);
    const [query,setQuery]=useState("");

    const filteredItems = movieList.filter(item => {
        return item.title.toString().toLowerCase().includes(query.toString().toLowerCase());
    })

    const getMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ffb0b80e32208011ab0d67adcd5e4258');
        const data = await res.json();
        setMovieList(data.results);
    }

    useEffect(()=>{
        getMovies()
    },[])

    if(movieList.length===0){
        return(
            <div className='loading'>LOADING</div>
        )
    }
    if(movieList.length>0){
        return (
        <>
            <div className='header'>
                <div className='searchBar'>
                    <input type="text" placeholder="Search.." className='searcher' value={query} onChange={e=>setQuery(e.target.value)}></input>
                </div>
                <button type='button' className='searchButton'>
                    Go
                </button>
            </div>

            <div className='movieList'>
            {filteredItems.map(
                    (movie,i)=>
                    {
                        return( 
                            <div key={i} className='movieCard'>
                                <Link to={`/Shiven-Sharmaa.github.io/Movie-Listing-Website/${i}`} className='imgLink' ><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='img'/>
                                <div className='title'>{movie.title}</div>
                                <div className='year'>{movie.release_date.substring(0,4)}</div></Link>
                            </div>
                        )
                    }
                )
            }    
            </div>
        </>
        )
    }
}

export default MovieList
