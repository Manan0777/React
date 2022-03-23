import React from "react";
// import { Link } from "react-router-dom";
import "../styles/movie-card.css";
/**
 * 
 * {
"Title": "Avatar",
"Year": "2009",
"imdbID": "tt0499549",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
},
kebab-case
 */
export default function MovieCard({ movie }) {
  return (
    
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <p>{movie.Title}</p>
        <p>Year: {movie.Year}</p>
      </div>
      
  );
}