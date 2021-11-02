const Cars = require('./cars-model.js');

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
      next({ error, message: 'vin is missing' })
    } else if (!make){
      next({ error, message: 'make is missing' })
    } else if (!model){
      next({ error, message: 'model is missing' })
    } else if (!mileage){
      next({ error, message: 'mileage is missing' })
    } 

    if(error.message) {
      next(error)
    } else {
      next()
    }

}

exports.checkVinNumberValid = async (req, res, next) => {
    try {

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
