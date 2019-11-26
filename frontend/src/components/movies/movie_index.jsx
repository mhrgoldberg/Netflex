import React from 'react';
// import { withRouter } from 'react-router-dom';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true
    }
    this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies().then(() => this.setState({ loading: true }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({movies: this.props.movies, loading: false});
      setTimeout(() => console.log(this.state.movies), 200);
    }
  }

  handleMovieClick(movieId) {
    return (e) => {
      this.props.history.push(`/movies/${movieId}`);
    }
  }

  render() {
    if (this.state.movies.length === 0) {
      return (<div>There are no Movies</div>)
    } else {
      return (
        <div>
          <h2>All Movies</h2>
          {this.state.movies.map(movie => (
            <div>
              <h2>{movie.title}</h2>
              <h2>{movie.instructor}</h2>
              <h2>{movie.year}</h2>
              <img 
                src={movie.imageUrl} 
                style={{"max-width": "300px"}} 
                onClick={this.handleMovieClick(movie._id)}
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

// export default withRouter(Tweet);
export default MovieIndex;