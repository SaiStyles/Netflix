import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import Youtube from 'react-youtube'        
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {  
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })
  }, [])



  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding:1,
      
      
    },
    
  }

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
        

      } else {
        console.log("empty array");
      }
    })
  }

  return (
    <div className='row'>
      <h2 on >{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) =>


          <img onMouseEnter={()=>setUrlId(null)} onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={imageUrl + obj.backdrop_path} alt="" />
        )}

      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost