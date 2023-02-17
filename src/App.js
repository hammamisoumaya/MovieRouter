
import MovieList from './Component/MovieList';
import HomePage from './HomePage';
import NavBar from './Nav/NavBar';
import {Routes,Route} from 'react-router-dom'
import AddMovie from './AddMovie';
import {MovieData} from "./Data"
import { useState } from 'react';
import Trailer from './Component/Trailer'

function App() {
  const [movielist,setmovielist]=useState(MovieData)
  const handelSearch=()=>{

  }
  const [searchname,setsearchname]=useState('')
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
       
        <Route path='/MovieList' element={<MovieList   movielist={movielist}  setsearchname={setsearchname}  searchname={searchname} />}/>
       
        <Route path='/MovieList/MovieTrailer/:id' element={<Trailer/>}/>
       
        <Route path='/addmovie' element={<AddMovie/>}/>
        
      </Routes>
      
      
  
    </div>
  );
}

export default App;
