const express = require('express')
const router = express.Router()

const Movie = require('../../models/Movie')

router.get('/', (req, res) => {
  Movie.find()
    .sort({ date: -1 })
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => res.status(404).json({ nomoviesfound: 'No movies found' }))
})

router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) =>
      res.status(404).json({ nomoviefound: 'No movie found with that ID' })
    )
})

router.post('/', (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    instructor: req.body.instructor,
    genre: req.body.genre,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    videoUrl: req.body.videoUrl,
  })

  newMovie.save().then((movie) => res.json(movie))
})

module.exports = router
