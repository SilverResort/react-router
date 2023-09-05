import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie,inputMovie,inputStars}) => {
  return (
    <div style={{display:'flex', flexWrap:'Wrap', justifyContent:'space-between'}}>
        {
            inputStars ?
            movie
              .filter((movie)=>
                (movie.rate===inputStars && (movie.title.toUpperCase().includes(inputMovie.toUpperCase().trim()) ||
                movie.description.toUpperCase().includes(inputMovie.toUpperCase().trim()) ) ) )
              .map((movie)=>
                (<MovieCard movie={movie} key={movie.id}/>))
              :
              movie            
                .filter((movie)=>
                (movie.title.toUpperCase().includes(inputMovie.toUpperCase().trim())) ||
                movie.description.toUpperCase().includes(inputMovie.toUpperCase().trim()) )
                .map((movie)=>
                (<MovieCard movie={movie} key={movie.id}/>))
        }
    </div>
  )
}

export default MovieList