const express = require("express");
const router = express.Router();
const passport = require("passport");

const ListItem = require("../../models/ListItem");

router.get("/:userId", (req, res) => {
  ListItem.find({ user: req.params.userId })
    .sort({ date: -1 })
    .then(listItems => {
      const movieIds = listItems.map(listItem => listItem.movie);
      return Movie.find({ _id: { $in: movieIds } }).then(movies => movies);
    })
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nolistfound: "No list items found" }));
});

router.post(
  "/",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newListItem = new ListItem({
      movie: req.body.movie,
      user: req.body.user
    });

    newListItem.save().then(listItem => res.json(listItem));
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
