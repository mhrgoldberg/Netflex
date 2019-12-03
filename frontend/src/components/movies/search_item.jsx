import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchIndexItem = stuff => {
  let { movie } = stuff;
  let [isShown, setIsShown] = useState(false);
  // debugger;
  return (
    <Link to={`/movies/${movie._id}`}>
      <div className="search-index-item" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
        <div className="search-index-item-info">
          <h2 className="search-index-item-title">{movie.title}</h2>
        </div>
        <img className="search-index-item-image" src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`} style={{ maxWidth: "300px" }} />
        {isShown && ( <div className="search-index-item-hover-info"> <p> {movie.instructor}, {movie.year} </p> </div> )}
      </div>
    </Link>
  );
};

export default SearchIndexItem;
