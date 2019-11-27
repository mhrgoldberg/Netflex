import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
// import { Route }
import NavBarContainer from "./nav/navbar_container"
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MovieIndexContainer from "./movies/movie_index_container";
import MovieShowContainer from "./movies/movie_show_container";

const App = () => (
  <div className="main-content">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/movies" component={MovieIndexContainer} />
      <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
    </Switch>
  </div>
);

export default App;
