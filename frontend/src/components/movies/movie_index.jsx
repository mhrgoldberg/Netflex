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
    }
  }

  handleMovieClick(movieId) {
    return (e) => {
      this.props.history.push(`/movies/${movieId}`);
    }
  }

  render() {
    if (this.state.movies.length === 0) {
      return null;
    }

    let genres = {};
    if (this.state.movies.length > 0) {
      for (let i = 0; i < this.state.movies.length; i++) {
        if (!Object.keys(genres).includes(this.state.movies[i].genre)) {
          genres[this.state.movies[i].genre] = [];
        }
        genres[this.state.movies[i].genre].push(this.state.movies[i]);
      }
    }

    let allSections = Object.keys(genres).sort().map((genre, i) => {
      let genreMovies = genres[genre];
      return (
        <div className="movie-index-section-main">
          <h1 className="movie-index-section-title">{genre}</h1>
          <div className="movie-index-section">
            {genreMovies.map((movie, i) => {
              return (
                <div key={i} className="movie-index-item" onClick={this.handleMovieClick(movie._id)}>
                  <div className="movie-index-item-info">
                    <h2 className="movie-index-item-title">{movie.title}</h2>
                  </div>
                  <img 
                    className="movie-index-item-image" 
                    src={process.env.PUBLIC_URL + `/images/previews/${movie.imageUrl}`} 
                    style={{"maxWidth": "300px"}} 
                  />
                </div>
              )
            })}
            <div className="movie-index-item-hidden-last"></div>
          </div>
        </div>
      )
    })



    return (
      <div className="movie-index-main">
        <div className="movie-index-video-hider"></div>
        <div className="movie-index-main-video-wrapper">

          <video 
            autoPlay 
            loop  
            width="100%"
            src="https://netflex-seeds.s3-us-west-1.amazonaws.com/videos/neflexMainMovie.mp4" type="video/mp4" 
          >
          </video>
        </div>
          {allSections}
      </div>
    );
  }
}


export default MovieIndex;