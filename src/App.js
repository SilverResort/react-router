import { useState } from "react";
import Navigation from "./Components/Navigation";
import { moviesData } from './Data'
import { Route, Routes } from "react-router-dom";
import Description from "./Pages/Description";
import Trailer from "./Pages/Trailer";
import Home from "./Pages/Home";
function App() {
  const [movie,setMovie]=useState(moviesData)
  const [inputMovie,setInputMovie]=useState('')
  const [inputStars,setInputStars]=useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Navigation setInputMovie={setInputMovie}/>
        <Routes>
          <Route exact path='/' element={<Home movie={movie} inputMovie={inputMovie} inputStars={inputStars} setMovie={setMovie} setInputMovie={setInputMovie} setInputStars={setInputStars}/>}/>
          <Route path='/description/:id' element={<Description movies={movie}/>}/>
          <Route path='/trailer/:id' element={<Trailer movies={movie}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
