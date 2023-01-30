import React, { useState, useEffect } from "react";
import { getTop250Movies } from "../services/api";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTop250Movies().then((response) => {
      setMovies(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Movie List</h1>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default MovieList;
