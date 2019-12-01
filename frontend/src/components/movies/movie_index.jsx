import React from 'react';
import MovieIndexItem from './movie_index_item';

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
        <div key={i} className="movie-index-section-main">
          <h1 className="movie-index-section-title">{genre}</h1>
          <div className="movie-index-section">
            {genreMovies.map((movie, j) => {
              return <MovieIndexItem key={j} movie={movie} onClick={this.handleMovieClick(movie._id)}/>
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
          <div className="movie-index-video-description">
            Funky.<br />
            Fun. <br />
            Fresh. <br />
            Fitness. <br />
            <p className="movie-index-video-inner-description">
              Get off your seat and move to the beat! Netflex is here to get your hips movin, your muscles boomin, your body groovin! 
            </p>
          </div>
          <video 
            autoPlay 
            loop  
            width="100%"
            src="https://netflex-seeds.s3-us-west-1.amazonaws.com/videos/neflexMainMovie.mp4" 
            type="video/mp4" 
          ></video>
        </div>
          {allSections}
      </div>
    );
  }
}


export default MovieIndex;