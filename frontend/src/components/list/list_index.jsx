import React from "react";
import ListIndexItem from "./list_index_item";
import { withRouter } from "react-router-dom";

class ListIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true
    };
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchList(this.props.user.id)
      .then(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ list: this.props.list, loading: false });
    }
  }

  handleMovieClick(movieId) {
    return e => {
      this.props.history.push(`/movies/${movieId}`);
    };
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div className="list-container">
        {this.props.movies.allMovies.map((movie, i) => {
          return (
            <ListIndexItem
              key={movie._id}
              movie={movie}
              deleteItem={() => {
                // debugger;
                return this.props.deleteItem(movie._id)}}
              onClick={this.handleMovieClick(movie._id)}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(ListIndex);
