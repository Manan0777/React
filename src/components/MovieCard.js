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
      // <section className="movie-card">
      <div className="movie-card">
        <div className="front_side">
        {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} */}
        <img src={movie.Poster} alt={movie.Title} />
        <caption>
        <p>{movie.Title}</p>
        
        </caption>
       </div>
       <div className="back_side">
       <h1>{movie.Title}</h1>
         <p>Year: {movie.Year}</p>
         <p>Type: {movie.Type}</p>
         <p>IMDB ID: {movie.imdbID}</p>
         <p>MORE INFO ACCORDING TO API</p>
       </div>
      </div>
      // {/* </section> */}
     
      
  );
}