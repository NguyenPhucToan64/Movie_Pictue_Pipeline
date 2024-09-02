import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

export default function App() {
  const apiUrl = process.env.REACT_APP_MOVIE_API_URL + '/movies';
  console.log('APIf',apiUrl);
  
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([
    {
      "id": "123",
      "title": "Top Gun: Maverick"
    },
    {
      "id": "456",
      "title": "Sonic the Hedgehog"
    },
    {
      "id": "789",
      "title": "A Quiet Place"
    }
  ]);

  // useEffect(async ()=>{
  //   async function fetchData() {
  //     try {
  //         const response = await fetch(apiUrl); // Sử dụng URL của API thực tế
  //         const data = await response.json();
  //         setMovies(data); // Cập nhật state abc với dữ liệu mới
  //     } catch (error) {
  //         console.error('Failed to fetch data: ', error);
  //         // Xử lý lỗi tại đây nếu cần
  //     }
  // }

  // fetchData();

  // },[])

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
