import React, { useState } from "react";
import { withRouter } from "react-router-dom";


const ListIndexItem = props => {
  let { onClick, deleteItem, movie } = props;
  let [isShown, setIsShown] = useState(false);

  return (
    <div onClick={() => props.history.push(`/movies/${movie._id}`)}>
      <div
        className="search-index-item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="search-index-item-info">
          <h2 className="search-index-item-title">{movie.title}</h2>
        </div>
        <img
          className="search-index-item-image"
          src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`}
          style={{ maxWidth: "300px" }}
        />
        {isShown && (
          <div className="search-index-item-hover-info trash-icon-box">
            <i onClick={e => { e.stopPropagation(); return deleteItem(movie._id); }}className="far fa-trash-alt"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ListIndexItem);
