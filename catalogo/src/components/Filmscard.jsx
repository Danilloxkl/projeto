import React from 'react';
import { Link } from 'react-router-dom';

import {FaStar} from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const Filmscard = ({movie, showLink = true}) => {
  return(
    <div className='film-card'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_avarage}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default Filmscard
       