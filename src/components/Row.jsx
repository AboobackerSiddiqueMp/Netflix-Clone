import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import './Row.css'

function Row(props) {
  const base_url = "https://image.tmdb.org/t/p/original";

  const [allMovies,setallMovies]=useState([])
  const fetchData=async()=>{
    const response= await instance.get(props.fetchUrl)
    const {data}=response
    setallMovies(data.results)
    

  }
  useEffect(()=>{
    fetchData();

  },[]);

  
  return (
    <div className='row'>
    <h2 style={{color:'white',marginTop:'30px'}}>{props.title}</h2>
    <div className="movie_row">
      {
        allMovies?.map(item=>(
          <img src={`${base_url}${item.poster_path}` } alt=""  className='movie'/>
        ))
      }
    </div>

    
    </div>
  )
}

export default Row