const MovieList = function (props) {
    const { movies, onMovieClick } = props;
    return (
        <ul>
            {movies.map((movie) => {
                return (<li onClick={() => onMovieClick(movie.title)}>
                    {movie.title}
                </li>)
            })}
        </ul>
    )
}

export default MovieList;