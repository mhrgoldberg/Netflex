import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieIndexItem = (props) => {
  let {movie} = props;
  let [isShown, setIsShown] = useState(false);
  return (
    <Link to={`/movies/${movie._id}`}>
    <div className="movie-index-item"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="movie-index-item-info">
        <h2 className="movie-index-item-title">{movie.title}</h2>
      </div>
      <img
        className="movie-index-item-image"
        src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`}
        style={{ "maxWidth": "300px" }}
      />
      {isShown && (
        <div className="movie-index-item-hover-info"> 
          <p>{movie.instructor}, {movie.year}</p>
        </div>
      )}
    </div>
    </Link>
  )
}

export default MovieIndexItem;