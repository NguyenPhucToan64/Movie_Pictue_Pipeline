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

  useEffect(() => {
    // Hàm fetchData sử dụng Axios để gọi API
    const fetchData = async () => {
        try {
            const result = await axios.get(apiUrl); // Thay 'api_url' bằng URL thực tế của API bạn muốn gọi
            setMovies(result.data); // Cập nhật state với dữ liệu nhận được
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData();
}, []); // Mảng rỗng đảm bảo r

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
