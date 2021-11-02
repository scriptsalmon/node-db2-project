const express = require('express')
//model
const Cars = require('./cars-model.js')
//middleware
const mw = require('./cars-middleware.js')
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

router.get('/:id', mw.checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
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