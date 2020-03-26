const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const Movie = require("../../models/Movie");
const ListItem = require("../../models/ListItem");

router.get("/:userId", (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    return Movie.find({ _id: { $in: user.myList } })
    .then(movies => res.json(movies))
    .catch(err =>
        res.status(404).json({ nolistfound: "No list items found" })
      );
  });
});

router.post(
  "/",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const movie = req.body.movie;
    const userId = req.body.user;

    return User.findById(userId, (err, user) => {
      user.myList.push(movie);
      user.save();
    });
  }
);

router.get("/delete/:movieId/", (req, res) => {
  ListItem.deleteOne({ movie: req.params.movieId }, (err, listItem) => {
    if (err) {
      res.json(err);
    } else {
      res.json("Removed Item");
    }
  });
});

module.exports = router;
