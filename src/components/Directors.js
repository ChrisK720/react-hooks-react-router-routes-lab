import React from "react";
import { directors } from "../data";

function Directors() {
  // This component should render the text Directors Page in an <h1>, 
  //and make a new <div> for each director. The <div> should contain the director's
  // name and a <ul> with a list of their movies.


  
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          console.log(director.name)
          return (
            <div key={director.name}>
              Name:{director.name}
              <ul>
               {director.movies.map((movie) => {
                   return (
                    <li key={director.name + movie}>{movie}</li>
                   )
               })}
              </ul>
              
            </div>
          );
        })}
      </div>
   );

   
}
  

export default Directors;
