import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

const apiUrl = process.env.REACT_APP_MOVIE_API_URL + '/movies/';
export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(async ()=>{
    const response = await fetch(apiUrl);
    const moviesfetch = await response.json();
    console.log('Movies:', moviesfetch);
    setMovies(moviesfetch)

  },[])

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  
  return (
    <div className="container">
      <h1>Movie List</h1>

      <MovieList movies = {movies} onMovieClick={handleMovieClick} />

      {selectedMovie && (
        <>
          <h1>Movie Details</h1>
          <MovieDetails movie={selectedMovie} />
        </>
      )}
    </div>
  );
}
