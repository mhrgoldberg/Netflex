import React from 'react';
import { Player, ControlBar, VolumeMenuButton, BigPlayButton } from 'video-react';

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
      console.log(this.state);
      return (
        <div>
          <Player
            autoPlay 
            src={this.state.movie.videoUrl} 
          >
            <ControlBar disableCompletely={true}>
              {/* <VolumeMenuButton />
              <BigPlayButton disabled /> */}
            </ControlBar>
          </Player>
        </div>
      );
    }
  }
}

export default MovieShow;