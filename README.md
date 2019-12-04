<img src="https://i.ibb.co/BZWtCfQ/logo.png" alt="logo" border="0">

[Crop, Top, and Roll (Click Me!)](https://netflex80s.herokuapp.com/#/login)

## Background and Overview

This time warp is totally tubular!! Get fit with your favorite 80s workout crazes— or relive iconic moments, like the Miracle on Ice! Netflex is your go-to, neon-sheathed, Gen-X, fever-dream; sign up now!

<img src="https://i.ibb.co/qjMh2Yy/login.png" alt="login" border="0">


Site-wide thematic styling provides the comfort of a traditional Netflix clone, and the high-octane energy of America's most nostalgic decade. Throughout, one will find our elements are similar, but different-- starting with the background montage on the login page, all the way through button indicators, so a user can save a video!

Users who sign up for our service can browse and watch a variety of videos from different thematic categories, like Jazzercise or Hula Hoop. They can save favorites to a list, and then remove those movies, from that list, at the push of a button! Users can also search through our video database via the nav bar; we'll begin our search as soon as you start typing!

To keep our users interested, dynamic movie segments have been built into our pages with AWS. Longer, selectable, videos have been embedded to save on overall project costs. Start watching with one click!


## Functionality and MVP

1. User authorization - New users can sign up, and existing users can log in
2. Display Videos - Dynamic movie viewer and video storage; using both AWS and embedded videos
3. Genres - Displays categories on the main page by database categorization
4. Search - Search by movie name; agnostic of capitalization or special characters
5. MyList - Ability to save your favorite movies to a list for later reference (you can also delete them from the list!)
6. Deployment to Heroku

## Tricky Issues and Solutions

### Responsive Search

<img src="https://i.ibb.co/Ydc0ZBS/searchbar.png" alt="searchbar" border="0">

One of our goals was to create a Search function that is responsive and flexible-- one that would display results as users type and be a bit lenient of the user input. We utilized an onkeyup event to initiate search function; both the key pressed and the current input of the search bar affects the behavior of the method. Chaining a .then() allows us to push the results of the search into a show component via the route "/search". By pressing "return" or "enter", the user can clear the bar for the next search.

```javascript
  showResults(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    if (e.keyCode === 13){
      e.currentTarget.value = ""
      this.props.search(val).then(() => this.props.history.push("/search"));
    } else if ((val === "" || val.length <= 0) ) {
      return <div className="loading-background">
      <i className="fas fa-spinner"></i>
      <p>Loading...</p>
    </div>;
    } else {
      this.props.search(val).then(() => (this.props.history.push("/search")));
    }
  }
  ```
  
Below is the query used to retrieve information from our database. We added an index on the 'title' header of our database via the MongoDB Shell so users can query that information directly, with full or partial guesses. Utilizing regex in the query also makes the function unperturbed by capialization or special characters.

```javascript
const express = require('express');
const router = express.Router();
const movies = require('../../models/Movie');

router.post('/', function(req, res, next) {
  let q = req.body.body;
  movies.find({title : {$regex: q, $options: 'i'}}, function (err, data) {res.json(data)}).sort({ date: -1 })
    .then(movies)
  ;
});

module.exports = router;
```


## Technologies and Technical Challenges

* Node JS
* Express
* MongoDB
* HTML
* CSS

## Libraries

* React JS
* Redux
* Mongoose
* BCrypt, JSONWebToken, Passport for user authentication
* Validator
* Bodyparser middleware


## Group Members and Work Breakdown
Mitchell Reiss, Alex Lee, Jacob Schneider
### Day 1
* Create Database, setup file tree, backend user auth - Mitchell
* Build frontend components for Login, signup, logout - Jacob
* AWS Setup - Alex

### Day 2
* Style navbar - Mitchell
* Style user auth and splash page - Jacob
* Add movie index and show page - Alex

### Day 3
 * Create My List feature backend - Mitchell
 * Style movie index and show page - Alex
 * Seed movies - Alex, Jacob, Mitchell
 
### Day 4
 * Add styling and display movies to index page - Alex
 * Style My List feature - Mitchell
 * Search by movie - Jacob
 
### Day 5
* Finish styling - Alex, Mitchell, Jacob
* Deployment to Heroku - Jacob
