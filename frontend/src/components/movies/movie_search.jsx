import React from "react";
import SearchIndexItem from "./search_item";
import { withRouter } from "react-router-dom";

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  handleMovieClick(movieId) {
    return e => {
      this.props.history.push(`/movies/${movieId}`);
    };
  }

  render() {
    const movies = this.props.movies.map((movie, i) => {
      return (
        <SearchIndexItem
          className="search-index-item"
          key={i}
          movie={movie}
          onClick={this.handleMovieClick(movie._id)}
        />
      );
    });

    return <div className="search-show">{movies}</div>;
  }
};



export default withRouter(MovieSearch);