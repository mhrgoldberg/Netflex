import React from 'react';

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
        <div className="movie-index-section" >
          {this.state.movies.map((movie, i) => (
            <div key={i} className="movie-index-item" onClick={this.handleMovieClick(movie._id)}>
              <div className="movie-index-item-info">
                <h2 className="movie-index-item-title">{movie.title}</h2>
                {/* <h4 className="movie-index-item-instructor">{movie.instructor}</h4> */}
              </div>
              {/* <h2>{movie.year}</h2> */}
              <img 
                className="movie-index-item-image" 
                src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`} 
                style={{"max-width": "300px"}} 
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