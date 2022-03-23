import React from "react";
import "../styles/Movie-list.css";
import MovieCard from "./MovieCard";

export default function MoviesList({ movieList, isLoading }) {
  if (isLoading) {
    return "Loading Movies please wait!";
  } else {
    return (
      <div className="movie-list">
        {movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} ></MovieCard>
        ))}
      </div>
    );
  }
}