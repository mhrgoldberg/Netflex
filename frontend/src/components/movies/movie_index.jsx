import React from 'react';
import MovieIndexItem from './movie_index_item';
import { findDOMNode } from "react-dom";

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true
    }
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.inList = this.inList.bind(this); 
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    this.props.fetchList(this.props.user.id)
    .then(() => this.props.fetchMovies())
    .then(() => this.setState({ loading: true }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({movies: this.props.movies, loading: false});
    }
  }

  scrollLeft(elementId) {
    findDOMNode(this.refs[elementId]).scrollLeft -= 600;
  }

  scrollRight(elementId) {
    findDOMNode(this.refs[elementId]).scrollLeft += 600;
  }

  handleMovieClick(movieId) {
    return (e) => {
      this.props.history.push(`/movies/${movieId}`);
    }
  }

  inList(movieId) {
    let present = false;
    this.props.list.forEach( listItem => {
      if (listItem._id === movieId) {
        present = true;
      };
    });
    return present;
  }

  render() {
    if (this.state.movies.length === 0) {
      return <div className="loading-background">
      <i className="fas fa-spinner"></i>
      <p>Loading...</p>
    </div>;
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
      let genreMovies = genres[genre].reverse();
      
      let newSection;
      if (i % 3 === 0 && i > 0) {
        if (i === 3) {
          newSection = (
            <div className="movie-index-section-video-wrapper">
              <div className="movie-index-video-description section">
                <div className="movie-index-video-description-title section">
                  EMBRACE YOUR JAZZY FLAIR
                </div>
                
                <p className="movie-index-video-inner-description section">
                  In the mood to groove to some jazzy tunes? Jazzercise is the perfect workout for you!

                  <br /> <br />
                  <a onClick={() => document.getElementById('jazzercise').scrollIntoView()}>
                    Go to Jazzercise <i className="fas fa-chevron-right"></i>
                  </a>
                </p>
              </div>
              <div className="index-video-cutoff-top"></div>
              <div className="movie-index-main-video-wrapper">
                <video
                  autoPlay
                  loop
                  src="https://r6---sn-a5mekn7r.googlevideo.com/videoplayback?expire=1575629175&ei=Ft3pXbi3OtDPgwPX26HQDQ&ip=66.249.83.103&id=o-AM8CkzP8CdxvgNUQkECYBQ1Rn2s_cUlhpwXwzcRj9jT5&itag=18&source=youtube&requiressl=yes&mime=video/mp4&gir=yes&clen=1383834&ratebypass=yes&dur=15.023&lmt=1575607399887003&fvip=1&fexp=23842630,23860863&c=WEB&txp=6211222&sparams=expire,ei,ip,id,itag,source,requiressl,mime,gir,clen,ratebypass,dur,lmt&sig=ALgxI2wwRQIhAP2yCD-YHZ4rWU8a0JZWEm9hxgr0zaR4looX2K2_OPodAiBF0iDbV5CrswsmdZUceZ65ubbuAECSheBy-jyoJJWCbg==&redirect_counter=1&cm2rm=sn-a5myl7e&req_id=cda6b305a0c2a3ee&cms_redirect=yes&mip=47.146.37.91&mm=34&mn=sn-a5mekn7r&ms=ltu&mt=1575607467&mv=m&mvi=5&pl=17&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgUkqSUyEAVAbberN0YJKfPmsgGK2s7cTBgE6YmJ8_3yECICtxl7_Le0PR4LyCScVuQwttpO0Rdv14sPs90DV6RTBb"
                  type="video/mp4"
                ></video>
              </div>
              <div className="index-video-cutoff-bottom"></div>
            </div>
          )
        } else if (i === 6) {
          newSection = (
            <div className="movie-index-section-video-wrapper">
            
              <div className="movie-index-video-description section">
                <div className="movie-index-video-description-title section">
                  CROP TOP AND ROLL
                </div>
                <p className="movie-index-video-inner-description section">
                  Walking is so yesterday. <br /> Grab your skates, and a partner too. <br /> Let's dance and zoom across the room!

                  <br /> <br />
                  <a onClick={() => document.getElementById('roller-skating').scrollIntoView()}>
                    Go to Roller Skating <i class="fas fa-chevron-right"></i>
                  </a>
                </p>
              </div>
              
              
              <div className="index-video-cutoff-top"></div>
              <div className="movie-index-main-video-wrapper">
                <video
                  autoPlay
                  loop
                  src="https://redirector.googlevideo.com/videoplayback?expire=1575622669&ei=rcPpXfWVHpG68wTzrbPgCA&ip=66.249.83.119&id=o-AGLTBnxwEn6YnlwCis2YdwihBXqSZun9aWrPa_GETFmU&itag=18&source=youtube&requiressl=yes&mm=31,26&mn=sn-nx5e6nez,sn-5hnedn7z&ms=au,onr&mv=m&mvi=0&pl=28&mime=video/mp4&gir=yes&clen=976638&ratebypass=yes&dur=10.936&lmt=1575598424412438&mt=1575601001&fvip=1&fexp=23842630&c=WEB&txp=6216222&sparams=expire,ei,ip,id,itag,source,requiressl,mime,gir,clen,ratebypass,dur,lmt&sig=ALgxI2wwRAIgLzC0t3YzmtCGk-PzSa0nPcFcZmmbcLjyERn6ySAN42kCIFMYH6mNRlky7e54bw4d52CxxyYFOzYga_IqBK2W2CVg&lsparams=mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgYbqz_FCinAqftVtlkVGid5lU6ZHdNpOWIW4o-zwOy10CIQCw6VQpuZVy5Kzf3_-IWYJu6XxptjSvCx2ryfV0LvBwKA=="
                  type="video/mp4"
                ></video>
                </div>
              <div className="index-video-cutoff-bottom"></div>
              {/* <video
                className="section-video"
                autoPlay
                loop
                src="https://netflex-seeds.s3-us-west-1.amazonaws.com/videos/section2.mp4"
                type="video/mp4"
              ></video> */}
            </div>
          )
        }

        return (
          <div ref={(ele) => this.myDiv = ele}>
            {newSection}
            {genre === "Jazzercise" ? <div id="jazzercise"></div> : ""}
            {genre === "Roller Skating" ? <div id="roller-skating"></div> : ""}

            <div key={i} className="movie-index-section-main">
              
              <h1 className="movie-index-section-title">{genre}</h1>
              <div
                className="left-button"
                id={`left-button-${i}`}>
                <i class="fas fa-chevron-left" onClick={() => this.scrollLeft(`section-${i}`)}></i>
                </div>
              <div className="movie-index-section" id={`section-${i}`} ref={`section-${i}`}>
                <div className="movie-index-item-hidden-first"></div>
                
                {genreMovies.map((movie, j) => {
                  return <MovieIndexItem 
                    key={j} 
                    movie={movie} 
                    addListItem={this.props.addListItem}
                    user={this.props.user}
                    inList={this.inList(movie._id)} 
                    onClick={this.handleMovieClick(movie._id)} 
                  />
                })}
                <div className="movie-index-item-hidden-last"></div>
                </div>
                <div
                  className="right-button"
                  id={`right-button-${i}`}>
                  <i class="fas fa-chevron-right" onClick={() => this.scrollRight(`section-${i}`)}></i>
                </div>
              </div>
            </div>
        )
      }
      
      return (
        <div key={i} className="movie-index-section-main">
          
          {genre === "Jazzercise" ? <div id="jazzercise"></div> : ""}
          {genre === "Roller Skating" ? <div id="roller-skating"></div> : ""}
          <h1 className="movie-index-section-title">{genre}</h1>
          <div
            className="left-button"
            id={`left-button-${i}`}>
            <i class="fas fa-chevron-left" onClick={() => this.scrollLeft(`section-${i}`)}></i>
          </div>
          <div className="movie-index-section" id={`section-${i}`} ref={`section-${i}`}>
            <div className="movie-index-item-hidden-first"></div>
          
            {genreMovies.map((movie, j) => {
              return <MovieIndexItem 
                key={j} 
                movie={movie} 
                addNewItem={this.props.addNewItem}
                user={this.props.user}
                inList={this.inList(movie._id)} 
                onClick={this.handleMovieClick(movie._id)}
              />
            })}
            <div className="movie-index-item-hidden-last"></div>
            
          </div>
          <div
            className="right-button"
            id={`right-button-${i}`}>
            <i class="fas fa-chevron-right"
             onClick={() => this.scrollRight(`section-${i}`)}></i>
          </div>
        </div>
      )
    })

    return (
      <div className="movie-index-main">
        <div className="movie-index-video-hider"></div>
        <div className="movie-index-video-description">
          <div className="movie-index-video-description-title">
            Funky. Fun. Fresh. Fitness.
          </div>
          <p className="movie-index-video-inner-description">
            Get off your seat and move to the beat! Netflex is here to get your hips movin, your muscles boomin, your body groovin!
          </p>
        </div>
        
        <div className="movie-index-main-video-wrapper">
          <video 
            autoPlay 
            loop  
            src="https://r3---sn-a5mlrn7r.googlevideo.com/videoplayback?expire=1575629924&ei=BODpXaDmKYvs8gSOo7XwCA&ip=66.249.83.97&id=o-AOug7RvjRgEkxjn2WKWWDbrb1v1tKQw2YFMPC37xe_PG&itag=22&source=youtube&requiressl=yes&pcm2=yes&mime=video/mp4&ratebypass=yes&dur=46.114&lmt=1575608258860848&fvip=3&fexp=23842630&c=WEB&txp=6216222&sparams=expire,ei,ip,id,itag,source,requiressl,pcm2,mime,ratebypass,dur,lmt&sig=ALgxI2wwRgIhANJwBoEVscoalloZdM-Gj9wwWIKNb-FDSoUKZkar5wEkAiEAuueFcQePPIZEOGJjcc3yaEprEMJdFoj2Ns7KImmzpNY=&cms_redirect=yes&mip=47.146.37.91&mm=31&mn=sn-a5mlrn7r&ms=au&mt=1575608264&mv=m&mvi=2&pl=17&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgTp_4sNDlaXedzhO3aWGqbZP8qtlEEa2sYHhaNP7-ZpMCIAVypVU6LhH0TNE8DDHPjhyGnnl_8tG9XAO9ZfwTKbQn" 
            type="video/mp4" 
          ></video>
        </div>
        <div className="index-video-cutoff-bottom"></div>
          {allSections}
      </div>
    );
  }
}


export default MovieIndex;