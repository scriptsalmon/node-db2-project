const Cars = require('./cars-model.js');

const vinValidator = require('vin-validator');
var isValidVin = vinValidator.validate('11111111111111111'); // true

exports.checkCarId = async (req, res, next) => {
  try {
    const validCar = await Cars.getById(req.params.id)
    if(!validCar){
      next({ status: 404, message: 'id not found' })
    } else {
      req.car = validCar;
      next()
    }
    next()
  } catch (err) {
    next({ status: 400, message: 'checkCarId malfunctioned' });
  }
}

exports.checkCarPayload = (req, res, next) => {
    const error = { status: 400 }
    const { vin, make, model, mileage } = req.body;
    if(!vin){
      error.message = 'vin is missing'
    } else if (!make){
      error.message = 'make is missing'
    } else if (!model){
      error.message = 'model is missing'
    } else if (!mileage){
      error.message = 'mileage is missing'
    } 

    if(error.message) {
      next(error)
    } else {
      next()
    }

}

exports.checkVinNumberValid = async (req, res, next) => {
    try {
      const isValidVin = vinValidator.validate(req.body.vin);
      if(!isValidVin){
        next({ status: 400, message: `vin ${req.body.vin} is invalid` })
      } else {
        next();
      }
  } catch (err) {
    next(err);
  }
}

const checkVinNumberUnique = async (req, res, next) => {
    try {
      
  } catch (err) {
    next(err);
  }
}
