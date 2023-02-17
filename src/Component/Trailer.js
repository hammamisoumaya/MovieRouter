import React from 'react'
import { useParams } from 'react-router-dom'
import {MovieData} from "../Data"
import './Trailer.css'
const Trailer = () => {
    const {id} =useParams()
    console.log('id de ton movie',id)
    const foundmovie = MovieData.find((el)=> el.id === Number(id))
    console.log('movie objet selon lid',foundmovie)
  return (
    <div>
    <div className="main-container">
  <div className="heading">
    <h1 className="heading__title">{foundmovie.name}</h1>
    <p className="heading__credits"><a className="heading__link" target="_blank" >{foundmovie.description}</a></p>
    <img src={foundmovie.image} alt=""/>
  </div>
  <div className="cards">
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p className="card__apply">
        <a className="card__link">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-2">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
      <p className="card__apply">
        <a className="card__link" >Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-3">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Ut enim ad minim veniam.</h2>
      <p className="card__apply">
        <a className="card__link" >Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-4">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
      <p className="card__apply">
        <a className="card__link" >Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-5">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
      <p className="card__apply">
        <a className="card__link" >Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p className="card__apply">
        <a className="card__link">Apply Now <i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
  </div>
</div>    
</div>  
   
  
  

        
        
        
  )
}

export default Trailer