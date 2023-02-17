import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <div>
      <link rel="stylesheet"/>
<div id="container">	
	
	<div className="product-details">
		
	<h1>{movie.name}</h1>
	<span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i classNameName="fa fa-star" aria-hidden="true"></i>
		<i classNameName="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
			<p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>

		
		
<div className="control">
	
	<button className="btn">
	 
   <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span className="buy"><Link to={`MovieTrailer/${movie.id}`}>Go to Trailer</Link></span>
 </button>
	
</div>
			
</div>
	
<div className="product-image">
	
	<img src={movie.image} alt=""/>
	

<div className="info">
	<h2>{movie.description}</h2>
	<ul>
		<li><strong>Height : </strong>5 Ft </li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
</div>
</div>

</div>

    </div>
  )
}

export default MovieCard