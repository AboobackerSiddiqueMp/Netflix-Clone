import React, { useEffect, useState } from 'react'
import instance from '../Instance'
import './Banner.css'

function Banner(props) {
  const base_url = "https://image.tmdb.org/t/p/original";

  const[BannerImg,setBannerimg]=useState([])
  const fetchData=async()=>{
    const response= await instance.get(props.fetchUrl)
    const {data}=response
    setBannerimg(data.results[Math.floor(Math.random()*data.results.length)])



  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log('abusid123',BannerImg)
  return (
    <div>

        <div style={{height:'600px',backgroundPosition:'center',backgroundImage:`url(${base_url}${BannerImg.backdrop_path})`,backgroundSize:'cover'} }>
          <div className="bannerContent" >
            <h2 style={{color:'white'}}>{BannerImg.name}</h2>
            <button className='btn btn-danger'>play<i class="fa-solid fa-play bg-transparent ms-2 "></i></button>
            <button className='btn border-white ms-3  more'>More Info <i class="fa-solid fa-caret-down bg-transparent ms-1"></i></button>

            <h5 style={{color:'white'}}>{BannerImg.overview?.slice(0,200)}...</h5>
          </div>
        </div>
    </div>
  )
}

export default Banner