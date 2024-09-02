import {map} from 'lodash'
const MovieList = function (props) {
    const { movies, onMovieClick } = props;
    return (
        <ul>
            {map(movies.movies,(movie) => {
                return (<li onClick={() => onMovieClick(movie.title)}>
                    {movie.title}
                </li>)
            })}
        </ul>
    )
}

export default MovieList;