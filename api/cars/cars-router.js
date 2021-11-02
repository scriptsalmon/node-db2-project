const express = require('express')
//model
const Cars = require('./cars-model.js')
//knex
//db

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.json(cars);
    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res) => {
    res.json({ message: 'returns the car by given id' })
})

router.post('/', (req, res) => {
    res.json({ message: 'returns the created car' })
})

router.use((err, req, res, next) => {
    res.status( err.status || 500 ).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;