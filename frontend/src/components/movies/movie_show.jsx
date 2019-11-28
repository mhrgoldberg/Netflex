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
      // setTimeout(() => {
      //   document.getElementById("movie-show-video").click();
      // }, 200);
    }
  }

  render() {

    if (this.state.loading ) {
      return null;
    } else {
      console.log(this.props);
      return (
        <div className="movie-show-player-wrapper">
          <div className="back-button">
            <i className="fas fa-arrow-left" onClick={() => this.props.history.push("/movies")}></i>
          </div>
          <iframe id="movie-show-video" className="movie-show-video" width="100%" height="110%" src={`https://clipmega.com/embed?v=${this.state.movie.videoUrl}`} frameborder="0" >
          </iframe>
          {/* <video width="320" height="240" controls >
            <source src="https://clipmega.com/embed?v=bTGPfJUJRh0" type="video/mp4" ></source>
          </video> */}

          {/* <iframe width="640" height="360" src="https://www.youtube.com/embed/bTGPfJUJRh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          {/* <video autoplay>
            <source src="https://clipmega.com/embed?v=bTGPfJUJRh0"></source>
          </video> */}
          {/* <iframe width='500' height='294' src={"https://www.youtube.com/embed/bTGPfJUJRh0?&theme=dark&autohide=2&modestbranding=1"} frameborder="0"></iframe> */}
          {/* <ReactPlayer 
            className="react-player" 
            url="https://clipmega.com/watch?v=bTGPfJUJRh0"
            playing 
            width="120vw" height="120vh"  
            // aspectRatio="4:3" 
            // controls={false} 
            // volume={0} 
            // muted={true}  
            // config={{
            //   youtube: {
            //     playerVars: { showinfo: 1 }
            //   }
            // }}
          // /> */}
          {/* <div id="youtube-player"></div> */}
          {/* <script src="https://vjs.zencdn.net/7.5.5/video.js"></script> */}
        </div>
      );
    }
  }
}

export default MovieShow;