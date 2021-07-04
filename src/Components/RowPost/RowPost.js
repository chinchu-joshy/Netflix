import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../Constants/Constants'
function RowPost(props) {
    const [movies, setmovies] = useState([])
   const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
             console.log(response.data)
             setmovies(response.data.results)
        }).catch(err=>{
            alert('network error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
         
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
           console.log(id)
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
               console.log(response.data)
               if(response.data.results.length!==0){
                   setUrlId(response.data.results[0])
               }else{
                   console.log('not available')
               }
           })
      }
    return (
        <div className='row'>
           <h2 className='row-title'>{props.title}</h2> 
          
          <div className='posters'>
              {movies.map((obj)=>
                     <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster' : 'poster'} alt='poster'
                      src={`${imageUrl+obj.backdrop_path}`}/>
              )}
          
          
        </div>
        {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
