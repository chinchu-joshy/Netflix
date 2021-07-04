import React,{useEffect,useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'

import axios from '../../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           console.log(response.data)
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
        })

    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : "" })`}} className='banner'>
         <div className='content'>
             <h1 className='title'>{movie ? movie.title:""}</h1></div>   
             <div className='buttons'>
                 <button className='button'>play</button>
                 <button className='button'>playlist</button>
             </div>
             <h1 className='description'>{movie ? movie.overview:""}</h1>
             <div className="fade"></div>
        </div>
    )
}

export default Banner
