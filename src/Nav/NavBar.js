import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <ul>
  <li><a className='active'><Link to='/' >Home</Link></a></li>
  <li style={{float:"right"}}><a><Link to="/MovieList">Movie List</Link></a></li>
  <li><a><Link to="/addmovie">Add Movie</Link></a></li>
</ul>
    </div>
  )
}

export default NavBar