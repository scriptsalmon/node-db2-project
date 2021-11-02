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

exports.checkCarPayload = async (req, res, next) => {
  try {

  } catch (err) {
    next(err);
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
