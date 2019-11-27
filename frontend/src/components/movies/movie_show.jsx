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
    let videoSettings = {
      controls: "false"
    }

    if (this.state.loading ) {
      return null;
    } else {
      console.log(this.props);
      return (
        <div className="movie-show-player-wrapper">
          <div className="back-button"><i className="fas fa-arrow-left" onClick={() => this.props.history.push("/movies")}></i></div>
          {/* <video autoplay>
            <source src="https://www.youtube.com/watch?v=bTGPfJUJRh0" type="video/mp4"></source>
          </video> */}
          {/* <iframe width='500' height='294' src={"https://www.youtube.com/embed/bTGPfJUJRh0?&theme=dark&autohide=2&modestbranding=1"} frameborder="0"></iframe> */}
          <ReactPlayer 
            className="react-player" 
            url="https://vimeo.com/244291904" 
            playing 
            width="120vw" height="120vh" 
            // aspectRatio="4:3" 
            controls={false} 
            volume={0} 
            muted={true} 
            // config={{
            //   youtube: {
            //     playerVars: { showinfo: 1 }
            //   }
            // }}
          /> 

        </div>
      );
    }
  }
}

export default MovieShow;