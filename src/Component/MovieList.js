import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({movielist,setsearchname,searchname}) => {
  return (
<div>
<div classNameName="container">
<div classNameName="search">
<div classNameName="row"> 
<div className="col-md-6">
<div className="search-1"> 
<i className='bx bx-search-alt'></i> </div> </div> 
<div className="col-md-6"> <div> <div className="search-2"> 
<i className='bx bxs-map' ></i> 
<input type="text" placeholder="Search a movie" onChange={(e)=>setsearchname(e.target.value)} /> 
<button>Search</button> </div> </div> </div> </div> </div>
</div>

 
   {
        movielist.filter((el)=>el.name.toLowerCase().includes(searchname.toLowerCase().trim()))
        .map((el)=><MovieCard    movie={el}/>)
      }

      </div>
   
  )
}

export default MovieList