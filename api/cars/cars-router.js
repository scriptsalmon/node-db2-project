const express = require('express');
//knex
//db

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'returns an array of cars sorted by id (or an empty array if there are not any)' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'returns the car by given id' })
})

router.post('/', (req, res) => {
    res.json({ message: 'returns the created car' })
})

module.exports = router;