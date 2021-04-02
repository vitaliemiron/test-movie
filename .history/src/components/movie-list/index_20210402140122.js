import React, { useState } from "react";
import "./index.css";

function MovieList() {

  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  const getMovies = (year = 2015) => {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then(res => res.json())
      .then(
        (result) => {
          setMovies(result.data)
        }
      )
  }

  console.log(movies)
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" value={year} onChange={(e) => { setYear(e.target.value) }} />
        <button className="" data-testid="submit-button" onClick={() => getMovies(year)}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        {movies.map(movie => (<li key={movie.imdbID}>{movie.Title} | {movie.Year}</li>))}
      </ul>

      {(movies.length === 0 && year !== '') && <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>}
    </div>
  );
}

export default MovieList