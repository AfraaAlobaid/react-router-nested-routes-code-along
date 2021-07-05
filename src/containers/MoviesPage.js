// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import MovieShow from "../components/MovieShow";

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      path={`/movies/:movieId`}
      render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
    />
    {match.url}
  </div>
);

export default MoviesPage;
