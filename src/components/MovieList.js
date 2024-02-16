import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import Header from './Header'
import './MovieList.css'
import "./Header.css"

const MovieList = () => {
    // const [input, setInput] = useState('');
    // const [filterMovie, setFilterMovie]=useState();
    const [movieList, setMovieList]=useState([]);
    const [query,setQuery]=useState("");

    const filteredItems = movieList.filter(item => {
        return item.title.toString().toLowerCase().includes(query.toString().toLowerCase());
    })
console.log(filteredItems);
    const getMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ffb0b80e32208011ab0d67adcd5e4258');
        const data = await res.json();
        setMovieList(data.results);
    }
    
    // const changeValue = async (input) => {
    //     const filtered = movieList.filter(movie => {
    //         return movie.title.toLowerCase().includes(input.toLowerCase())
    //     })
    //     setInput(input);
    //     setFilterMovie(filtered);
    // }

    useEffect(()=>{
        getMovies()
    },[])

    if(movieList.length>0){
    
        //movieList.map((movie)=>{})
    
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

            {/* <Header /> */}
    
            <div className='movieList'>
            {filteredItems.map(
                    (movie,i)=>
                    {
                        return( 
                            <div key={i} className='movieCard'>
                                <Link to={`/${i}`} className='imgLink' ><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='img'/>
                                <div className='title'>{movie.title}</div>
                                <div className='year'>({movie.release_date})</div></Link>
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
