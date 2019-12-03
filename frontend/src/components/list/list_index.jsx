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
      return <div className="loading-background">
        <i className="fas fa-spinner"></i>
        <p>Loading...</p>
      </div>;
    }
    return (
      <div className="search-show">
        {this.props.list.map((movie, i) => {
          return (
            <ListIndexItem
              className="search-index-item"
              key={movie._id}
              movie={movie}
              deleteItem={() => {
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
