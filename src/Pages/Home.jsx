import React from 'react'
import MovieList from '../Components/MovieList'
import Filter from "../Components/Filter";
import AddMovie from "../Components/AddMovie";


const Home = ({ movie, inputMovie, inputStars, setMovie, setInputMovie, setInputStars  }) => {
    
  return (
    <div>
        <Filter setInputMovie={setInputMovie} setInputStars={setInputStars} inputStars={inputStars} />
        <AddMovie movie={movie} setMovie={setMovie} />
        <MovieList inputMovie={inputMovie} inputStars={inputStars} movie={movie}/>
    </div>
  )
}

export default Home