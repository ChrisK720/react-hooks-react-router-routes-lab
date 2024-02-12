import React from "react";
import { NavLink } from "react-router-dom";

// /movies: should render the Movies component
// /directors: should render the Directors component
// /actors: should render the Actors component
// /: should render the Home component

function NavBar() {
  return <div>
    <nav>
     
     <NavLink to='/actors' exact>Actors</NavLink>
     <NavLink to='/movies' exact>Movies</NavLink>
     <NavLink to='/directors' exact>Directors</NavLink>
     <NavLink to='/' >Home</NavLink>


    </nav>



  </div>;
}

export default NavBar;
