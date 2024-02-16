import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import './MovieDetail.css'
import {Link} from "react-router-dom"

const MovieDetail = () => {
    const params= useParams();
    const i=params.movieId;

    var counter=0;
    var counter1=0;
    
    const [bookmark,setBookmark] = useState(false);
    const [bookmarktext,setBookmarktext] =useState("Bookmark?")
    const [query,setQuery]=useState("");
    const [movieList, setMovieList]=useState([]);
    const inputRef = useRef()
    
    const getMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ffb0b80e32208011ab0d67adcd5e4258');
        const data = await res.json();
        setMovieList(data.results);
    }
    
    //THIS WAS FOR LOCALLY STORING BOOKMARK VALUE AS I COULDNT FIND ANY POST REQUEST FOR IT ON THE API
    //HOWEVER THE DATA KEPT GETTING OVERWRITTEN FOR SOME REASON TO ALWAYS FALSE
    // useEffect(() => {
    //     if(counter<1){
    //         const data = window.localStorage.getItem('BOOKMARK');
    //         console.log(data);
    //         counter+=1;
    //         console.log("counter : ",counter);
    //         setBookmark(true);
    //         console.log(bookmark);
    //         if(bookmark){
    //             setBookmarktext("Bookmarked! Press again to remove");
    //         }
    //         else{
    //             setBookmarktext("Bookmark?");
    //         }
    //         console.log(bookmarktext);
    //     }
    // }, []);
        
    // useEffect(() => {
    //     window.localStorage.setItem('BOOKMARK', bookmark);
    // }, [bookmark])
    
    useEffect(()=>{
        getMovies()
    },[])
    
    const onSubmit = (e) =>{
        e.preventDefault();
        const value =inputRef.current.value;
        if(value==="") return;
        setQuery(value);
        inputRef.current.value="";
    }
    const response = query;

    const handleClick = () =>{
        if(bookmark){
            setBookmark(false);
            setBookmarktext("Bookmark?");
            
        }
        else{
            setBookmark(true);
            setBookmarktext("Bookmarked! Press again to remove");
        }
    }


    if(movieList.length>0){
        var movie=movieList[i]

        //THE API KEY IS INVALID IN THIS POST REQUEST?
        // const options = {
        // method: 'POST',
        // headers: {
        //     accept: 'application/json',
        //     'Content-Type': 'application/json;charset=utf-8',
        //     Authorization: 'Bearer a5c936979fd7db55e57712feb5fa942b'
        // }
        // };
        
        // fetch(`https://api.themoviedb.org/3/movie/${movie.id}/rating`, options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
        
        return (
        <div className='body'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='bodyImage' />
            <div className='darkEffect'></div>
            <Link to="/" className='goback'>Go back to home?</Link>
            <div className='contentBody'>
                <div className='container'>
                    <div className='movieTitle'><h1>{movie.title}</h1></div>
                    <div className='movieDetails'>Release Date : {movie.release_date}</div>
                    <div className='movieDetails'>Rating : {movie.vote_average}</div>
                    <div className='overview'>Summary</div>
                    <div className='overviewContent'>{movie.overview}</div>
                    <div className='bookmark'>
                        <button type='button' id='btn-1' onClick={handleClick}><div className='bookmarkText'>{bookmarktext}</div></button>
                    </div>
                    <div className='rating'>
                        <div className='ratingText'>Rate the movie :</div>
                        <form onSubmit={onSubmit} className='formrate'><input type="text" ref={inputRef} className='rate'></input></form>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='viewImage' />
            </div>
        </div>
        )
    }
}

export default MovieDetail
