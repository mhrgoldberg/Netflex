import React from "react";
import SearchIndexItem from "./search_item";
import { withRouter } from "react-router-dom";

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.inList = this.inList.bind(this); 
  }
  componentDidMount() {
    this.props.fetchList(this.props.user.id)
    // .then(() => this.props.fetchMovies())
    
  }

  handleMovieClick(movieId) {
    return e => {
      this.props.history.push(`/movies/${movieId}`);
    };
  }

  inList(movieId) {
    let present = false;
    this.props.list.forEach( listItem => {
      if (listItem._id === movieId) {
        present = true;
      };
    });
    return present;
  }

  render() {
    const movies = this.props.movies.map((movie, i) => {
      return (
        <SearchIndexItem
          className="search-index-item"
          key={i}
          movie={movie}
          user={this.props.user}
          addNewItem={this.props.addNewItem}
          inList={this.inList(movie._id)}
          onClick={this.handleMovieClick(movie._id)}
        />
      );
    });

    return <div className="search-show">{movies}</div>;
  }
};



export default withRouter(MovieSearch);