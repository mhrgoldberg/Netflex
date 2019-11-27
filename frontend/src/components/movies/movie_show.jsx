import React from 'react';
// import { Player, ControlBar, VolumeMenuButton, BigPlayButton } from 'video-react';
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
    this.props.fetchMovie(this.props.movieId)//.then(() => this.setState({ loading: true }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ movie: this.props.movie, loading: false });
      setTimeout(() => console.log(this.state), 200);
    }
  }


  render() {
    if (this.state.loading ) {
      return null;
    } else {
      console.log(this.props);
      return (
        <div className="movie-show-player-wrapper">
          <div className="back-button"><i className="fas fa-arrow-left" onClick={() => this.props.history.push("/movies")}></i></div>
          <ReactPlayer className="react-player" url={this.state.movie.videoUrl} playing width="100%" height="100%" controls="true" disablePictureInPicture />
        </div>
      );
    }
  }
}

export default MovieShow;