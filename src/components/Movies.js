import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
  {/* This component should render the text Movies Page in an <h1>, 
    and make a new <div> for each movie. 
    the <div> should contain the movie's title, time and a <ul> 
    with a list of its genres, each within their own <li>. */}
    <h1>Movies Page</h1>
    
    {movies.map((movie) => {
      return <div key={movie.title}>
             Movies Title:{movie.title}
             Time Duration:{movie.time}
             <ul>
              {movie.genres.map((genre) => {
                   return <li>{genre}</li>
              })}

             </ul>
            </div>



    })}
    
    
    </div>;
}

export default Movies;
