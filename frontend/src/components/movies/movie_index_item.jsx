import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const MovieIndexItem = props => {
  let { movie, inList, addListItem, user } = props;
  let [isShown, setIsShown] = useState(false);
  let addButton = null;
  {
    if (!inList) {
      addButton = (
        <i
          onClick={(e) => {
            e.stopPropagation();
            return props.addNewItem({
              user: user.id,
              movie: movie._id
            })
          }}
          className="fas fa-plus-circle"
        ></i>
      );
    }
  }

  return (
    <div onClick={() => props.history.push(`/movies/${movie._id}`)}>
      <div
        className="movie-index-item"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div className="movie-index-item-info">
          <h2 className="movie-index-item-title">{movie.title}</h2>
        </div>
        <img
          className="movie-index-item-image"
          src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`}
          style={{ maxWidth: "300px" }}
        />
        {isShown && (
          <div>
            <div className="movie-index-item-hover-info">
              <p>
                {movie.instructor}, {movie.year}
              </p>
            </div>
            <div className="list-index-item-hover-info">{addButton}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(MovieIndexItem);
