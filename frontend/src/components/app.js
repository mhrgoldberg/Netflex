import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container"
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MovieIndexContainer from "./movies/movie_index_container";
import MovieShowContainer from "./movies/movie_show_container";
import MovieSearchContainer from "./movies/movie_search_container";
import ListIndexContainer from "./list/list_index_container";

const App = () => (
  <div className="main-content">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/movies" component={MovieIndexContainer} />
      <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
      <ProtectedRoute exact path="/search" component={MovieSearchContainer} />
      <ProtectedRoute exact path="/my-list" component={ListIndexContainer} />
    </Switch>
  </div>
);

export default App;
