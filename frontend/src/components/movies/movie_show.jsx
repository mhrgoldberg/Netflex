import React from 'react';
import ReactPlayer from 'react-player'

class MovieShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.movieId);
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ movie: this.props.movie, loading: false });
    }
  }

  render() {

    if (this.state.loading ) {
      return null;
    } else {
      return (
        <div className="movie-show-main">
        <div className="movie-show-player-wrapper">
          <div className="back-button">
            <i className="fas fa-arrow-left" onClick={() => this.props.history.push("/movies")}></i>
          </div>
          <ReactPlayer 
            className="movie-show-video" 
            url={`https://youtube.com/watch?v=${this.state.movie.videoUrl}`}
            playing
            volume="0.5"
            width="100%"
            height="150%"
          />
          {/* <iframe id="movie-show-video" className="movie-show-video" width="100%" height="115%" src={`https://clipmega.com/embed?v=${this.state.movie.videoUrl}`} frameborder="0" >
          </iframe> */}
          
          {/* <iframe width='500' height='294' src={"https://www.youtube.com/embed/bTGPfJUJRh0?&theme=dark&autohide=2&modestbranding=1"} frameborder="0"></iframe> */}
        </div>
        </div>
      );
    }
  }
}

export default MovieShow;